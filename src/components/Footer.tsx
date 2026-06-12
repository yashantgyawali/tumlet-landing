import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#FAF1E4', borderTop: '3px solid #F3B952', fontFamily: "'Baloo 2', system-ui, sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 48px' }}>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '56px' }}>

          {/* Brand column */}
          <div>
            <img src="/tumlet-logo.png" alt="Tumlet" style={{ width: 140, marginBottom: 16 }} />
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#6B6B6B', maxWidth: 220 }}>
              On a mission to spread playfulness amongst Nepali youths.
            </p>
            <div style={{ display: 'flex', gap: 20, marginTop: 24 }}>
              <a href="mailto:tumletgames@gmail.com" aria-label="Email" style={{ opacity: 0.8, transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
              >
                <img src="/email.svg" alt="Email" style={{ width: 24, height: 24 }} />
              </a>
              <a href="https://www.instagram.com/tumlet.boardgames" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                style={{ opacity: 0.8, transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
              >
                <img src="/insta.svg" alt="Instagram" style={{ width: 24, height: 24 }} />
              </a>
              <a href="https://www.youtube.com/@tumlet.boardgames" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                style={{ opacity: 0.8, transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
              >
                <img src="/youtube.svg" alt="YouTube" style={{ width: 24, height: 24 }} />
              </a>
            </div>
          </div>

          {/* Online games */}
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F16147', marginBottom: 16 }}>
              Online games
            </div>
            {[
              { label: 'Bichitra', to: '/bichitra/' },
              { label: 'Farak', to: '/farak/' },
              { label: 'Ganthan', to: '/ganthan/' },
              { label: 'Thug', to: '/thug/' },
              { label: 'Wavelength', to: '/wavelength/' },
            ].map(({ label, to, href }) =>
              to ? (
                <Link key={label} to={to} style={{ display: 'block', color: '#130D01', fontSize: 15, fontWeight: 500, marginBottom: 10, textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
                >
                  {label}
                </Link>
              ) : (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#130D01', fontSize: 15, fontWeight: 500, marginBottom: 10, textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
                >
                  {label}
                </a>
              )
            )}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F16147', marginBottom: 16 }}>
              Company
            </div>
            {[
              { label: 'About us', to: '/about/' },
              { label: 'Blog', to: '/blog/' },
              { label: 'Game nights', to: '/game-night/' },
              { label: 'Corporate game nights', to: '/corporate-game-night/' },
            ].map(({ label, to }) => (
              <Link key={label} to={to} style={{ display: 'block', color: '#130D01', fontSize: 15, fontWeight: 500, marginBottom: 10, textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F16147', marginBottom: 16 }}>
              Get in touch
            </div>
            <p style={{ fontSize: 15, color: '#130D01', marginBottom: 24, fontWeight: 500 }}>
              tumletgames@gmail.com
            </p>
            <a
              href="https://www.instagram.com/tumlet.boardgames/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: "'Baloo 2', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: '#ffffff',
                background: '#F16147',
                padding: '10px 20px',
                borderRadius: 10,
                boxShadow: '4px 4px 0 #F3B952',
                transform: 'rotate(-0.88deg)',
                textDecoration: 'none',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-0.88deg) translate(-2px,-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotate(-0.88deg)')}
            >
              Say Heyyyyyyyy! →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #E5C97E', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6B6B6B' }}>
            © 2026 Tumlet. All rights reserved.
          </span>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#6B6B6B' }}>
            Made with ♥ in Kathmandu
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
