import React from 'react';

const ASSET = '/bluff-momo-manual';

interface AudioPlayerProps {
  playing: boolean;
  missing: boolean;
  t: number;
  dur: number;
  onPlayPause: () => void;
  onSeek: (ratio: number) => void;
}

function clock(sec: number) {
  const s = Math.max(0, Math.round(sec));
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
}

export default function AudioPlayer({ playing, missing, t, dur, onPlayPause, onSeek }: AudioPlayerProps) {
  const ratio = dur ? t / dur : 0;
  const status = missing
    ? 'Recording not added yet'
    : dur
    ? `${clock(t)} of ${clock(dur)}`
    : playing
    ? 'Loading'
    : 'About two minutes';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '18px 22px',
        border: '1px solid var(--color-gray-roboflow-300)',
        borderRadius: 16,
        marginTop: 32,
        maxWidth: '64ch',
        flexWrap: 'wrap',
      }}
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onPlayPause();
        }}
        className="bmm-play-btn"
        style={{
          flex: 'none',
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'var(--color-red-pushpin-450)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          transition: 'transform 200ms cubic-bezier(0,0.35,0,1.25)',
        }}
      >
        <span
          className="g-icon"
          style={{
            width: 22,
            height: 22,
            background: '#FFFFFF',
            maskImage: `url(${ASSET}/icons/${playing ? 'pause' : 'play'}.svg)`,
            WebkitMaskImage: `url(${ASSET}/icons/${playing ? 'pause' : 'play'}.svg)`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
        />
      </a>
      <div style={{ flex: '1 1 220px', minWidth: 200, display: 'flex', flexDirection: 'column', gap: 7 }}>
        <div className="g-text g-text--200 g-text--ui">Hear this page in my words</div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const r = e.currentTarget.getBoundingClientRect();
            const ratio = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
            onSeek(ratio);
          }}
          style={{
            display: 'block',
            height: 6,
            borderRadius: 3,
            background: 'var(--color-gray-roboflow-200)',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              display: 'block',
              height: 6,
              borderRadius: 3,
              background: 'var(--color-red-pushpin-450)',
              transition: 'width 120ms linear',
              width: `${Math.round(ratio * 1000) / 10}%`,
            }}
          />
        </a>
        <div className="g-text g-text--100 g-c-subtle">{status}</div>
      </div>
    </div>
  );
}
