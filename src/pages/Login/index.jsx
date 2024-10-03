import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './../../context/AuthContext';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await login(formData.email, formData.password);
        if (response.status === 200) {
            setAlertMessage('Đăng nhập thành công!');
            setAlertType('success');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
        else if (response.status === 401) {
            setAlertMessage('Thông tin đăng nhập không chính xác hoặc tài khoản chưa được xác minh.');
        }
    };

    return (
        <div className="form-container">
            <h2>Đăng Nhập</h2>

            {alertMessage && (
                <div className={`alert ${alertType === 'error' ? 'alert-error' : 'alert-success'}`}>
                    {alertMessage}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Nhập email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Nhập mật khẩu"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Đăng Nhập</button>
            </form>
            <br />
            Bạn chưa có tài khoản? <a href="/register">Đăng kí ngay</a>
        </div>
    );
}
