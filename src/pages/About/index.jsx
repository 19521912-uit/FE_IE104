import React from 'react';
import './styles.css';

function About() {
    return (
      <div className="about-container">
        <div className="about-box">
          <h2 className="about-title">About Our Quiz Platform for Students</h2>
          <p className="about-description">Chào mừng các sinh viên đến với nền tảng trắc nghiệm trực tuyến...</p>
      </div>
  
      <div className="about-box">
        <h3 className="about-features-title">Features</h3>
        <ul className="about-features-list">
          <li>Nhiều chủ đề và cấp độ khó khác nhau</li>
          <li>Hệ thống chấm điểm tự động</li>
          <li>Bảng xếp hạng cá nhân</li>
          <li>Theo dõi tiến độ học tập</li>
        </ul>
      </div>

      <div className="about-box">
        <h3 className="about-team-title">Nhóm phát triển</h3>
        <ul className="about-team-list">
          <li>Nguyễn Văn A – MSSV: 12345678</li>
          <li>Trần Thị B – MSSV: 87654321</li>
          <li>Lê Hoàng C – MSSV: 11223344</li>
          <li>Phạm Thanh D – MSSV: 44332211</li>
          <li>Đỗ Minh E – MSSV: 99887766</li>
        </ul>
      </div>

      <div className="about-box">
        <h3 className="about-contact-title">Liên hệ hỗ trợ</h3>
        <p className="about-contact">Email: <a href="mailto:support@quizweb.com">support@quizweb.com</a></p>
      </div>
      </div>
    );
  }
  
  export default About;
  