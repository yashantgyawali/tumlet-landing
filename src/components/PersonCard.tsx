import React, { useState } from 'react';

type PersonCardProps = {
  photo: string;
  name: string;
  title: string;
  quote?: string;
  rotate?: number;
  shadowColor?: string;
};

function PersonCard({ photo, name, title, quote, rotate = -2, shadowColor = '#F3B952' }: PersonCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        cursor: 'default',
        border: '3px solid #130D01',
        borderRadius: 20,
        overflow: 'hidden',
        background: '#FAF1E4',
        boxShadow: hovered ? `11px 11px 0 ${shadowColor}` : `8px 8px 0 ${shadowColor}`,
        transform: hovered ? `rotate(${rotate}deg) translate(-3px,-3px)` : `rotate(${rotate}deg)`,
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
    >
      <div style={{ width: '100%', aspectRatio: '3/4', background: '#E5E7EB', overflow: 'hidden' }}>
        <img
          src={photo}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
      <div style={{ padding: '14px 16px 16px' }}>
        {quote && (
          <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 14, lineHeight: 1.55, color: '#2a241a', margin: '0 0 12px' }}>
            "{quote}"
          </p>
        )}
        <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800, fontSize: 16, color: '#130D01' }}>{name}</div>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: '#6B6B6B', marginTop: 2 }}>{title}</div>
      </div>
    </div>
  );
}

export default PersonCard;
