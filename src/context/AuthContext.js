import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [roles, setRoles] = useState(
    JSON.parse(localStorage.getItem("roles")) || []
  );

  const login = async (email, password) => {
    var response;
    try {
      response = await axios.post(
        "${process.env.REACT_APP_SERVER_DOMAIN}/auth/login",
        {
          email,
          password,
        }
      );

      const {
        token,
        roles,
        email: userEmail,
        id,
        username,
        progressScore,
        type,
      } = response.data;

      // Lưu thông tin user bổ sung
      setToken(token);
      setUser({ id, email: userEmail, username, progressScore });
      setRoles(roles);

      // Lưu vào localStorage
      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({ id, email: userEmail, username, progressScore })
      );
      localStorage.setItem("roles", JSON.stringify(roles));

      return response;
    } catch (error) {
      console.error("Login failed: ", error);
      return error;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setRoles([]);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("roles");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedRoles = JSON.parse(localStorage.getItem("roles"));

    if (storedToken && storedUser && storedRoles) {
      setToken(storedToken);
      setUser(storedUser);
      setRoles(storedRoles);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, roles, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
