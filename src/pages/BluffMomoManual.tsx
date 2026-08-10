import React, { useEffect, useRef, useState } from 'react';
import AudioPlayer from './bluff-momo-manual/AudioPlayer';
import './bluff-momo-manual/gestalt-scoped.css';

const ASSET = '/bluff-momo-manual';

function icon(name: string) {
  return `${ASSET}/icons/${name}.svg`;
}

function maskStyle(name: string, extra?: React.CSSProperties): React.CSSProperties {
  const url = icon(name);
  return {
    maskImage: `url(${url})`,
    WebkitMaskImage: `url(${url})`,
    ...extra,
  };
}

const PAGES = [
  { slug: 'start', label: 'Start here', icon: 'rocketship' },
  { slug: 'setup', label: 'Setting up', icon: 'table' },
  { slug: 'turn', label: 'Your turn', icon: 'swap' },
  { slug: 'characters', label: 'The five characters', icon: 'person' },
  { slug: 'bluffing', label: 'Bluffing and challenges', icon: 'speech' },
  { slug: 'poison', label: 'Poison and double trouble', icon: 'flame' },
  { slug: 'reference', label: 'Quick reference', icon: 'terms' },
] as const;

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

const cardStyle: React.CSSProperties = {
  border: '1px solid var(--color-gray-roboflow-300)',
  borderRadius: 16,
  padding: 28,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
};

