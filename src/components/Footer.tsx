import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="mt-14 border-t px-6 md:px-12 py-7 flex flex-col sm:flex-row justify-between items-center gap-4"
      style={{ borderColor: '#e5d5b0', color: '#6B6B6B', fontSize: '14px' }}
    >
      <div>© 2025 Tumlet · Kathmandu, Nepal</div>
      <div className="flex items-center gap-4">
        <a href="mailto:tumletgames@gmail.com" aria-label="Email Tumlet">
          <img className="w-6 hover:scale-110 transition-transform" src="/email.svg" alt="Email" />
        </a>
        <a href="https://www.instagram.com/tumlet.boardgames" target="_blank" rel="noopener noreferrer" aria-label="Tumlet on Instagram">
          <img className="w-6 hover:scale-110 transition-transform" src="/insta.svg" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@tumlet.boardgames" target="_blank" rel="noopener noreferrer" aria-label="Tumlet on YouTube">
          <img className="w-6 hover:scale-110 transition-transform" src="/youtube.svg" alt="YouTube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
