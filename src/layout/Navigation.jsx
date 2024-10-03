import React, { useContext, useState } from 'react';
import { FaHome, FaUser, FaSignInAlt, FaShoppingCart, FaWallet, FaSignOutAlt, FaCog, FaInfoCircle, FaChevronDown } from 'react-icons/fa';
import AuthContext from './../context/AuthContext';

const Navigation = () => {
    const { token, user, logout } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        logout();
        alert('Đã đăng xuất');
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className="navigation">
            <div className="logo">
                <a href="/">LOGO</a>
            </div>
            <ul className="menu">
                <li>
                    <a href="/">
                        <FaHome /> Trang Chủ
                    </a>
                </li>
                <li>
                    <a href="/about">
                        <FaInfoCircle /> Giới Thiệu
                    </a>
                </li>
                {token ? (
                    <>
                        <li className="dropdown">
                            <button onClick={toggleDropdown}>
                                Tài Khoản <FaChevronDown />
                            </button>
                            {showDropdown && (
                                <ul className="dropdown-menu">
                                    <li><a href="/lam-bai-thi">Làm Bài Thi</a></li>
                                    <li><a href="/lich-su-thi">Lịch Sử Thi</a></li>
                                    <li><a href="/thong-tin-tai-khoan">{user?.username} - Tài khoản</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a href="/settings">
                                <FaCog /> Cài Đặt
                            </a>
                        </li>
                        <li>
                            <button onClick={handleLogout} id='logout'>
                                <FaSignOutAlt /> Đăng Xuất
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li><a href="/register"><FaUser /> Đăng Kí</a></li>
                        <li><a href="/login"><FaSignInAlt /> Đăng Nhập</a></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
