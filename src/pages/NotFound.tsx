import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AnimatedDice = () => {
  return (
    <div className="relative flex justify-center items-center h-40 w-40 mx-auto perspective-1000">
      {/* Infinite 3D Rolling dice animation */}
      <div className="opacity-100 scale-100">
        <div 
          className="dice-container preserve-3d relative w-20 h-20"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'diceRoll 2s linear infinite'
          }}
        >
          {/* Dice Face 1 (Front) */}
          <div className="dice-face dice-face-front bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center">
            <div className="w-4 h-4 bg-tumlet-brown rounded-full"></div>
          </div>
          
          {/* Dice Face 2 (Back) */}
          <div className="dice-face dice-face-back bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center">
            <div className="flex justify-between w-full px-2">
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
            </div>
          </div>
          
          {/* Dice Face 3 (Right) */}
          <div className="dice-face dice-face-right bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center">
            <div className="flex flex-col justify-between h-full py-2">
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full mx-auto"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full self-end"></div>
            </div>
          </div>
          
          {/* Dice Face 4 (Left) */}
          <div className="dice-face dice-face-left bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-2 w-full h-full p-2">
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
            </div>
          </div>
          
          {/* Dice Face 5 (Top) */}
          <div className="dice-face dice-face-top bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1 w-full h-full p-2 relative">
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
            </div>
          </div>
          
          {/* Dice Face 6 (Bottom) */}
          <div className="dice-face dice-face-bottom bg-tumlet-yellow border-2 border-tumlet-brown rounded-lg absolute w-20 h-20 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-2 w-full h-full p-2">
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
              <div className="w-3 h-3 bg-tumlet-brown rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }

        .dice-face-front {
          transform: translateZ(40px);
        }
        
        .dice-face-back {
          transform: translateZ(-40px) rotateY(180deg);
        }
        
        .dice-face-right {
          transform: rotateY(90deg) translateZ(40px);
        }
        
        .dice-face-left {
          transform: rotateY(-90deg) translateZ(40px);
        }
        
        .dice-face-top {
          transform: rotateX(90deg) translateZ(40px);
        }
        
        .dice-face-bottom {
          transform: rotateX(-90deg) translateZ(40px);
        }

        @keyframes diceRoll {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          25% {
            transform: rotateX(90deg) rotateY(180deg) rotateZ(90deg);
          }
          50% {
            transform: rotateX(180deg) rotateY(360deg) rotateZ(180deg);
          }
          75% {
            transform: rotateX(270deg) rotateY(540deg) rotateZ(270deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
          }
        }
      `}</style>
    </div>
  );
};

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-tumlet-beige">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Animated Dice */}
        <div className="mb-8">
          <AnimatedDice />
        </div>

        {/* Text content */}
        <div className="mb-8">
          <h1 className="font-outfit text-3xl font-bold text-tumlet-text mb-4">
            Page Not Found
          </h1>
        </div>

        {/* Home button */}
        <button
          onClick={handleGoHome}
          className="font-baloo bg-tumlet-primaryRed text-white px-8 py-4 rounded-xl border-2 border-tumlet-brown shadow-[4px_4px_0px_0px_#6B4226] hover:shadow-[2px_2px_0px_0px_#6B4226] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 text-lg font-semibold"
        >
          Roll back home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
