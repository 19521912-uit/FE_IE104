import Account from "../pages/Account/index.jsx";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EmailVerification from "../pages/VerifyEmail/EmailVerification.jsx";
import About from "../pages/About";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/auth/verify_email/:id", component: EmailVerification },
  { path: "/thong-tin-tai-khoan", component: Account },
  { path: "/about", component: About },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
