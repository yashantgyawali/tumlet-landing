import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WHATSAPP_INVITE = 'https://chat.whatsapp.com/HCy2Bf3v579CB1oKHtVqqE';
const MAKKUSE_URL = 'https://makkuse.store/';
const KCAL_URL = 'https://www.instagram.com/kcal.kathmandu/';
const KCAL_EMAIL = 'kcal@thelotuseye.org';
const LOTUS_EYE_URL = 'https://www.instagram.com/the.lotuseye/';
const YETI_URL = 'https://yetibrewery.com/';
const SWEETFIX_URL = 'https://www.instagram.com/sweetfixnepal/';
const WOW_POPCORN_URL = 'https://www.instagram.com/wowpopcorns/';
const MAYA_URL = 'https://www.instagram.com/maya_coffeeenepal/';
const SHAQ_URL = 'https://www.instagram.com/gamenightswithshaq/';

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

const WaIcon = ({ color = '#fff' }: { color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ flex: 'none' }}>
    <path fill={color} d="M16.01 4C9.4 4 4.03 9.36 4.03 15.96c0 2.11.55 4.16 1.6 5.98L4 28l6.23-1.63a11.96 11.96 0 0 0 5.78 1.47h.01c6.6 0 11.97-5.36 11.97-11.96 0-3.2-1.25-6.2-3.5-8.46A11.9 11.9 0 0 0 16.01 4Zm5.46 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

const h2Style: React.CSSProperties = {
  fontFamily: "'Baloo 2', sans-serif",
  fontWeight: 800,
  fontSize: 'clamp(25px, 3.4vw, 33px)',
  margin: '52px 0 16px',
  color: '#130D01',
  letterSpacing: '-0.015em',
};

const linkStyle: React.CSSProperties = { color: '#F16147', textDecoration: 'underline' };

const h3Style: React.CSSProperties = {
  fontFamily: "'Baloo 2', sans-serif",
  fontWeight: 800,
  fontSize: 'clamp(20px, 2.4vw, 24px)',
  margin: '36px 0 10px',
  color: '#130D01',
};

const p: React.CSSProperties = { marginBottom: 20 };

const Photo = ({ src, alt, caption, ratio = '4 / 3', maxWidth = 680, tilt = 0 }: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  maxWidth?: number;
  tilt?: number;
}) => (
  <figure style={{ margin: '36px 0 40px', maxWidth }}>
    <div style={{
      border: '3px solid #130D01',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: '6px 6px 0 0 #F3B952',
      aspectRatio: ratio,
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
    }}>
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        loading="lazy"
      />
    </div>
    {caption && (
      <figcaption style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 13.5,
        color: '#7a6e60',
        textAlign: 'center',
        marginTop: 16,
      }}>
        {caption}
      </figcaption>
    )}
  </figure>
);

const Clip = ({ name, label, caption, tilt = 0 }: {
  name: string;
  label: string;
  caption?: string;
  tilt?: number;
}) => (
  <figure style={{ margin: '36px 0 40px', maxWidth: 300 }}>
    <div style={{
      border: '3px solid #130D01',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: '6px 6px 0 0 #F3B952',
      aspectRatio: '9 / 16',
      background: '#1c1812',
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
    }}>
      <video
        src={`/kcal/clips/${name}.mp4`}
        poster={`/kcal/clips/${name}.jpg`}
        aria-label={label}
        controls
        playsInline
        preload="none"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
    {caption && (
      <figcaption style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 13.5,
        color: '#7a6e60',
        textAlign: 'center',
        marginTop: 16,
      }}>
        {caption}
      </figcaption>
    )}
  </figure>
);

