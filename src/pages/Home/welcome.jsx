import React from 'react'
import { FaBookOpen, FaChalkboardTeacher, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import { MdOutlineAssessment, MdContactSupport } from 'react-icons/md';

export default function Welcome() {
    return (
        <div className="welcome-page">
            <header className="header">
                <div className="header-text">
                    <h1>Chào mừng đến với EduMaster LMS</h1>
                    <p>Nền tảng học trực tuyến hiện đại, hiệu quả và thú vị dành cho bạn!</p>
                </div>
            </header>

            <section className="features">
                <h2 className="section-title">Tại sao chọn EduMaster?</h2>
                <div className="feature-grid">
                    <div className="feature-item">
                        <FaChalkboardTeacher className="icon" />
                        <h3>Giảng viên chuyên gia</h3>
                        <p>Học tập từ những chuyên gia hàng đầu, những người dạy giỏi nhất trong ngành.</p>
                    </div>
                    <div className="feature-item">
                        <FaLaptopCode className="icon" />
                        <h3>Học tập linh hoạt</h3>
                        <p>Truy cập khóa học mọi lúc, mọi nơi trên mọi thiết bị với nền tảng linh hoạt và thích ứng.</p>
                    </div>
                    <div className="feature-item">
                        <FaBookOpen className="icon" />
                        <h3>Thư viện khóa học đa dạng</h3>
                        <p>Lựa chọn từ hàng trăm khóa học ở nhiều lĩnh vực và cấp độ kỹ năng khác nhau.</p>
                    </div>
                    <div className="feature-item">
                        <FaUserGraduate className="icon" />
                        <h3>Chương trình chứng chỉ</h3>
                        <p>Nhận chứng chỉ được công nhận bởi các nhà tuyển dụng hàng đầu và nâng cao cơ hội nghề nghiệp.</p>
                    </div>
                    <div className="feature-item">
                        <MdOutlineAssessment className="icon" />
                        <h3>Bài kiểm tra & Đánh giá</h3>
                        <p>Kiểm tra kiến thức và theo dõi tiến độ của bạn với bài kiểm tra và bài tập tương tác.</p>
                    </div>
                    <div className="feature-item">
                        <MdContactSupport className="icon" />
                        <h3>Hỗ trợ 24/7</h3>
                        <p>Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp bạn mọi thắc mắc về kỹ thuật hoặc khóa học.</p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Đã sẵn sàng học tập?</h2>
                <p>Tham gia cùng hàng nghìn người học và truy cập vào nền giáo dục chất lượng ngay trong tầm tay.</p>
                <button className="cta-button">Bắt đầu ngay</button>
            </section>
        </div>
    )
}
