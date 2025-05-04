
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between items-center px-6 md:px-12 lg:px-36 py-6">
      <Link to="/">
        <img className="w-[120px] md:w-[200px]" src="/tumlet-logo.png" alt="Tumlet Logo" />
      </Link>
      <Link to="mailto:yashantgyawali@gmail.com" target="_blank" rel="noopener noreferrer">
       <Button className='nav-button'> 
          get in touch
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
