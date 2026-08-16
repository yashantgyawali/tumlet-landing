import React from 'react';
import { Play, Pause } from 'lucide-react';

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
    <div className="flex items-center gap-4 py-3 md:py-4">
      <button
        type="button"
        onClick={onPlayPause}
        aria-label={playing ? 'Pause narration' : 'Play narration'}
        className="flex-none w-12 h-12 rounded-full bg-tumlet-primaryRed text-white flex items-center justify-center shadow-[0_2px_6px_rgba(22,27,50,0.2)] transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-tumlet-primaryRed focus-visible:ring-offset-2 focus-visible:ring-offset-tumlet-beige"
      >
        {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-outfit text-sm font-semibold text-tumlet-text truncate">
            Hear this page in my words
          </span>
          <span className="font-outfit text-xs text-tumlet-text/60 flex-none tabular-nums">{status}</span>
        </div>
        <div
          role="slider"
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(ratio * 100)}
          tabIndex={0}
          onClick={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            onSeek(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
          }}
          className="mt-2 h-1.5 rounded-full bg-tumlet-primaryYellow/35 overflow-hidden cursor-pointer"
        >
          <span
            className="block h-full rounded-full bg-tumlet-primaryRed transition-[width] duration-100 ease-linear"
            style={{ width: `${Math.round(ratio * 1000) / 10}%` }}
          />
        </div>
      </div>
    </div>
  );
}
