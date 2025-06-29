
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface GameMetaItem {
  icon: string;
  text: string;
}

interface GameHeroProps {
  backgroundClass: string;
  logoSrc: string;
  imageSrc: string;
  imageClass: string;
  description: string;
  metaItems: GameMetaItem[];
  ctaLink: string;
  ctaText: string;
  ctaIcon: string;
  ctaColorClass?: string;
  textColorClass?: string;
  youtubeEmbedUrl?: string;
}

const GameHero: React.FC<GameHeroProps> = ({
  backgroundClass,
  logoSrc,
  imageSrc,
  imageClass,
  description,
  metaItems,
  ctaLink,
  ctaText,
  ctaIcon,
  youtubeEmbedUrl,
  ctaColorClass = '',
  textColorClass = '',
}) => {
  // Check if link is external
  const isExternalLink = ctaLink.startsWith('http');
  
  return (
    <div className="w-full">
      <div className={`flex flex-col items-center gap-12 p-6 sm:p-12 md:p-24 rounded-2xl border-0 sm:border-4 ${backgroundClass}`}>
        <img className="w-[224px]" src={logoSrc} alt="Game Logo" />
        <img className={imageClass} src={imageSrc} alt="Game Cards" />
        
        {metaItems.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 -mt-12">
            {metaItems.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center gap-2">
                <img className="w-8 sm:w-auto" src={item.icon} alt="Icon" />
                <span className="text-base">{item.text}</span>
              </div>
            ))}
          </div>
        )}

        <div className={`text-center text-2xl ${textColorClass}`}>
          {description}
        </div>
        
        {isExternalLink ? (
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            <Button className={`cta-button ${ctaColorClass}`}>
              <img className="icon" src={ctaIcon} alt="Icon" /> 
              {ctaText}
            </Button>
          </a>
        ) : (
          <Link to={ctaLink}>
            <button className={`cta-button ${ctaColorClass}`}>
              <img className="icon" src={ctaIcon} alt="Icon" /> 
              {ctaText}
            </button>
          </Link>
        )}
          {youtubeEmbedUrl && (
          <div className="w-full aspect-video mt-8">
            <iframe
              className="w-full h-full rounded-xl"
              src={youtubeEmbedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GameHero;