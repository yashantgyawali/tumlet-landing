import React from 'react';
import { Link } from 'react-router-dom';

interface MetaItem {
  icon: string;
  text: string;
}

interface LandingHeroProps {
  plateLabel: string;
  description: string;
  metaItems: MetaItem[];
  ctaLink: string;
  ctaText: string;
  ctaIcon?: string;
  secondaryLink?: { text: string; href: string };
  imageSrc: string;
  imageAlt?: string;
  priceTag?: string;
  cardCaption?: string;
}

const LandingHero: React.FC<LandingHeroProps> = ({
  plateLabel,
  description,
  metaItems,
  ctaLink,
  ctaText,
  ctaIcon,
  secondaryLink,
  imageSrc,
  imageAlt = 'Game art',
  priceTag,
  cardCaption,
}) => {
  const isExternal = ctaLink.startsWith('http');

  return (
    <div
      className="mt-4 rounded-3xl border-0 md:border-4 border-[#F3B952] p-6 sm:p-12"
      style={{
        background: '#F3B952',
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(255,255,255,.25) 0 2px, transparent 3px),
          radial-gradient(circle at 75% 60%, rgba(255,255,255,.18) 0 2px, transparent 3px),
          radial-gradient(circle at 40% 85%, rgba(255,255,255,.22) 0 3px, transparent 4px)
        `,
        backgroundSize: '80px 80px',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left — copy */}
        <div>
          {/* Plate label */}
          <div
            className="inline-block mb-5"
            style={{
              background: 'white',
              border: '3px solid #130D01',
              borderRadius: '10px',
              padding: '4px 14px',
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '14px',
            }}
          >
            {plateLabel}
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: 1.05,
              color: '#130D01',
              margin: '0 0 16px',
            }}
          >
            Bluff. Steal.<br />Eat.
          </h1>

          {/* Meta triad */}
          {metaItems.length > 0 && (
            <div className="flex flex-wrap gap-7 mb-6">
              {metaItems.map((item, i) => (
                <span key={i} className="flex items-center gap-2 font-semibold text-[#130D01]">
                  <img src={item.icon} alt="" className="w-7 h-7" />
                  {item.text}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p
            className="mb-7 max-w-md"
            style={{ fontSize: '19px', lineHeight: '1.5', color: '#130D01' }}
          >
            {description}
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-7 flex-wrap">
            {isExternal ? (
              <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                <button className="cta-button color-red">
                  {ctaIcon && <img src={ctaIcon} alt="" className="w-[22px]" />}
                  {ctaText}
                </button>
              </a>
            ) : (
              <Link to={ctaLink}>
                <button className="cta-button color-red">
                  {ctaIcon && <img src={ctaIcon} alt="" className="w-[22px]" />}
                  {ctaText}
                </button>
              </Link>
            )}
            {secondaryLink && (
              <Link
                to={secondaryLink.href}
                className="underline font-semibold text-[#130D01] hover:text-[#F16147]"
              >
                {secondaryLink.text}
              </Link>
            )}
          </div>
        </div>

        {/* Right — art card */}
        <div
          className="relative rounded-2xl border-[3px] border-[#130D01] p-6 flex flex-col justify-between"
          style={{ background: '#f2cb73', aspectRatio: '1/1' }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-xl object-cover"
          />
          <div className="flex items-end justify-between mt-4">
            {cardCaption && (
              <div
                style={{
                  fontFamily: '"Patrick Hand", cursive',
                  fontSize: '22px',
                  transform: 'rotate(-2deg)',
                  lineHeight: 1.3,
                  color: '#130D01',
                }}
              >
                {cardCaption}
              </div>
            )}
            {priceTag && (
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-white font-semibold text-sm"
                style={{ background: '#F16147' }}
              >
                {priceTag}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
