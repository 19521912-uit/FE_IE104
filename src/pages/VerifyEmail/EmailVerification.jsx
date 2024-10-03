import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EmailVerification = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('Đang xác thực email của bạn...');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/auth/verify_email/${id}`);
                setMessage('Xác thực email thành công! Chuyển hướng đến trang đăng nhập...');
                setLoading(false);
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } catch (error) {
                setMessage('Xác thực email thất bại. Liên hệ với bộ phận hỗ trợ.');
                setLoading(false);
            }
        };

        verifyEmail();
    }, [id, navigate]);

    return (
        <div className="email-verification-container">
            <h2>{loading ? 'Đang xử lý...' : 'Kết quả xác thực'}</h2>
            <p>{message}</p>
        </div>
    );
};

export default EmailVerification;
