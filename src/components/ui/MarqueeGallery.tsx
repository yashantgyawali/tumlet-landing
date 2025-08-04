import React, { useRef, useState } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
};

type MarqueeGalleryProps = {
  items: MediaItem[];
  height?: number; // px
};

export const MarqueeGallery: React.FC<MarqueeGalleryProps> = ({ items, height = 200 }) => {
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [widths, setWidths] = useState<{ [idx: number]: number }>({});

  // Helper to set width based on aspect ratio if available
  const getWidth = (el: HTMLImageElement | HTMLVideoElement) => {
    if (el && el.naturalWidth && el.naturalHeight) {
      return (height * el.naturalWidth) / el.naturalHeight;
    }
    if (el && (el as HTMLVideoElement).videoWidth && (el as HTMLVideoElement).videoHeight) {
      return (height * (el as HTMLVideoElement).videoWidth) / (el as HTMLVideoElement).videoHeight;
    }
    // fallback width
    return height * 1.5;
  };

  // Duplicate items for seamless infinite loop
  const displayItems = [...items, ...items];

  // Only set width if it hasn't been set yet
  const handleImageLoad = (idx: number, el: HTMLImageElement) => {
    if (el && el.naturalWidth && el.naturalHeight && !widths[idx]) {
      setWidths(w => ({ ...w, [idx]: getWidth(el) }));
    }
  };

  const handleVideoMetadata = (idx: number, el: HTMLVideoElement) => {
    if (el && el.videoWidth && el.videoHeight && !widths[idx]) {
      setWidths(w => ({ ...w, [idx]: (height * el.videoWidth) / el.videoHeight }));
    }
  };

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{ height }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`flex gap-4 w-max animate-marquee${paused ? " paused" : ""}`}
        style={{
          animationDuration: "30s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 rounded-lg overflow-hidden"
            style={{
              height,
              width: widths[idx] || height * 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onMouseEnter={() => {
              if (item.type === "video" && videoRefs.current[idx]) {
                videoRefs.current[idx]?.play();
              }
            }}
            onMouseLeave={() => {
              if (item.type === "video" && videoRefs.current[idx]) {
                videoRefs.current[idx]?.pause();
                videoRefs.current[idx].currentTime = 0;
              }
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt || ""}
                className="object-contain w-full h-full"
                draggable={false}
                onLoad={e => handleImageLoad(idx, e.currentTarget)}
              />
            ) : (
              <video
                ref={el => (videoRefs.current[idx] = el)}
                src={item.src}
                poster={item.poster}
                className="object-contain w-full h-full"
                muted
                loop
                playsInline
                preload="metadata"
                style={{ pointerEvents: "none" }}
                onLoadedMetadata={e => handleVideoMetadata(idx, e.currentTarget)}
              />
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};