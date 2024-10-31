/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Hasan Korkmaz Gayrimenkul</h3>
          <p>En iyi gayrimenkul fırsatları için bizi tercih edin.</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Hızlı Bağlantılar</h4>
          <ul>
            <li><a href="/" className="footer-link">Ana Sayfa</a></li>
            <li><a href="/listings" className="footer-link">İlanlar</a></li>
            <li><a href="/about" className="footer-link">Hakkımızda</a></li>
            <li><a href="/contact" className="footer-link">İletişim</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">İletişim</h4>
          <p>
            +90 505 906 8252<br />
            hasankorkmaz45@hotmail.com
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Bizi Takip Edin</h4>
          <div className="social-links">
            <a href="#" className="footer-link">Facebook</a>
            <a href="#" className="footer-link">Twitter</a>
            <a href="#" className="footer-link">Instagram</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Hasan Korkmaz Gayrimenkul. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