function BluffMomoManual() {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [dur, setDur] = useState(0);
  const [missing, setMissing] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.title = 'Bluff Momo Manual | The Full Rulebook, Explained';
    setMetaTag('description', 'A plain-English, page-by-page guide to Bluff Momo: setup, turns, characters, bluffing, poison, and a quick reference sheet.');
    setPropertyTag('og:title', 'Bluff Momo Manual');
    setPropertyTag('og:type', 'website');
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = document.scrollingElement || document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [page]);

  const goTo = (i: number) => {
    const a = audioRef.current;
    if (a) {
      a.pause();
    }
    setPlaying(false);
    setT(0);
    setDur(0);
    setMissing(false);
    setPage(i);
    setProgress(0);
    setNavOpen(false);
    window.scrollTo(0, 0);
  };

  const playPause = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
      return;
    }
    setMissing(false);
    const p = a.play();
    if (p && p.catch) {
      p.then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      setPlaying(true);
    }
  };

  const seek = (ratio: number) => {
    const a = audioRef.current;
    if (!a || !dur) return;
    a.currentTime = ratio * dur;
    setT(a.currentTime);
  };

  const audioProps = { playing, missing, t, dur, onPlayPause: playPause, onSeek: seek };
  const current = PAGES[page];

  return (
    <div className="bmm-scope" style={{ display: 'flex', alignItems: 'flex-start', minHeight: '100vh', fontFamily: 'var(--font-family-default-latin)' }}>
      <audio
        key={current.slug}
        ref={audioRef}
        src={`${ASSET}/audio/bluff-momo-${current.slug}.m4a`}
        preload="none"
        style={{ display: 'none' }}
        onLoadedMetadata={(e) => {
          setDur(e.currentTarget.duration || 0);
          setMissing(false);
        }}
        onTimeUpdate={(e) => setT(e.currentTarget.currentTime)}
        onEnded={() => {
          setPlaying(false);
          setT(0);
        }}
        onError={() => {
          setPlaying(false);
          setMissing(true);
          setDur(0);
        }}
      />

      <div
        className={`bmm-nav-backdrop ${navOpen ? 'bmm-nav-backdrop--open' : ''}`}
        onClick={() => setNavOpen(false)}
      />

      <nav
        className={`bmm-nav ${navOpen ? 'bmm-nav--open' : ''}`}
        style={{
          position: 'sticky',
          top: 0,
          flex: 'none',
          width: 272,
          height: '100vh',
          boxSizing: 'border-box',
          padding: '32px 20px',
          borderRight: '1px solid var(--color-gray-roboflow-300)',
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          background: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '0 12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-yellow-caramellow-450)' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-red-pushpin-450)' }} />
          </div>
          <div className="g-heading g-heading--300" style={{ marginTop: 6 }}>Bluff Momo</div>
          <div className="g-text g-text--100 g-c-subtle">A plain-English guide</div>
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: 44,
              borderRadius: 12,
              background: 'var(--color-gray-roboflow-100)',
              transition: 'transform 200ms cubic-bezier(0.8,0,0.2,1)',
              transform: `translateY(${page * 46}px)`,
            }}
          />
          {PAGES.map((p, i) => (
            <a
              key={p.slug}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goTo(i);
              }}
              className="bmm-nav-link"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                height: 44,
                padding: '0 12px',
                borderRadius: 12,
                textDecoration: 'none',
                color: 'var(--color-text-default)',
              }}
            >
              <span className="g-icon g-i-default" style={maskStyle(p.icon, { width: 20, height: 20 })} />
              <span className="g-text g-text--200 g-text--ui">{p.label}</span>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 'auto', padding: '0 12px' }}>
          <div className="g-text g-text--100 g-c-subtle" style={{ textWrap: 'pretty' as any }}>
            First game? Pages 1 to 3 are all you need. The rest can wait until someone argues.
          </div>
        </div>
      </nav>

      <main style={{ flex: 1, minWidth: 0, position: 'relative' }}>
        <div className="bmm-progress-track" style={{ position: 'fixed', top: 0, left: 272, right: 0, height: 3, background: 'transparent', zIndex: 20 }}>
          <div style={{ height: 3, background: 'var(--color-red-pushpin-450)', transition: 'width 80ms linear', width: `${Math.round(progress * 1000) / 10}%` }} />
        </div>

        <div className="bmm-mobile-topbar">
          <button
            type="button"
            onClick={() => setNavOpen(true)}
            aria-label="Open menu"
            style={{ background: 'none', border: 0, padding: 8, cursor: 'pointer', display: 'flex' }}
          >
            <span style={{ width: 22, height: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ height: 2, background: 'var(--color-text-default)', borderRadius: 1 }} />
              <span style={{ height: 2, background: 'var(--color-text-default)', borderRadius: 1 }} />
              <span style={{ height: 2, background: 'var(--color-text-default)', borderRadius: 1 }} />
            </span>
          </button>
          <span className="g-text g-text--200 g-text--ui">{current.label}</span>
          <span style={{ width: 38 }} />
        </div>

        {page === 0 && <StartPage audioProps={audioProps} onNext={() => goTo(1)} />}
        {page === 1 && <SetupPage audioProps={audioProps} onNext={() => goTo(2)} />}
        {page === 2 && <TurnPage audioProps={audioProps} onNext={() => goTo(3)} />}
        {page === 3 && <CharactersPage audioProps={audioProps} onNext={() => goTo(4)} />}
        {page === 4 && <BluffingPage audioProps={audioProps} onNext={() => goTo(5)} />}
        {page === 5 && <PoisonPage audioProps={audioProps} onNext={() => goTo(6)} />}
        {page === 6 && <ReferencePage audioProps={audioProps} onBack={() => goTo(0)} />}
      </main>
    </div>
  );
}

type AudioProps = React.ComponentProps<typeof AudioPlayer>;

function PageEyebrow({ n }: { n: number }) {
  return (
    <div className="g-text g-text--100 g-text--ui g-c-subtle" style={{ letterSpacing: '0.6px', textTransform: 'uppercase' }}>
      Page {n}
    </div>
  );
}

function NextButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="g-btn g-btn--red g-btn--lg"
      style={{ display: 'inline-flex', marginTop: 56, textDecoration: 'none' }}
    >
      {children}
    </a>
  );
}

