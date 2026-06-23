import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WHATSAPP_INVITE = 'https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE';

const BETTER_COFFEE_TEAL = '#2D5A52';

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[name='${name}']`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setPropertyTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property='${property}']`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

const PolaroidSlot = ({
  rotation,
  caption,
  dark = true,
  src,
  alt,
}: {
  rotation: string;
  caption: string;
  dark?: boolean;
  src?: string;
  alt?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: '#f5f1ea',
        padding: '10px 10px 48px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.09)',
        transform: hovered ? 'rotate(0deg) scale(1.03)' : `rotate(${rotation})`,
        transition: 'transform 0.22s ease, box-shadow 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        height: 340,
        boxSizing: 'border-box',
        cursor: 'default',
        zIndex: hovered ? 10 : 1,
        position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        flex: 1,
        overflow: 'hidden',
        background: dark
          ? 'linear-gradient(135deg, #1c1812 0%, #272017 100%)'
          : 'linear-gradient(135deg, #e8dece 0%, #d0c4ae 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        {src
          ? <img src={src} alt={alt || caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(1) contrast(1.08)' }} />
          : (
            <span style={{
              color: dark ? 'rgba(255,255,255,0.14)' : '#9e9080',
              fontSize: 11,
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Photo coming soon
            </span>
          )
        }
      </div>
      <p style={{
        fontFamily: "'Permanent Marker', cursive",
        fontSize: 13,
        color: '#130D01',
        textAlign: 'center',
        margin: '14px 0 0',
        lineHeight: 1.3,
      }}>
        {caption}
      </p>
    </div>
  );
};

const WaIcon = ({ color = '#fff' }: { color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ flex: 'none' }}>
    <path fill={color} d="M16.01 4C9.4 4 4.03 9.36 4.03 15.96c0 2.11.55 4.16 1.6 5.98L4 28l6.23-1.63a11.96 11.96 0 0 0 5.78 1.47h.01c6.6 0 11.97-5.36 11.97-11.96 0-3.2-1.25-6.2-3.5-8.46A11.9 11.9 0 0 0 16.01 4Zm5.46 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

const BetterCoffeeGameNight = () => {
  useEffect(() => {
    const title = 'Coffee, Connection, and Chaos · Better Coffee, February 2026 | Tumlet Game Night';
    const description = 'Game night at a coffee shop? At Better Coffee Sanepa it worked. Skull, Codenames, CATAN — and our first Beast-style elimination tournament on Valentine\'s Day, February 2026.';
    const image = 'https://tumlet.com/bettercoffee-february-2026-thumb.png';
    const url = 'https://tumlet.com/game-night/bettercoffee-february-2026/';

    document.title = title;
    setMetaTag('description', description);
    setCanonical(url);
    setPropertyTag('og:title', title);
    setPropertyTag('og:description', description);
    setPropertyTag('og:type', 'article');
    setPropertyTag('og:url', url);
    setPropertyTag('og:image', image);
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
  }, []);

  return (
    <div style={{
      background: '#ffffff',
      color: '#130D01',
      fontFamily: "'Baloo 2', system-ui, sans-serif",
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

        @media (min-width: 700px) {
          .gn-gallery {
            display: flex !important;
            flex-wrap: wrap;
            justify-content: center;
            gap: 28px;
          }
          .gn-gallery > div {
            width: calc(30% - 14px);
          }
        }

        @media (max-width: 699px) {
          .gn-gallery {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }
          .gn-gallery > div {
            width: 82%;
          }
        }

        .gn-back:hover { color: ${BETTER_COFFEE_TEAL} !important; }
        .gn-cta-btn:hover {
          transform: translate(-3px, -3px) !important;
          box-shadow: 9px 9px 0 0 #130D01 !important;
        }
      `}</style>

      <Navbar />

      <main style={{ maxWidth: 1020, margin: '0 auto', padding: '0 24px 96px' }}>

        <div style={{ padding: '22px 0 0' }}>
          <Link
            to="/game-night"
            className="gn-back"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: '#130D01',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              gap: 6,
              alignItems: 'center',
              transition: 'color 0.15s',
            }}
          >
            ← All game nights
          </Link>
        </div>

        <header style={{ padding: '28px 0 0', maxWidth: 740, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
            {[
              { label: 'February 2026', filled: true },
              { label: 'Better Coffee, Sanepa', filled: false },
              { label: 'Recap', filled: false },
            ].map(tag => (
              <span key={tag.label} style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 11.5,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '5px 14px',
                borderRadius: 999,
                border: '2px solid #130D01',
                background: tag.filled ? '#F3B952' : 'transparent',
                color: '#130D01',
                whiteSpace: 'nowrap',
              }}>{tag.label}</span>
            ))}
          </div>

          <h1 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(30px, 5vw, 54px)',
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
            color: '#130D01',
            margin: '0 0 24px',
          }}>
            Tumlet Game Night — Coffee, Connection, and Chaos
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: '#F3B952',
              border: '2px solid #130D01',
              display: 'grid',
              placeItems: 'center',
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 17,
              color: '#130D01',
              flex: 'none',
            }}>T</div>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14 }}>Tumlet</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#7a6e60', marginTop: 2 }}>
                14 February 2026 · 5 min read
              </div>
            </div>
          </div>
        </header>

        <div style={{ margin: '36px 0 0' }}>
          <div style={{
            width: '100%',
            height: 'clamp(240px, 44vw, 500px)',
            border: '3px solid #130D01',
            borderRadius: 16,
            boxShadow: `10px 10px 0 0 ${BETTER_COFFEE_TEAL}`,
            overflow: 'hidden',
          }}>
            <img
              src="/bettercoffee-february-2026-thumb.png"
              alt="Game night at Better Coffee, Sanepa — February 2026"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '4px 24px',
          background: '#F3B952',
          border: '2px solid #130D01',
          borderRadius: 16,
          padding: '22px 28px',
          boxShadow: '6px 6px 0 0 #130D01',
          margin: '44px auto 0',
          maxWidth: 680,
        }}>
          {[
            { k: 'Date', v: 'Fri, 14 Feb 2026' },
            { k: 'Where', v: 'Better Coffee, Sanepa' },
            { k: 'Turnout', v: '30+ players' },
            { k: 'Entry', v: 'Free, as always' },
          ].map(item => (
            <div key={item.k} style={{ display: 'flex', gap: 10, alignItems: 'baseline', padding: '7px 0' }}>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                minWidth: 72,
                opacity: 0.6,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                flex: 'none',
              }}>{item.k}</span>
              <span style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: '#130D01',
              }}>{item.v}</span>
            </div>
          ))}
          <div style={{ gridColumn: '1 / -1', borderTop: '1.5px solid rgba(19,13,1,0.18)', marginTop: 8, paddingTop: 14 }}>
            <a
              href="https://www.instagram.com/bettercoffeenp/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: '#130D01',
                textDecoration: 'none',
                opacity: 0.8,
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
              Follow @bettercoffeenp
            </a>
          </div>
        </div>

        <div style={{ maxWidth: 680, margin: '52px auto 0', fontSize: 18, lineHeight: 1.72, color: '#2a241a' }}>
          <p style={{ marginBottom: 20 }}>
            Game &apos;night&apos; at a coffee place sounds strange. Usually, when the sun goes down, coffee gets swapped for a glass of wine or a bottle of beer. But stepping into Better Coffee, that rule just didn&apos;t apply.
          </p>
          <p style={{ marginBottom: 20 }}>
            We&apos;d had a talk with the owner, Raju dai, and it was immediately clear: this place is different. It&apos;s a space where everything is intentional. We spent the lead-up hearing stories about coffee production across Nepal, and that same passion clearly bleeds into how they treat their customers. They already had a shelf stocked with favorites like Uno and Jenga, so we knew we were in the right place. We couldn&apos;t say no.
          </p>

          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 28,
            margin: '44px 0 16px',
            color: '#130D01',
            letterSpacing: '-0.01em',
          }}>The First Half: Building the Beast</h2>

          <p style={{ marginBottom: 20 }}>
            The night started off with the usual hum of a great game night. Our friends at Board Game Nepal showed up with a fresh set of games, and Skull was an instant hit.
          </p>
          <p style={{ marginBottom: 20 }}>
            Across the room, the energy was electric. Codenames, Bluff Momo, Tundikhel, Firiri, Dixit, and CATAN were all in heavy rotation. One group was so passionate about CATAN that they dove into a full, dedicated round the moment they sat down.
          </p>

          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 28,
            margin: '44px 0 16px',
            color: '#130D01',
            letterSpacing: '-0.01em',
          }}>The Tumlet Beast Games</h2>

          <p style={{ marginBottom: 20 }}>
            Then, we turned up the heat. We went from 30+ people to one winner in a series of high-stakes, &quot;Beast-style&quot; elimination rounds. Since it was February 14th, we decided to be a little weird, a little crazy, and absolutely lean into the Valentine&apos;s chaos.
          </p>

          <p style={{ marginBottom: 8 }}>
            <strong style={{ fontWeight: 700, color: '#130D01' }}>Round 1: Pure Luck.</strong> Sarina and I wrote up a list of arbitrary &quot;out&quot; prompts that morning. Wearing slippers? Out. Wearing a hint of red? Out (Sorry!). It was ruthless, but it cut our crowd down by five people in minutes.
          </p>

          <p style={{ marginBottom: 8 }}>
            <strong style={{ fontWeight: 700, color: '#130D01' }}>Round 2: Guess the Nepali Price.</strong> We brought in random items from Bigmart. To earn a ticket to the next round, you had to guess the price of the item. Whoever got closest not only moved on but also took the item home. We were down to about 16 players.
          </p>

          <p style={{ marginBottom: 8 }}>
            <strong style={{ fontWeight: 700, color: '#130D01' }}>Round 3: Team Intensity.</strong> Teams had to compete in:
          </p>
          <ul style={{ margin: '0 0 20px 24px', padding: 0 }}>
            <li style={{ marginBottom: 8 }}><strong style={{ fontWeight: 700, color: '#130D01' }}>The Biscuit Slide:</strong> Placing a biscuit on the forehead and sliding it down to eat it.</li>
            <li style={{ marginBottom: 8 }}><strong style={{ fontWeight: 700, color: '#130D01' }}>The Chopstick Challenge:</strong> Moving 10 coffee beans from one container to another.</li>
            <li style={{ marginBottom: 8 }}><strong style={{ fontWeight: 700, color: '#130D01' }}>Gotta:</strong> Using Bluff Momo pieces to complete four rounds.</li>
          </ul>
          <p style={{ marginBottom: 20 }}>
            It was intense—even for the judge—but it was fair and square.
          </p>

          <p style={{ marginBottom: 8 }}>
            <strong style={{ fontWeight: 700, color: '#130D01' }}>Round 4: The Elimination.</strong> You picked a card and then picked another person, deciding if you were &quot;safe&quot; or &quot;eliminate.&quot; The other person could choose to steal or let it go. Receiving the &quot;out&quot; card meant your game was over.
          </p>

          <p style={{ marginBottom: 20 }}>
            <strong style={{ fontWeight: 700, color: '#130D01' }}>The Final:</strong> The last standing survivors faced off in a final, heart-pounding round of Bluff Momo.
          </p>

          <p>
            We had such a blast at Better Coffee. It was the start of our &quot;Beast&quot; style games, and it set a high bar for everything we&apos;ve done since. Thank you to Raju dai and to everyone who showed up, embraced the madness, and played along with us.
          </p>
        </div>

        <div style={{ maxWidth: 680, margin: '56px auto 0' }}>
          <div style={{
            background: '#E8F0EE',
            border: '2px solid #130D01',
            borderRadius: 16,
            padding: '28px 32px',
            boxShadow: `6px 6px 0 0 ${BETTER_COFFEE_TEAL}`,
          }}>
            <h3 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 21,
              margin: '0 0 18px',
              color: '#130D01',
            }}>Why Better Coffee worked</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { num: '01', strong: 'The Passion:', rest: ' Raju dai and the team deeply care about the experience. It shows in the coffee and the space they\'ve built.' },
                { num: '02', strong: 'The Vibe:', rest: " It proved that you don't need a bar to have a wild game night. A great coffee shop can be just as electric." },
                { num: '03', strong: 'The Community:', rest: ' Whether you were there for the coffee or the competition, everyone showed up to have a good time.' },
              ].map(item => (
                <div key={item.num} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize: 17,
                    color: BETTER_COFFEE_TEAL,
                    lineHeight: 1.5,
                    flex: 'none',
                    width: 26,
                  }}>{item.num}</span>
                  <p style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 15.5, lineHeight: 1.65, margin: 0 }}>
                    <strong style={{ fontWeight: 700 }}>{item.strong}</strong>{item.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ margin: '72px 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 26,
              margin: 0,
              color: '#130D01',
              whiteSpace: 'nowrap',
            }}>The night in photos</h2>
            <div style={{ flex: 1, height: 3, background: '#130D01', borderRadius: 2 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#7a6e60',
              whiteSpace: 'nowrap',
            }}>Feb 14, 2026</span>
          </div>

          <div className="gn-gallery" style={{ gap: 18 }}>
            <PolaroidSlot
              rotation="1.8deg"
              src="/bettercoffee/g1.png"
              alt="Players gathered around a pallet table playing Uno at Better Coffee"
              caption="Uno, biscuits, and nowhere to be."
              dark={false}
            />
            <PolaroidSlot
              rotation="-0.6deg"
              src="/bettercoffee/g2.png"
              alt="Players celebrating with Bluff Momo at Better Coffee"
              caption="The final table energy was unreal."
            />
            <PolaroidSlot
              rotation="2.2deg"
              src="/bettercoffee/g3.png"
              alt="Winners laughing and holding Bluff Momo at Better Coffee"
              caption="Pure Valentine's chaos."
              dark={false}
            />
            <PolaroidSlot
              rotation="-1.8deg"
              src="/bettercoffee/g4.png"
              alt="Three players posing on the Better Coffee rooftop at night"
              caption="Rooftop under the lights."
            />
            <PolaroidSlot
              rotation="1.0deg"
              src="/bettercoffee/g5.png"
              alt="Player checking a prize bag from Guess the Nepali Price"
              caption="Closest guess takes it home."
              dark={false}
            />
          </div>
        </div>

        <section style={{
          background: BETTER_COFFEE_TEAL,
          border: '3px solid #130D01',
          borderRadius: 20,
          padding: '44px 36px',
          textAlign: 'center',
          boxShadow: '10px 10px 0 0 #130D01',
          margin: '72px 0 0',
        }}>
          <h2 style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(24px, 3.4vw, 34px)',
            color: '#fff',
            margin: '0 0 10px',
            lineHeight: 1.12,
          }}>
            Next one&apos;s already being planned.
          </h2>
          <p style={{ fontSize: 17, color: '#fff', margin: '0 0 28px', opacity: 0.9 }}>
            Join the WhatsApp community — that&apos;s where the next date and venue drop first, and nowhere else.
          </p>
          <a
            href={WHATSAPP_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="gn-cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#F3B952',
              color: '#130D01',
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              padding: '14px 36px',
              borderRadius: 12,
              border: '2.5px solid #130D01',
              boxShadow: '6px 6px 0 0 #130D01',
              textDecoration: 'none',
              transition: 'transform 0.18s ease, box-shadow 0.15s ease',
            }}
          >
            <WaIcon color="#130D01" />
            Join the WhatsApp community
          </a>
        </section>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link
            to="/game-night"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: BETTER_COFFEE_TEAL,
              textDecoration: 'underline',
              letterSpacing: '0.02em',
            }}
          >
            ← Back to all game nights
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default BetterCoffeeGameNight;
