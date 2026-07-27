import React, { useEffect, useRef, useState } from "react";

export type MiniTestimonial = {
  quote: string;
  name: string;
  location: string;
  initials: string;
  avatarBg: string;
  avatarColor?: string;
};

const shadowColors = ["#5A3A1F", "#F16147", "#F3B952"];
const rotations = [0, -1, 0.8];

function TestimonialMiniCard({ quote, name, location, initials, avatarBg, avatarColor = "#130D01", shadowColor, rotate }: MiniTestimonial & { shadowColor: string; rotate: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        border: "2px solid #130D01",
        borderRadius: 14,
        padding: 24,
        boxShadow: hovered ? "9px 9px 0 #130D01" : `6px 6px 0 ${shadowColor}`,
        transform: hovered ? "translate(-3px,-3px) rotate(0deg)" : `rotate(${rotate}deg)`,
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
      }}
    >
      <div style={{ color: "#F3B952", fontSize: 15, letterSpacing: 3, marginBottom: 12 }}>★★★★★</div>
      <p style={{
        fontFamily: "'Baloo 2', sans-serif",
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 1.45,
        color: "#2a241a",
        margin: "0 0 16px",
        flex: 1,
      }}>
        "{quote}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 34,
          height: 34,
          borderRadius: 999,
          border: "2px solid #130D01",
          background: avatarBg,
          color: avatarColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Baloo 2', sans-serif",
          fontWeight: 800,
          fontSize: 14,
          flexShrink: 0,
        }}>
          {initials}
        </div>
        <div>
          <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 14, color: "#130D01", lineHeight: 1.2 }}>{name}</div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "#6B6B6B" }}>{location}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialTrio({ items }: { items: MiniTestimonial[] }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 22,
    }}>
      {items.map((t, i) => (
        <div key={t.name} style={{ flex: "1 1 240px", maxWidth: 320 }}>
          <TestimonialMiniCard {...t} shadowColor={shadowColors[i % 3]} rotate={rotations[i % 3]} />
        </div>
      ))}
    </div>
  );
}

const GAP = 22;
// The edge strip is the gutter a card slides in through. Under GAP and the next card
// stays out of frame at rest; over GAP and it peeks in. Both stay above the 9px hover
// shadow so that never gets clipped.
const EDGE_TIGHT = 20;  // multi-up: neighbours fully out of frame
const FADE_TIGHT = 10;
const EDGE_PEEK = 46;   // single-up: let the next card peek in as a "there's more" hint
const FADE_PEEK = 16;
const MIN_SLOT = 240;
const DWELL_MS = 5500;  // how long a pair sits still before the next card slides in
const SLIDE_MS = 750;

export function TestimonialCarousel({ items, visibleCount = 2 }: { items: MiniTestimonial[]; visibleCount?: number }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [slotW, setSlotW] = useState(0);
  const [perView, setPerView] = useState(visibleCount);
  const [edge, setEdge] = useState(EDGE_TIGHT);
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reduced] = useState(
    () => typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );

  // Slot width drives the translate distance, so measure it instead of guessing.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      const boxW = el.clientWidth;
      const fits = Math.max(
        1,
        Math.min(visibleCount, items.length, Math.floor((boxW - EDGE_TIGHT * 2 + GAP) / (MIN_SLOT + GAP)))
      );
      const edge = fits > 1 ? EDGE_TIGHT : EDGE_PEEK;
      setPerView(fits);
      setEdge(edge);
      setSlotW((boxW - edge * 2 - GAP * (fits - 1)) / fits);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [visibleCount, items.length]);

  useEffect(() => setIndex(0), [perView]);

  const canRotate = items.length > perView;
  // Repeat the first `perView` cards at the end so the last step lands on a copy
  // of the opening pair, then snap back to 0 with the transition off.
  const track = canRotate ? [...items, ...items.slice(0, perView)] : items;

  // Keyed on `index` so a manual jump also gets a full dwell before the next slide.
  useEffect(() => {
    if (paused || !canRotate) return;
    const id = setTimeout(() => setIndex((i) => i + 1), DWELL_MS);
    return () => clearTimeout(id);
  }, [paused, canRotate, index]);

  useEffect(() => {
    if (index !== items.length) return;
    const t = setTimeout(() => {
      setSliding(false);
      setIndex(0);
    }, SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, items.length]);

  useEffect(() => {
    if (sliding) return;
    const t = setTimeout(() => setSliding(true), 60);
    return () => clearTimeout(t);
  }, [sliding]);

  const activeDot = index % items.length;
  const fade = perView > 1 ? FADE_TIGHT : FADE_PEEK;
  const mask = `linear-gradient(to right, transparent 0, #000 ${fade}px, #000 calc(100% - ${fade}px), transparent 100%)`;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ maxWidth: 320 * 2 + GAP + EDGE_TIGHT * 2, margin: "0 auto" }}
    >
      <div
        ref={viewportRef}
        style={{
          padding: `10px ${edge}px 20px`,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: GAP,
            transform: `translateX(-${index * (slotW + GAP)}px)`,
            transition: sliding && !reduced ? `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none",
          }}
        >
          {track.map((t, i) => {
            const original = i % items.length;
            return (
              <div key={i} style={{ flex: `0 0 ${slotW}px` }}>
                <TestimonialMiniCard
                  {...t}
                  shadowColor={shadowColors[original % 3]}
                  rotate={rotations[original % 3]}
                />
              </div>
            );
          })}
        </div>
      </div>

      {canRotate && (
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 4 }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              style={{
                width: i === activeDot ? 22 : 8,
                height: 8,
                borderRadius: 999,
                border: "2px solid #130D01",
                background: i === activeDot ? "#F16147" : "#FAF1E4",
                padding: 0,
                cursor: "pointer",
                transition: "width 0.25s ease, background 0.25s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