function StartPage({ audioProps, onNext }: { audioProps: AudioProps; onNext: () => void }) {
  return (
    <div>
      <section
        style={{
          minHeight: '88vh',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          gap: 48,
          padding: '80px clamp(32px,5vw,96px) 72px',
          maxWidth: 1240,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 460px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              alignSelf: 'flex-start',
              padding: '6px 14px',
              borderRadius: 24,
              background: 'var(--color-gray-roboflow-100)',
            }}
          >
            <span className="g-text g-text--100 g-text--ui g-c-subtle">The 60-second version</span>
          </div>
          <h1 className="g-heading g-heading--700" style={{ fontSize: 'clamp(40px, 11vw, 64px)', lineHeight: 1.02, letterSpacing: '-1.2px', margin: 0 }}>
            Bluff Momo
          </h1>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
            {[
              ['15', 'character cards'],
              ['5', 'characters, 3 of each'],
              ['2', 'cards and 2 momo each'],
            ].map(([n, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '14px 20px', borderRadius: 16, background: 'var(--color-gray-roboflow-50)', minWidth: 120 }}>
                <div className="g-heading g-heading--500">{n}</div>
                <div className="g-text g-text--100 g-c-subtle">{label}</div>
              </div>
            ))}
          </div>

          <AudioPlayer {...audioProps} />
        </div>
        <div style={{ flex: '0 1 240px', minWidth: 160, display: 'flex', justifyContent: 'center' }}>
          <img src={`${ASSET}/images/hante-no-bg.png`} alt="हन्त, grabbing a whole bowl of momo" style={{ width: '100%', maxWidth: 340, height: 'auto', objectFit: 'contain' }} />
        </div>
      </section>

      <section style={{ padding: '72px clamp(32px,5vw,96px)', maxWidth: 1000 }}>
        <h2 className="g-heading g-heading--600" style={{ fontSize: 'clamp(24px, 6vw, 32px)', margin: '0 0 8px' }}>The goal</h2>
        <p className="g-text g-text--400 g-c-subtle" style={{ maxWidth: '56ch' }}>
          Be the last one standing. Use momo and character cards to knock out other people's cards while protecting your own. Lose both of your cards and you are out.
        </p>
      </section>

      <section style={{ padding: '16px clamp(32px,5vw,96px) 120px', maxWidth: 1000 }}>
        <div style={{ display: 'flex', gap: 14, padding: '24px 28px', borderRadius: 16, background: 'var(--color-yellow-caramellow-50)', maxWidth: '70ch' }}>
          <span className="g-icon g-i-warning" style={maskStyle('lightbulb', { width: 20, height: 20, flex: 'none', marginTop: 2 })} />
          <div className="g-text g-text--300">
            <span className="g-text--bold">Key rule.</span> You do not need to hold the card to use its power.
          </div>
        </div>
        <NextButton onClick={onNext}>Next: setting up</NextButton>
      </section>
    </div>
  );
}

