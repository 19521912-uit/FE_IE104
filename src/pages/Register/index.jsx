import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
        id: '',
        username: '',
        password: '',
        email: '',
        gender: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/auth/register-user`, formData);
            console.log('Đăng ký thành công:', response.data);

            alert('Đăng ký thành công! Vui lòng kiểm tra email để xác thực.');
            navigate('/login');
        } catch (error) {
            console.error('Lỗi khi đăng ký:', error);
            alert('Đăng ký thất bại. Vui lòng thử lại.');
        }
    };

    return (
        <div className="form-container">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Tên người dùng</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Nhập tên người dùng"
                        required
                    />
                </div>
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
                <div className="form-group">
                    <label>Giới tính</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Nam"
                                onChange={handleChange}
                                checked={formData.gender === 'Nam'}
                            />
                            Nam
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Nữ"
                                onChange={handleChange}
                                checked={formData.gender === 'Nữ'}
                            />
                            Nữ
                        </label>
                    </div>
                </div>
                <button type="submit" className="submit-btn">Đăng Ký</button>
            </form>
            <br />
            Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>
        </div>
    );
}
