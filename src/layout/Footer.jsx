import React from 'react'

export default function Footer() {
    return (
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-logo">
                    <a href="/">LOGO</a>
                </div>

                <div class="footer-nav">
                    <ul>
                        <li><a href="/">Trang Chủ</a></li>
                        <li><a href="/about">Giới Thiệu</a></li>
                        <li><a href="/register">Đăng Kí</a></li>
                        <li><a href="/contact">Liên Hệ</a></li>
                    </ul>
                </div>

                <div class="footer-social">
                    <a href="https://www.facebook.com" target="_blank">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank">Instagram</a>
                </div>

                <div class="footer-copyright">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