function SetupPage({ audioProps, onNext }: { audioProps: AudioProps; onNext: () => void }) {
  const steps = [
    { n: 1, title: 'Pile the momo in the middle', body: 'All of them, in one pile everyone can reach. This is the steamer.' },
    { n: 2, title: 'Everyone takes 2 momo', body: 'From the middle pile. Keep them visible — momo counts are public.' },
    { n: 3, title: 'Shuffle 15 cards, deal 2 each', body: 'Five characters, three copies of each. Deal two to every player and put the rest face-down in the centre as the deck. Look at your own two, then set them face-down in front of you.' },
    { n: 4, title: 'Start to the right of the dealer', body: 'That player takes the first turn, and play carries on around the table. One action each, every turn.' },
  ];
  return (
    <div className="bmm-page-enter" style={{ padding: '80px clamp(32px,5vw,96px) 120px', maxWidth: 1000 }}>
      <PageEyebrow n={2} />
      <h1 className="g-heading g-heading--700" style={{ fontSize: 'clamp(30px, 9vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.9px', margin: '12px 0 20px' }}>Setting up</h1>
      <p className="g-text g-text--400 g-c-subtle" style={{ maxWidth: '56ch' }}>Four steps, about a minute. Do them in this order.</p>
      <AudioPlayer {...audioProps} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 56 }}>
        {steps.map((s, i) => (
          <div
            key={s.n}
            style={{
              display: 'grid',
              gridTemplateColumns: '56px 1fr',
              gap: 24,
              paddingBottom: i < steps.length - 1 ? 36 : 0,
              borderLeft: i < steps.length - 1 ? '2px solid var(--color-gray-roboflow-200)' : undefined,
              marginLeft: 19,
            }}
          >
            <div
              style={{
                marginLeft: -20,
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: i === steps.length - 1 ? 'var(--color-red-pushpin-450)' : 'var(--color-text-default)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="g-text g-text--200 g-text--ui"
            >
              {s.n}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 5 }}>
              <div className="g-heading g-heading--400">{s.title}</div>
              <div className="g-text g-text--300 g-c-subtle" style={{ maxWidth: '58ch' }}>{s.body}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="g-heading g-heading--600" style={{ fontSize: 'clamp(24px, 6vw, 32px)', margin: '88px 0 24px' }}>What is on the table</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
        <div style={cardStyle}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
            <span style={{ width: 34, height: 48, borderRadius: 8, background: 'var(--color-gray-roboflow-200)', border: '1px solid var(--color-gray-roboflow-300)', boxSizing: 'border-box' }} />
            <span style={{ width: 34, height: 48, borderRadius: 8, background: 'var(--color-gray-roboflow-200)', border: '1px solid var(--color-gray-roboflow-300)', boxSizing: 'border-box' }} />
          </div>
          <div className="g-heading g-heading--400" style={{ marginTop: 4 }}>Your two cards</div>
          <div className="g-text g-text--300 g-c-subtle">Face-down, secret, yours. They are the only thing keeping you in the game.</div>
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: 48 }}>
            <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--color-yellow-caramellow-100)', border: '1px solid var(--color-yellow-caramellow-450)', boxSizing: 'border-box' }} />
            <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--color-yellow-caramellow-100)', border: '1px solid var(--color-yellow-caramellow-450)', boxSizing: 'border-box' }} />
          </div>
          <div className="g-heading g-heading--400" style={{ marginTop: 4 }}>Your two momo</div>
          <div className="g-text g-text--300 g-c-subtle">Public. Anyone can count them, and people will, because momo tell them what you are about to do.</div>
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
            <span style={{ width: 34, height: 48, borderRadius: 8, background: 'var(--color-text-default)' }} />
            <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--color-yellow-caramellow-100)', border: '1px solid var(--color-yellow-caramellow-450)', boxSizing: 'border-box', marginBottom: 2 }} />
          </div>
          <div className="g-heading g-heading--400" style={{ marginTop: 4 }}>The centre</div>
          <div className="g-text g-text--300 g-c-subtle">The face-down deck and the momo pile. Lost cards go back into the deck, spent momo go back to the pile.</div>
        </div>
      </div>

      <NextButton onClick={onNext}>Next: taking your turn</NextButton>
    </div>
  );
}