const gallery = [
  { src: '/kcal/kcal-nov-2026-2.jpg', alt: 'A host pointing at a player during Guess the Price, with a clay pot on the table' },
  { src: '/kcal/kcal-nov-2026-3.jpg', alt: 'Three hosts at the front of the room, one holding an orange stick' },
  { src: '/kcal/kcal-nov-2026-4.jpg', alt: 'Two players facing off over Bluff Momo boxes while a crowd watches' },
  { src: '/kcal/kcal-nov-2026-tundikhel.jpg', alt: 'Players on the floor mat racing to Tundikhel, seen from above' },
  { src: '/kcal/kcal-nov-2026-balcony.jpg', alt: 'A crowd watching from the KCAL balcony as a host explains the next game in the courtyard' },
  { src: '/kcal/kcal-nov-2026-chungi-overhead.jpg', alt: 'Chungi in the courtyard, seen from above, with players in a circle' },
  { src: '/kcal/kcal-nov-2026-catan.jpg', alt: 'A Catan board with cards, pieces and a can of Yeti beer' },
  { src: '/kcal/kcal-nov-2026-crowd.jpg', alt: 'Players cheering with their arms up indoors' },
  { src: '/kcal/kcal-nov-2026-sign.jpg', alt: 'The Tumlet Game Night and KCAL signs on easels outside the building' },
  { src: '/kcal/kcal-nov-2026-makkuse.jpg', alt: 'Makkusé gift and discount vouchers being handed over for the winner' },
  { src: '/kcal/kcal-nov-2026-bluff-momo.jpg', alt: 'Bluff Momo boxes, cards and momo tokens on a table, with another table playing in the background' },
];

