import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-row justify-between items-center px-6 md:px-12 lg:px-36 py-6 relative">
      <Link to="/">
        <img className="w-[120px] md:w-[200px]" src="/tumlet-logo.png" alt="Tumlet Logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <div className="relative group">
          <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-black">
            our online games <ChevronDown size={16} />
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 min-w-[160px]">
            <Link to="/bichitra" className="block px-4 py-2 hover:bg-gray-100">
              bichitra
            </Link>
            <Link to="/ganthan" className="block px-4 py-2 hover:bg-gray-100">
              ganthan
            </Link>
            <a href="https://kobadi.tumlet.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">
              kobadi
            </a>
          </div>
        </div>
        <Link to="/about" className="font-medium text-gray-800 hover:text-black">
          about us
        </Link>
        <a href="https://www.instagram.com/tumlet.boardgames/" target="_blank" rel="noopener noreferrer" className='flex flex-row justify-center gap-4 items-center'>
          <Button className="nav-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.42426 6.71107C8.66127 6.5843 8.81971 6.46566 8.81971 6.46566C8.92765 6.39689 9.03559 6.3699 9.24424 6.2888C9.39416 6.17219 9.62648 6.22593 9.80219 6.1999C9.98289 6.17313 10.2166 6.17742 10.3964 6.1999C10.5948 6.2247 10.7932 6.21171 10.9918 6.23733C11.3165 6.27923 11.6403 6.30481 11.9673 6.32038C12.0538 6.3245 12.166 6.29946 12.2492 6.32623C12.3208 6.34925 12.3843 6.3962 12.4551 6.42215C12.6101 6.47892 12.7388 6.50985 12.8645 6.62685C12.9678 6.72301 13.049 6.83763 13.1289 6.9532C13.284 7.17771 13.4112 7.39876 13.5184 7.65035C13.6303 7.91321 13.8143 8.18482 13.8459 8.46915C13.8569 8.56825 13.893 8.66438 13.9032 8.76392C13.9167 8.89573 13.9079 9.03159 13.9079 9.16397C13.9079 9.77414 13.6344 10.3462 13.3909 10.8916C13.2744 11.1526 13.1164 11.3789 12.9511 11.611C12.8886 11.6986 12.8524 11.7977 12.7908 11.8824C12.6144 12.125 12.437 12.3715 12.2656 12.617C11.9985 12.9996 11.6895 13.4076 11.2655 13.6264C11.0785 13.7229 10.8995 13.7118 10.6959 13.7118C10.4703 13.7118 10.257 13.7094 10.0338 13.6697C9.49905 13.5748 8.98117 13.3768 8.46637 13.217C8.29265 13.1631 8.09703 13.0921 7.94936 12.9854C7.69902 12.8046 7.43677 12.641 7.1867 12.4602C6.91359 12.2628 6.59202 12.0665 6.45446 11.7444C6.31278 11.4125 6.11255 11.0934 6.09769 10.722C6.08541 10.415 6.09973 10.1341 6.17022 9.83655C6.25903 9.46156 6.42962 9.09836 6.47083 8.71246C6.48853 8.54674 6.53953 8.53147 6.65565 8.41535C6.80461 8.26639 6.93358 8.11561 7.06271 7.9498C7.19784 7.77628 7.35474 7.61777 7.50603 7.45852C7.60439 7.35499 7.68276 7.23731 7.79028 7.14269C7.98389 6.97232 8.19538 6.83349 8.42426 6.71107Z" stroke="#FEF5E0" stroke-width="0.6" stroke-linecap="round"/>
              <path d="M9.15927 5.76232C9.28098 5.68155 9.37476 5.59377 9.51018 5.53773C9.58889 5.50963 9.62931 5.47925 9.71488 5.47925C9.95413 5.47925 10.1821 5.53099 10.4214 5.54358C10.6879 5.55761 10.9522 5.65463 11.2133 5.70149C11.597 5.77036 11.8977 6.03771 12.2052 6.25828C12.4142 6.40818 12.6129 6.47849 12.7842 6.67587C12.9558 6.87352 13.1292 7.06057 13.279 7.2736C13.4071 7.45576 13.461 7.68259 13.527 7.89121C13.6269 8.20681 13.7517 8.53122 13.927 8.81294L13.9313 8.81987C13.9882 8.91116 14.0133 8.95139 13.9996 9.06092C13.9869 9.16251 13.9785 9.26032 13.9785 9.36271C13.9785 9.98103 13.7598 10.5604 13.6206 11.1559C13.5572 11.427 13.4778 11.7046 13.4404 11.9805C13.4272 12.0783 13.4575 12.2024 13.4089 12.2917C13.2621 12.5607 13.0743 12.8325 12.8883 13.0754C12.5954 13.4581 12.2368 13.7215 11.8683 14.0275C11.7161 14.154 11.5289 14.2545 11.356 14.3492C11.1419 14.4665 10.9003 14.6535 10.6612 14.7177C10.4527 14.7736 10.1659 14.7184 9.95584 14.6908C9.73166 14.6613 9.51479 14.6171 9.28794 14.6171C9.06881 14.6171 8.91374 14.5954 8.72296 14.4791C8.5053 14.3463 8.27427 14.239 8.06441 14.0931C7.92759 13.9979 7.72184 13.8876 7.62928 13.7421C7.49002 13.5233 7.27108 13.3691 7.1146 13.1643C6.93992 12.9356 6.78019 12.6813 6.67128 12.4145C6.57114 12.1692 6.4567 11.9272 6.37768 11.6741C6.31902 11.4862 6.32468 11.2785 6.26772 11.0962C6.17811 10.8095 5.96091 10.5635 5.85598 10.2798C5.75822 10.0155 5.83025 9.72275 5.83025 9.45044C5.83025 9.17118 5.94037 8.90794 6.07121 8.66322C6.23802 8.35122 6.41543 7.99573 6.65373 7.73095C6.87466 7.48547 7.04761 7.17816 7.31345 6.97649C7.46386 6.86239 7.62455 6.78307 7.78368 6.68406C8.01443 6.54048 8.24763 6.38898 8.46445 6.22436C8.68641 6.05583 8.92722 5.91631 9.15927 5.76232Z" stroke="#FEF5E0" stroke-width="0.6" stroke-linecap="round"/>
            </svg>
            say hi!
          </Button>
        </a>
      </div>

      {/* Hamburger Icon */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu - Full Screen Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 md:hidden min-h-screen">
          {/* Header with logo and close button */}
          <div className="flex justify-between items-center mb-8">
            <img className="w-[120px]" src="/tumlet-logo.png" alt="Tumlet Logo" />
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>
          {/* Menu Content */}
          <div className="flex flex-col gap-6">
            <Link to="/about" className="font-medium text-gray-800 text-lg px-4 py-3 hover:bg-gray-100 rounded-lg">
              about us
            </Link>
            <div className="font-medium text-gray-800 text-lg px-4 py-3">
              our online games
            </div>
            <Link to="/bichitra" className="px-4 py-3 hover:bg-gray-100 rounded-lg text-lg">
              bichitra
            </Link>
            <Link to="/ganthan" className="px-4 py-3 hover:bg-gray-100 rounded-lg text-lg">
              ganthan
            </Link>
            <Link to="https://kobadi.tumlet.com/" className="px-4 py-3 hover:bg-gray-100 rounded-lg text-lg mt-4">
            kobadi
          </Link>
          </div>
         
          
          <a href="https://www.instagram.com/tumlet.boardgames/" target="_blank" rel="noopener noreferrer" className="mt-8">
            <Button className="w-full nav-button text-lg py-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.42426 6.71107C8.66127 6.5843 8.81971 6.46566 8.81971 6.46566C8.92765 6.39689 9.03559 6.3699 9.24424 6.2888C9.39416 6.17219 9.62648 6.22593 9.80219 6.1999C9.98289 6.17313 10.2166 6.17742 10.3964 6.1999C10.5948 6.2247 10.7932 6.21171 10.9918 6.23733C11.3165 6.27923 11.6403 6.30481 11.9673 6.32038C12.0538 6.3245 12.166 6.29946 12.2492 6.32623C12.3208 6.34925 12.3843 6.3962 12.4551 6.42215C12.6101 6.47892 12.7388 6.50985 12.8645 6.62685C12.9678 6.72301 13.049 6.83763 13.1289 6.9532C13.284 7.17771 13.4112 7.39876 13.5184 7.65035C13.6303 7.91321 13.8143 8.18482 13.8459 8.46915C13.8569 8.56825 13.893 8.66438 13.9032 8.76392C13.9167 8.89573 13.9079 9.03159 13.9079 9.16397C13.9079 9.77414 13.6344 10.3462 13.3909 10.8916C13.2744 11.1526 13.1164 11.3789 12.9511 11.611C12.8886 11.6986 12.8524 11.7977 12.7908 11.8824C12.6144 12.125 12.437 12.3715 12.2656 12.617C11.9985 12.9996 11.6895 13.4076 11.2655 13.6264C11.0785 13.7229 10.8995 13.7118 10.6959 13.7118C10.4703 13.7118 10.257 13.7094 10.0338 13.6697C9.49905 13.5748 8.98117 13.3768 8.46637 13.217C8.29265 13.1631 8.09703 13.0921 7.94936 12.9854C7.69902 12.8046 7.43677 12.641 7.1867 12.4602C6.91359 12.2628 6.59202 12.0665 6.45446 11.7444C6.31278 11.4125 6.11255 11.0934 6.09769 10.722C6.08541 10.415 6.09973 10.1341 6.17022 9.83655C6.25903 9.46156 6.42962 9.09836 6.47083 8.71246C6.48853 8.54674 6.53953 8.53147 6.65565 8.41535C6.80461 8.26639 6.93358 8.11561 7.06271 7.9498C7.19784 7.77628 7.35474 7.61777 7.50603 7.45852C7.60439 7.35499 7.68276 7.23731 7.79028 7.14269C7.98389 6.97232 8.19538 6.83349 8.42426 6.71107Z" stroke="#FEF5E0" stroke-width="0.6" stroke-linecap="round"/>
              </svg>
              say hi!
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
