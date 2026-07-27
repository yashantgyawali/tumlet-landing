import React, { useState } from "react";

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
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 22,
    }}>
      {items.map((t, i) => (
        <TestimonialMiniCard key={t.name} {...t} shadowColor={shadowColors[i % 3]} rotate={rotations[i % 3]} />
      ))}
    </div>
  );
}
