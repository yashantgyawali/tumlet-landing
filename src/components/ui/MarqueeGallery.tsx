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
  // A declared aspectRatio that disagrees with the file (EXIF-rotated photos are
  // the usual culprit) would letterbox the media inside an over-wide slot and
  // read as an uneven gap. Snap the slot to the real ratio once it's known.
  const [measured, setMeasured] = useState<Record<number, number>>({});

  const measure = (index: number, w: number, h: number) => {
    if (!w || !h) return;
    const ratio = w / h;
    setMeasured(prev => {
      const declared = items[index].aspectRatio || FALLBACK_ASPECT_RATIO;
      if (prev[index] || Math.abs(ratio - declared) < declared * 0.01) return prev;
      return { ...prev, [index]: ratio };
    });
  };

  const getWidth = (item: MediaItem, index: number) =>
    height * (measured[index] || item.aspectRatio || FALLBACK_ASPECT_RATIO);

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
              width: getWidth(item, idx % items.length),
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
                onLoad={e => measure(idx % items.length, e.currentTarget.naturalWidth, e.currentTarget.naturalHeight)}
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
                onLoadedMetadata={e => measure(idx % items.length, e.currentTarget.videoWidth, e.currentTarget.videoHeight)}
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