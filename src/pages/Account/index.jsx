import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const Account = () => {
    const { user, setUser } = useContext(AuthContext);
    const [newUsername, setNewUsername] = useState(user?.username || '');
    const [editMode, setEditMode] = useState(false);

    const handleChangeUsername = (e) => {
        setNewUsername(e.target.value);
    };

    const handleSave = () => {
        if (newUsername.trim() === '') {
            alert('Tên tài khoản không được để trống!');
            return;
        }

        const updatedUser = { ...user, username: newUsername };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setEditMode(false);
    };

    // Hàm để lấy icon dựa trên progressScore
    const getLevelIcon = (progressScore) => {
        if (progressScore >= 100) {
            return "/assets/gold.png";
        } else if (progressScore >= 50) {
            return "/assets/silver.png";
        } else {
            return "/assets/bronze.png";
        }
    };

    return (
        <>
            <div className="account-page">
                <h1>Thông tin tài khoản</h1>

                {user ? (
                    <div className="account-info">
                        {/* Avatar đầy đủ chiều rộng và chiều cao */}
                        <div className="avatar-container">
                            <img src={"/assets/avatar.png"} alt="Avatar" className="avatar" />
                        </div>

                        <p>Email: {user.email}</p>

                        <p>
                            Tên tài khoản:
                            {editMode ? (
                                <>
                                    <input
                                        type="text"
                                        value={newUsername}
                                        onChange={handleChangeUsername}
                                    />
                                    <button onClick={handleSave}>Lưu</button>
                                    <button onClick={() => setEditMode(false)}>Hủy</button>
                                </>
                            ) : (
                                <>
                                    {user.username}
                                    <button onClick={() => setEditMode(true)}>Chỉnh sửa</button>
                                </>
                            )}
                        </p>

                        <p>Điểm tiến trình: {user.progressScore}</p>

                        {/* Hiển thị biểu tượng tương ứng với điểm */}
                        <div className="level-icon">
                            <img src={getLevelIcon(user.progressScore)} alt="Level Icon" />
                        </div>
                    </div>
                ) : (
                    <p>Không tìm thấy thông tin tài khoản.</p>
                )}
            </div>
        </>
    );
};

export default Account;