function TurnPage({ audioProps, onNext }: { audioProps: AudioProps; onNext: () => void }) {
  const characterActions = [
    { icon: 'target', bold: 'हन्त.', text: 'Take 3 momo from the middle pile in one go. Nothing blocks it, but anyone can challenge the claim.', dim: false },
    { icon: 'swap', bold: 'चोर.', text: 'Steal 2 momo from any player. Can be blocked by चोर or मन्त्री.', dim: false },
    { icon: 'flame', bold: 'भट्टीको दाई.', text: 'Use 3 momo to poison any player, making them lose a card. Can be blocked by आमा.', dim: false },
    { icon: 'eye', bold: 'मन्त्री.', text: 'Choose one: force any player to show you one of their cards, which मन्त्री can block, or draw a new card from the deck, look at it, and put back any 1 of your cards.', dim: false },
    { icon: 'protect', bold: 'आमा.', text: 'No action at all. She only ever blocks, on someone else’s turn, and she blocks the poison.', dim: true },
  ];
  return (
    <div className="bmm-page-enter" style={{ padding: '80px clamp(32px,5vw,96px) 120px', maxWidth: 1000 }}>
      <PageEyebrow n={3} />
      <h1 className="g-heading g-heading--700" style={{ fontSize: 'clamp(30px, 9vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.9px', margin: '12px 0 20px' }}>Your turn</h1>
      <p className="g-text g-text--400 g-c-subtle" style={{ maxWidth: '56ch' }}>On your turn you take exactly one action. Two of them nobody can touch. The rest are character actions, and those can be doubted.</p>
      <AudioPlayer {...audioProps} />

      <h2 className="g-heading g-heading--600" style={{ fontSize: 'clamp(24px, 6vw, 32px)', margin: '72px 0 8px' }}>Basic actions</h2>
      <p className="g-text g-text--300 g-c-subtle" style={{ maxWidth: '56ch', marginBottom: 28 }}>No one can stop these. No block, no challenge, no discussion.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--color-yellow-caramellow-100)', border: '1px solid var(--color-yellow-caramellow-450)', boxSizing: 'border-box' }} />
          </div>
          <div className="g-heading g-heading--400" style={{ marginTop: 4 }}>चपचाप move</div>
          <div className="g-text g-text--300 g-c-subtle">Take 1 momo from the middle pile.</div>
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span className="g-icon g-i-error" style={maskStyle('flame', { width: 22, height: 22 })} />
            <span className="g-text g-text--200 g-text--ui g-c-subtle">7 momo</span>
          </div>
          <div className="g-heading g-heading--400" style={{ marginTop: 4 }}>Food-poison</div>
          <div className="g-text g-text--300 g-c-subtle">If you have 7 momo, spend them to poison any player. They lose a card of their choice. Nobody can block it and nobody can challenge it, because you are not claiming a character.</div>
        </div>
      </div>

      <h2 className="g-heading g-heading--600" style={{ fontSize: 'clamp(24px, 6vw, 32px)', margin: '88px 0 8px' }}>Character actions</h2>
      <p className="g-text g-text--300 g-c-subtle" style={{ maxWidth: '56ch', marginBottom: 28 }}>Say the character's name out loud, then do the thing. You may or may not actually hold the card.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {characterActions.map((a) => (
          <div key={a.bold} style={{ display: 'flex', gap: 14, padding: '20px 24px', borderRadius: 16, background: 'var(--color-gray-roboflow-50)' }}>
            <span className={`g-icon ${a.dim ? 'g-i-subtle' : 'g-i-default'}`} style={maskStyle(a.icon, { width: 20, height: 20, flex: 'none', marginTop: 2 })} />
            <div className="g-text g-text--300">
              <span className="g-text--bold">{a.bold}</span> {a.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 14, padding: '20px 24px', borderRadius: 16, background: 'var(--color-yellow-caramellow-50)', marginTop: 20, maxWidth: '70ch' }}>
        <span className="g-icon g-i-warning" style={maskStyle('workflow-status-problem', { width: 20, height: 20, flex: 'none', marginTop: 2 })} />
        <div className="g-text g-text--300">
          <span className="g-text--bold">The full plate rule.</span> If you have collected 10 or more momo, you must food-poison another player on your next turn. No hoarding.
        </div>
      </div>

      <NextButton onClick={onNext}>Next: the five characters</NextButton>
    </div>
  );
}

