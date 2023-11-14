import React from "react";

export default function Card({ id, color }) {
  return (
    <div className="color-card" style={{ background: color }}>
      <p>
        <span>{id}</span> {color}
      </p>
    </div>
  );
}
