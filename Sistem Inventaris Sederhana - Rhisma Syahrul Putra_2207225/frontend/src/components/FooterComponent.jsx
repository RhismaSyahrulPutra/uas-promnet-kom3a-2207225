import React from 'react';
import './style.css'

function FooterComponent() {
  return (
    <footer className="footer mt-auto py-3 text-white">
      <div className="container text-center">
        <span className="footer-text">
          Dibuat dengan Tekun | Oleh:{' '}
          <a
            href="https://instagram.com/huangfeihong__"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            @RhismaSyahrulPutra
          </a>{' '}
          | Tahun 2023
        </span>
      </div>
    </footer>
  );
}

export default FooterComponent;
