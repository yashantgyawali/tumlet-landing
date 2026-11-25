import { useState, type CSSProperties } from 'react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  /** Applied to the thumbnail button and, once playing, to the iframe. */
  className?: string;
  style?: CSSProperties;
}

// Shows the video's thumbnail and loads YouTube's player only when clicked.
// An embedded player downloads several hundred KB of script on page load,
// which slowed the homepage down for everyone, including people who never
// press play.
const YouTubeFacade = ({ videoId, title, className = '', style }: YouTubeFacadeProps) => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className={className}
        style={style}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block overflow-hidden p-0 border-0 bg-black cursor-pointer ${className}`}
      style={style}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        width={1280}
        height={720}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F16146] shadow-[4px_4px_0_#130D01] transition-transform duration-200 group-hover:scale-105">
          <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 ml-1 fill-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
};

export default YouTubeFacade;
