import React, { useRef, useState } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
  // width / height of the source file, so the slot width is known up front
  // instead of being measured after the media loads (which shifts layout).
  aspectRatio?: number;
};

type MarqueeGalleryProps = {
  items: MediaItem[];
  height?: number; // px
};

const FALLBACK_ASPECT_RATIO = 1.5;

export const MarqueeGallery: React.FC<MarqueeGalleryProps> = ({ items, height = 200 }) => {
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const getWidth = (item: MediaItem) => height * (item.aspectRatio || FALLBACK_ASPECT_RATIO);

  // Duplicate items for seamless infinite loop
  const displayItems = [...items, ...items];

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
              width: getWidth(item),
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