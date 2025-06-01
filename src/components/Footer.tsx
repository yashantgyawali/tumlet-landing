
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-center px-6 py-12 md:px-24">
      <div className="flex flex-col items-center sm:items-start gap-2 mb-6 sm:mb-0">
        <img className="w-24" src="/tumlet-logo.png" alt="Tumlet Logo" />
        <span className="text-tumlet-footerText text-sm sm:text-lg">on a mission to spread playfulness amongst nepali youths</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="https://www.instagram.com/tumlet.boardgames/" target="_blank" rel="noopener noreferrer">
          <img className="footer-svg hover:scale-110 transition-transform" src="/insta.svg" alt="Instagram" />
        </a>
        <a href="mailto:tumletgames@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="footer-svg hover:scale-110 transition-transform" src="/email.svg" alt="Email" />
        </a>

         <a href="https://www.youtube.com/@tumlet.boardgames" target="_blank" rel="noopener noreferrer">
          <img className="footer-svg hover:scale-110 transition-transform" src="/youtube.svg" alt="YouTube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