function CharactersPage({ audioProps, onNext }: { audioProps: AudioProps; onNext: () => void }) {
  const characters = [
    { img: 'hante-no-bg', name: 'हन्त', action: 'Take 3 momo from the middle pile in one move.', blocks: 'Nothing.' },
    { img: 'chor-no-bg', name: 'चोर', action: 'Steal 2 momo from any player.', blocks: 'चोर’s attempt to steal your momo.' },
    { img: 'bhattikodai-no-bg', name: 'भट्टीको दाई', action: 'Use 3 momo to poison any player. They lose one card.', blocks: 'Nothing.' },
    { img: 'aama-no-bg', name: 'आमा', action: 'None.', blocks: 'भट्टीको दाई’s poison attempt.' },
    { img: 'mantri-no-bg', name: 'मन्त्री', action: 'Force any player to show you one of their cards, or draw a new card from the deck, look at it, and put back any 1 of your cards.', blocks: 'चोर’s attempt to steal your momo, and मन्त्री’s attempt to look at your card.' },
  ];
  return (
    <div className="bmm-page-enter" style={{ padding: '80px clamp(32px,5vw,96px) 120px', maxWidth: 1080 }}>
      <PageEyebrow n={4} />
      <h1 className="g-heading g-heading--700" style={{ fontSize: 'clamp(30px, 9vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.9px', margin: '12px 0 20px' }}>The five characters</h1>
      <p className="g-text g-text--400 g-c-subtle" style={{ maxWidth: '56ch' }}>Three copies of each in the deck. Every character does one thing on your turn, blocks one thing on someone else's, or both.</p>
      <AudioPlayer {...audioProps} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 56 }}>
        {characters.map((c) => (
          <div key={c.name} style={{ border: '1px solid var(--color-gray-roboflow-300)', borderRadius: 16, padding: 28, display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
            <img src={`${ASSET}/images/${c.img}.png`} alt={c.name} style={{ width: 150, height: 180, objectFit: 'contain', flex: 'none' }} />
            <div style={{ flex: '1 1 340px', minWidth: 280, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="g-heading g-heading--500">{c.name}</div>
              <div className="g-text g-text--300"><span className="g-text--bold">Action.</span> {c.action}</div>
              <div className="g-text g-text--300 g-c-subtle"><span className="g-text--bold">Blocks.</span> {c.blocks}</div>
            </div>
          </div>
        ))}
      </div>

      <NextButton onClick={onNext}>Next: bluffing and challenges</NextButton>
    </div>
  );
}

function BluffingPage({ audioProps, onNext }: { audioProps: AudioProps; onNext: () => void }) {
  const blockRows = [
    ['चोर steals 2 momo', 'चोर or मन्त्री'],
    ['भट्टीको दाई poisons you for 3 momo', 'आमा'],
    ['मन्त्री looks at one of your cards', 'मन्त्री'],
    ['हन्त takes 3 momo', 'Nobody. Challenge it or let it go'],
    ['चपचाप move, or food-poison with 7 momo', 'Nobody, and no challenge either'],
  ];
  return (
    <div className="bmm-page-enter" style={{ padding: '80px clamp(32px,5vw,96px) 120px', maxWidth: 1000 }}>
      <PageEyebrow n={5} />
      <h1 className="g-heading g-heading--700" style={{ fontSize: 'clamp(30px, 9vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.9px', margin: '12px 0 20px' }}>Bluffing and challenges</h1>
      <p className="g-text g-text--400 g-c-subtle" style={{ maxWidth: '56ch' }}>
        You can claim any character to take an action or block one, whether or not you hold it. Any player can challenge you to reveal the card.
      </p>
      <AudioPlayer {...audioProps} />

      <h2 className="g-heading g-heading--600" style={{ fontSize: 'clamp(24px, 6vw, 32px)', margin: '72px 0 24px' }}>What happens when you are challenged</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
        <div style={{ border: '1px solid var(--color-green-matchacado-450)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="g-icon g-i-success" style={maskStyle('workflow-status-ok', { width: 24, height: 24 })} />
          <div className="g-heading g-heading--400">You were telling the truth</div>
          <div className="g-text g-text--300 g-c-subtle">The challenger loses 1 card of their choice and returns it face-down to the deck. You swap the revealed card with a random card from the deck, so nobody knows what you hold now. Your action still goes through.</div>
        </div>
        <div style={{ border: '1px solid var(--color-red-pushpin-450)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="g-icon g-i-error" style={maskStyle('workflow-status-problem', { width: 24, height: 24 })} />
          <div className="g-heading g-heading--400">You were bluffing</div>
          <div className="g-text g-text--300 g-c-subtle">You lose 1 card of your choice and return it face-down to the deck. The challenger wins 1 momo from the pile. Your action does not happen.</div>
        </div>
      </div>

      <h2 className="g-heading g-heading--600" style={{ fontSize: 'clamp(24px, 6vw, 32px)', margin: '88px 0 8px' }}>Blocking is also a claim</h2>
      <p className="g-text g-text--300 g-c-subtle" style={{ maxWidth: '56ch', marginBottom: 28 }}>
        Saying "आमा, you can't poison me" is a claim like any other, and it can be challenged like any other. Read the block table before you say it.
      </p>
      <div style={{ border: '1px solid var(--color-gray-roboflow-300)', borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', background: 'var(--color-gray-roboflow-50)', padding: '14px 24px' }}>
          <div className="g-text g-text--200 g-text--ui">Action against you</div>
          <div className="g-text g-text--200 g-text--ui">Who can block it</div>
        </div>
        {blockRows.map(([action, who]) => (
          <div key={action} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', padding: '16px 24px', borderTop: '1px solid var(--color-gray-roboflow-200)' }}>
            <div className="g-text g-text--300">{action}</div>
            <div className="g-text g-text--300 g-c-subtle">{who}</div>
          </div>
        ))}
      </div>

      <NextButton onClick={onNext}>Next: the double trouble rule</NextButton>
    </div>
  );
}

function PoisonPage({ audioProps, onNext }: { audioProps: AudioProps; onNext: () => void }) {
  const options = [
    { title: 'Take it', body: 'Lose one card of your choice and move on. Boring, and often correct if you already believe they have the card.' },
    { title: 'Challenge their claim', body: <>If they were telling the truth and show भट्टीको दाई, you lose <span className="g-text--bold">both</span> your cards: one for the poison, one for the failed challenge.</> },
    { title: 'Claim आमा to block it', body: 'If nobody challenges you, the poison is blocked and you keep everything. But if someone challenges you to show आमा and you cannot, you lose both cards: one for the poison, one for the failed bluff.' },
  ];
  return (
    <div className="bmm-page-enter" style={{ padding: '80px clamp(32px,5vw,96px) 120px', maxWidth: 1000 }}>
      <PageEyebrow n={6} />
      <h1 className="g-heading g-heading--700" style={{ fontSize: 'clamp(30px, 9vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.9px', margin: '12px 0 20px' }}>Poison and double trouble</h1>
      <p className="g-text g-text--400 g-c-subtle" style={{ maxWidth: '56ch' }}>
        A wrong guess when poisoned can cost you two cards instead of one.
      </p>
      <AudioPlayer {...audioProps} />

      <div style={{ display: 'flex', gap: 14, padding: '24px 28px', borderRadius: 16, background: 'var(--color-red-pushpin-50)', marginTop: 48, maxWidth: '74ch' }}>
        <span className="g-icon g-i-error" style={maskStyle('flame', { width: 20, height: 20, flex: 'none', marginTop: 2 })} />
        <div className="g-text g-text--300">
          <span className="g-text--bold">The double trouble rule.</span> If someone poisons you using भट्टीको दाई, you can lose both of your cards in one turn: one for the poison itself, and one for guessing wrong about how to escape it.
        </div>
      </div>

      <h2 className="g-heading g-heading--600" style={{ fontSize: 'clamp(24px, 6vw, 32px)', margin: '72px 0 24px' }}>Your three options when poison lands</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {options.map((o, i) => (
          <div key={o.title} style={{ border: '1px solid var(--color-gray-roboflow-300)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--color-gray-roboflow-200)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="g-text g-text--100 g-text--ui">{i + 1}</span>
              <div className="g-heading g-heading--400">{o.title}</div>
            </div>
            <div className="g-text g-text--300 g-c-subtle" style={{ maxWidth: '62ch' }}>{o.body}</div>
          </div>
        ))}
      </div>

      <h2 className="g-heading g-heading--600" style={{ fontSize: 'clamp(24px, 6vw, 32px)', margin: '88px 0 24px' }}>Two habits that keep you alive</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
        <div style={cardStyle}>
          <span className="g-icon g-i-default" style={maskStyle('lightbulb', { width: 24, height: 24 })} />
          <div className="g-heading g-heading--400">Count momo, not faces</div>
          <div className="g-text g-text--300 g-c-subtle">Three momo means poison is possible. Seven means it is coming whether or not they hold a card. Ten means it is mandatory next turn.</div>
        </div>
        <div style={cardStyle}>
          <span className="g-icon g-i-default" style={maskStyle('protect', { width: 24, height: 24 })} />
          <div className="g-heading g-heading--400">Keep your bluff consistent</div>
          <div className="g-text g-text--300 g-c-subtle">Only three of each character exist. If two people have already shown आमा, your आमा block is a lot less believable than it feels.</div>
        </div>
      </div>

      <NextButton onClick={onNext}>Next: quick reference</NextButton>
    </div>
  );
}

function ReferencePage({ audioProps, onBack }: { audioProps: AudioProps; onBack: () => void }) {
  const rows = [
    ['हन्त', 'Take 3 momo from the middle pile in one move', '—', false],
    ['चोर', 'Steal 2 momo from any player', 'चोर’s attempt to steal your momo', false],
    ['भट्टीको दाई', 'Use 3 momo to poison any player. They lose one card', '—', false],
    ['आमा', '—', 'भट्टीको दाई’s poison attempt', false],
    ['मन्त्री', 'Force any player to show one of their cards, or draw a new card from the deck, look at it, and put back any 1 of your cards', 'चोर’s attempt to steal your momo, and मन्त्री’s attempt to look at your card', false],
    ['चपचाप move', 'Take 1 momo from the middle. Cannot be blocked or challenged', '—', true],
    ['Food-poison', 'Use 7 momo to food-poison another player. They lose one card. Cannot be blocked or challenged', '—', true],
  ] as const;
  const glossary = [
    ['Momo', 'The currency. You start with 2 and take more from the middle pile.'],
    ['The steamer', 'The momo pile in the middle of the table. Spent momo go back into it.'],
    ['Claim', 'Saying you have a character, whether or not you do, in order to act or to block.'],
    ['Challenge', 'Demanding someone reveal the card they claimed. Wrong challengers lose a card; caught bluffers lose a card.'],
    ['Block', 'Cancelling an action aimed at you by claiming the right character. A block can itself be challenged.'],
    ['Full plate', '10 or more momo. You must food-poison someone on your next turn.'],
    ['Double trouble', 'Losing two cards at once by guessing wrong about a भट्टीको दाई poison.'],
  ];
  return (
    <div className="bmm-page-enter" style={{ padding: '80px clamp(32px,5vw,96px) 120px', maxWidth: 1000 }}>
      <PageEyebrow n={7} />
      <h1 className="g-heading g-heading--700" style={{ fontSize: 'clamp(30px, 9vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.9px', margin: '12px 0 20px' }}>Quick reference</h1>
      <p className="g-text g-text--400 g-c-subtle" style={{ maxWidth: '56ch' }}>Everything on one screen. Put this in front of the table and stop explaining.</p>
      <AudioPlayer {...audioProps} />

      <div style={{ border: '1px solid var(--color-gray-roboflow-300)', borderRadius: 16, overflow: 'hidden', marginTop: 48 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1.2fr', background: 'var(--color-gray-roboflow-50)', padding: '14px 24px' }}>
          <div className="g-text g-text--200 g-text--ui">Character</div>
          <div className="g-text g-text--200 g-text--ui">Action</div>
          <div className="g-text g-text--200 g-text--ui">Blocks</div>
        </div>
        {rows.map(([name, action, blocks, muted]) => (
          <div
            key={name}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1.2fr', padding: '16px 24px', borderTop: '1px solid var(--color-gray-roboflow-200)', gap: 12, background: muted ? 'var(--color-gray-roboflow-50)' : undefined }}
          >
            <div className="g-text g-text--300 g-text--bold">{name}</div>
            <div className="g-text g-text--300 g-c-subtle">{action}</div>
            <div className="g-text g-text--300 g-c-subtle">{blocks}</div>
          </div>
        ))}
      </div>

      <h2 className="g-heading g-heading--600" style={{ fontSize: 'clamp(24px, 6vw, 32px)', margin: '88px 0 24px' }}>Words you will hear</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {glossary.map(([term, def], i) => (
          <div
            key={term}
            style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24, padding: '20px 0', borderTop: '1px solid var(--color-gray-roboflow-200)', borderBottom: i === glossary.length - 1 ? '1px solid var(--color-gray-roboflow-200)' : undefined }}
          >
            <div className="g-text g-text--300 g-text--bold">{term}</div>
            <div className="g-text g-text--300 g-c-subtle">{def}</div>
          </div>
        ))}
      </div>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onBack();
        }}
        className="g-btn g-btn--gray g-btn--lg"
        style={{ display: 'inline-flex', marginTop: 56, textDecoration: 'none' }}
      >
        Back to the start
      </a>
    </div>
  );
}

export default BluffMomoManual;