const KcalGameNight = () => {
  return (
    <div style={{
      background: '#ffffff',
      color: '#130D01',
      fontFamily: "'Baloo 2', system-ui, sans-serif",
      overflowX: 'hidden',
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .gn-back:hover { color: #F16147 !important; }
        .gn-cta-btn:hover {
          transform: translate(-3px, -3px) !important;
          box-shadow: 9px 9px 0 0 #130D01 !important;
        }
      ` }} />

      <Navbar />

      <main style={{ maxWidth: 1020, margin: '0 auto', padding: '0 24px 96px' }}>

        {/* ── Back bar ── */}
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

        {/* ── Post header ── */}
        <header style={{ padding: '28px 0 0', maxWidth: 740, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
            {[
              { label: 'November 2026', filled: true },
              { label: 'KCAL', filled: false },
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
            KCAL x Tumlet: Nostalgic Game Night
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
            }}>Y</div>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14 }}>Yashant Gyawali</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: '#7a6e60', marginTop: 2 }}>
                15 November 2026 · 5 min read
              </div>
            </div>
          </div>
        </header>

        {/* ── Cover ── */}
        <div style={{ margin: '36px 0 0' }}>
          <div style={{
            width: '100%',
            aspectRatio: '3234 / 1702',
            border: '3px solid #130D01',
            borderRadius: 16,
            boxShadow: '10px 10px 0 0 #F3B952',
            overflow: 'hidden',
          }}>
            <img
              src="/kcal-november-2026-thumb.png"
              alt="KCAL x Tumlet Nostalgic Game Night at KCAL, Kupondole, 14 November 2026"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </div>
        </div>

        {/* ── Facts box ── */}
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
            { k: 'Date', v: 'Sat, 14 Nov 2026' },
            { k: 'Where', v: 'KCAL, Kupondole' },
            { k: 'Players', v: 'About 40' },
            { k: 'Winner', v: 'Iksha' },
            { k: 'Entry', v: 'Ticketed, free beer included' },
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
              }}>{item.v}</span>
            </div>
          ))}
        </div>

        {/* ── Article body ── */}
        <div style={{ maxWidth: 680, margin: '52px auto 0', fontSize: 18, lineHeight: 1.72, color: '#2a241a' }}>
          <p style={p}>
            Chungi, Name Place Animal Thing, a sack race, a spoon race, a math race, Machha Machha Bhyaguta. We had it all, and it still feels a little crazy that we pulled it off.
          </p>

          <h2 style={h2Style}>It started with a random conversation about guccha lol</h2>

          <p style={p}>
            It began with a conversation with Mahika and Saksham. Someone said, "Let's do a guccha tournament," and that pulled up every other game and moment we had growing up as Nepali kids in the early 2000s. By the end of it we were all nostalgic, and we knew we had to design a day around the games we played as children.
          </p>

          <h2 style={h2Style}>Our first game night with a cover charge</h2>

          <p style={p}>
            This was the first game night where we charged entry. Sarina and I had a long conversation about whether we wanted our community to pay for an event at all. But we were planning the whole experience around the exact number of people coming, so we added a cover charge.
          </p>
          <p style={p}>
            Then we worked our asses off through the Tihar holidays to make it worth it.
          </p>
          <Photo
            src="/kcal/kcal-nov-2026-hosts.jpg"
            alt="Four people holding cans of Yeti beside the Tumlet Game Night and KCAL signs"
            caption="Outside KCAL, by the Tumlet and KCAL signs."
          />

          <h2 style={h2Style}>The brands who showed up for us</h2>

          <p style={p}>
            <a href={YETI_URL} {...ext} style={linkStyle}>Yeti Brewery</a> gave us tons of beer. Everyone with a ticket got a beer for free, which is a pretty sweet deal.
          </p>
          <p style={p}>
            <a href={SWEETFIX_URL} {...ext} style={linkStyle}>Sweet Fix</a>, one of our favorite brands, came to the rescue for the people who don't drink beer. They were indeed the sweetest fix for our "what if people don't drink?" problem.
          </p>
          <p style={p}>
            <a href={MAKKUSE_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>Makkusé</a> helped us with a gift for the winner, for about the millionth time. We appreciate them so, so much.
          </p>
          <p style={p}>
            <a href={WOW_POPCORN_URL} {...ext} style={linkStyle}>Wow Popcorn</a> put their tastiest popcorn in the winner's basket.
          </p>
          <p style={p}>
            And <a href={MAYA_URL} {...ext} style={linkStyle}>Maya</a>, together with KCAL, made sure nobody had to compete hangry.
          </p>
          <p style={p}>
            So we had great brands and a community more than ready to compete. We were still the most excited people in the room.
          </p>

          <h2 style={h2Style}>The afternoon: every game on the shelf</h2>

          <p style={p}>
            People started coming in at 1:00 PM, and we sat them down with board games. First up was Knarr. Our favorite game master, Shaq from <a href={SHAQ_URL} {...ext} style={linkStyle}>Game Nights With Shaq</a>, explained the rules maybe four times, once for every new player who joined their table.
          </p>
          <p style={p}>
            That's Not a Hat had people grabbing their heads and laughing out loud. The Secret Hitler table kept accusing and defending each other at the top of their lungs. Another table was all bluffs and challenges over <Link to="/bluff-momo-rules" style={linkStyle}>Bluff Momo</Link>. One group sat down on the floor mat and <Link to="/tundikhel" style={linkStyle}>raced to Tundikhel</Link>, and right outside, another loud group was singing (in the weirdest tones, of course) while playing Firiri.
          </p>
          <p style={p}>
            Then there was Love Letter, Excalibur, Catan, Codenames, and a few more I honestly can't remember. Every game we own got played.
          </p>
          <Photo
            src="/kcal/kcal-nov-2026-yeti-catan.jpg"
            alt="Three cans of Yeti beer over a game of Catan on a woven floor mat"
            caption="Catan on the floor mat, Yeti in hand."
          />

          <h2 style={h2Style}>The menu</h2>

          <p style={p}>
            We designed a fun menu for the day too. Can you guess all the items? Reading them out loud helps.
          </p>
          <figure style={{ margin: '28px 0 40px', maxWidth: 520 }}>
            <div style={{
              border: '3px solid #130D01',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '6px 6px 0 0 #F3B952',
            }}>
              <img
                src="/kcal/menu.jpg"
                alt="The Meh-new! menu: Nepali dishes spelled out as English-sounding gibberish, with prices"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </div>
          </figure>

          <h2 style={h2Style}>The nostalgic tournament</h2>

          <p style={p}>
            Now the best part of the day. We had to get from about 40 people down to one winner.
          </p>

          <h3 style={h3Style}>Game 1: Guess the price</h3>
          <p style={p}>
            We started with our classic, using things you'd find as a kid growing up in Nepal. Guccha (I never knew you could get three for Rs 5). Chungi for Rs 20. Salt for Rs 26. An exam ko dapti for Rs 125. There were 18 items in total, and I hope a lot of them hit people right in the nostalgia. The closest guessers moved on.
          </p>
          <Clip name="guess-the-price" label="Video of a host running Guess the Price" caption="Guess the Price, live." tilt={-1} />

          <h3 style={h3Style}>Game 2: Chungi</h3>
          <p style={p}>
            Without telling anyone what the game was, we asked the 18 players left to split into three groups of six. The group with the lowest combined chungi score would go home.
          </p>
          <p style={p}>
            To keep it a little fair, each player could score at most 50. The very first player to grab the chungi blew past 50 pretty easily.
          </p>
          <p style={p}>
            It was intense and it was fun, with a big crowd watching from the balcony. Unfortunately, nobody on team 3 had ever played chungi, and naturally, they lost.
          </p>
          <Clip name="chungi" label="Video of a player kicking a chungi in the KCAL courtyard" caption="Chungi in the courtyard." tilt={1} />

          <h3 style={h3Style}>Game 3: The relay</h3>
          <p style={p}>
            This was the funniest part of the night for me. The 12 players left made four teams of three, and each player picked one leg of the relay.
          </p>
          <p style={p}>
            <strong>Sack race.</strong> I'm glad nobody fell. The sacks barely came up to people's knees, but everyone was a good sport and jumped as fast as they could.
          </p>
          <p style={p}>
            <strong>Spoon race.</strong> The spoon was big and the guccha were small, so whoever picked this had the easiest leg. It was still fun watching people grip that spoon with everything they had.
          </p>
          <p style={p}>
            <strong>Math race.</strong> I thought I made the questions moderately difficult. Turns out they were extremely difficult. (I disagree, for the record. I think I'd have solved both easily.) Only one player got one question right, and nobody else solved any.
          </p>
          <p style={p}>
            The two fastest teams moved on.
          </p>
          <Clip name="relay" label="Video of the relay in the KCAL courtyard, from the sack race to the spoon race" caption="The relay, filmed from above." tilt={-1} />

          <h3 style={h3Style}>Game 4: Machha Machha Bhyaguta</h3>
          <p style={p}>
            This one was Sarina's idea. We're a company that made a bluffing game, so we wanted some bluffing in the mix. We put a picture of a machha in one empty <Link to="/bluff-momo-rules" style={linkStyle}>Bluff Momo</Link> box and a bhyaguta in the other. Player 1 peeked inside one box and decided to keep it or switch. Then player 2 got the final say: keep the box in front of them, or switch.
          </p>
          <p style={p}>
            It was so intense. And it got us exactly the three players we needed for the finale.
          </p>
          <Clip name="machha-bhyaguta" label="Video of a Machha Machha Bhyaguta face-off" caption="Machha or bhyaguta?" tilt={-1} />

          <h3 style={h3Style}>Game 5: Name Place Animal Thing</h3>
          <p style={p}>
            The finale had to be Name Place Animal Thing. I spent a lot of my childhood on this game and filled the back pages of a lot of notebooks with it.
          </p>
          <p style={p}>
            We played three rounds. We called out a letter, and you wrote a name, a place, an animal and a thing starting with it. If someone else wrote the same answer, it canceled out. You only got a point for something nobody else had.
          </p>
          <p style={p}>
            Two of the three finalists tied at 10 points each. For the tiebreaker, we gave them a letter and 20 seconds to write as many countries and animals as they could.
          </p>
          <p style={p}>
            Intense again. Iksha won it by naming five countries and animals in 20 seconds, and with that, won our Nostalgic Game Night.
          </p>
          <Photo
            src="/kcal/kcal-nov-2026-name-place-animal-thing.jpg"
            alt="A crowd laughing around a table as finalists write their Name Place Animal Thing answers"
            caption="The Name Place Animal Thing final."
            ratio="9 / 16"
            maxWidth={340}
            tilt={-1}
          />
          <p style={p}>
            We showered Iksha with gifts from our sponsors, and that was a wrap.
          </p>
          <Clip name="winner" label="Video of Iksha receiving gifts from the sponsors" caption="Iksha and the prize haul." tilt={-1} />

          <h2 style={h2Style}>A big thank you to KCAL</h2>

          <p style={p}>
            We couldn't have asked for a better home for this one.{' '}
            <a href={KCAL_URL} {...ext} style={linkStyle}>KCAL</a>, the Kathmandu Center for Arts &amp; Learning, sits on the tree-lined road in Kupondole and is run by{' '}
            <a href={LOTUS_EYE_URL} {...ext} style={linkStyle}>The Lotus Eye</a>. It opened this September as a place for artists, educators, creatives and learners to work together.
          </p>
          <p style={p}>
            For us, it held board game tables inside, a loud Firiri game outside, a sack race, and a crowd watching from the balcony, all in one afternoon.
          </p>
          <p style={p}>
            If you're looking for a space to run a workshop, a class or anything else, reach out to them. Message{' '}
            <a href={KCAL_URL} {...ext} style={linkStyle}>@kcal.kathmandu</a> on Instagram or email{' '}
            <a href={`mailto:${KCAL_EMAIL}`} style={linkStyle}>{KCAL_EMAIL}</a>.
          </p>

          <h2 style={h2Style}>Thank you</h2>

          <p style={p}>
            Hosting this at KCAL was so much fun, and the day just kept getting better as it went. Thank you to KCAL, Yeti Brewery, Sweet Fix, Makkusé, Wow Popcorn and Maya. Thank you to Mahika and Saksham for that first guccha conversation. And thank you to everyone who bought a ticket and came to play.
          </p>
        </div>

        <div style={{ maxWidth: 900, margin: '0' }}>
          <Photo
            src="/kcal/kcal-nov-2026-group.jpg"
            alt="The whole group posing in front of the KCAL building with beer, popcorn and ice cream"
            caption="Everyone, in front of KCAL."
            maxWidth={900}
          />
        </div>

        {/* ── Recap reel ── */}
        <div style={{ margin: '72px 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 26,
              margin: 0,
              color: '#130D01',
              whiteSpace: 'nowrap',
            }}>The day, in a reel</h2>
            <div style={{ flex: 1, height: 3, background: '#130D01', borderRadius: 2 }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#7a6e60',
              whiteSpace: 'nowrap',
            }}>Nov 14, 2026</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{
              width: 'min(300px, 78vw)',
              border: '3px solid #130D01',
              borderRadius: 20,
              overflow: 'hidden',
              background: '#FAF1E4',
              boxShadow: '8px 8px 0 #F3B952',
              transform: 'rotate(-1.5deg)',
            }}>
              <div style={{ width: '100%', aspectRatio: '9/16', overflow: 'hidden', background: '#1c1812' }}>
                <video
                  src="/kcal/recap.mp4"
                  poster="/kcal/recap-poster.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Photo gallery ── */}
        <div style={{ margin: '72px 0 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
            <h2 style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 26,
              margin: 0,
              color: '#130D01',
              whiteSpace: 'nowrap',
            }}>The day, in photos</h2>
            <div style={{ flex: 1, height: 3, background: '#130D01', borderRadius: 2 }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}>
            {gallery.map(photo => (
              <div key={photo.src} style={{
                border: '3px solid #130D01',
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '6px 6px 0 0 #F3B952',
                aspectRatio: '3 / 4',
              }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <section style={{
          background: '#F16147',
          border: '3px solid #130D01',
          borderRadius: 20,
          padding: '44px 36px',
          textAlign: 'center',
          boxShadow: '10px 10px 0 0 #F3B952',
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
            Next one's already being planned.
          </h2>
          <p style={{ fontSize: 17, color: '#fff', margin: '0 0 28px', opacity: 0.95 }}>
            Join the WhatsApp community. The next date and venue are posted there first, and nowhere else.
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

        {/* ── Footer link ── */}
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link
            to="/game-night"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: '#F16147',
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

export default KcalGameNight;
