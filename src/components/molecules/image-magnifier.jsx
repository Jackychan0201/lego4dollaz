"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

export default function ImageMagnifier({ src, width, height, alt, zoom = 2, magnifierSize = 150, className = "" }) {
  const [[x, y], setXY] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const imgRef = useRef(null);

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={e => {
        const { top, left } = e.currentTarget.getBoundingClientRect();
        const x = e.pageX - left - window.scrollX;
        const y = e.pageY - top - window.scrollY;
        setXY([x, y]);
      }}
    >
      <Image
        ref={imgRef}
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="object-contain size-full select-none pointer-events-none rounded-lg"
        draggable={false}
      />
      {showMagnifier && (
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            top: `${y - magnifierSize / 2}px`,
            left: `${x - magnifierSize / 2}px`,
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            borderRadius: "50%",
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.15)",
            border: "2px solid #3b82f6",
            backgroundColor: "white",
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${width * zoom}px ${height * zoom}px`,
            backgroundPositionX: `-${x * zoom - magnifierSize / 2}px`,
            backgroundPositionY: `-${y * zoom - magnifierSize / 2}px`,
            zIndex: 10,
            transition: "box-shadow 0.2s",
            cursor: "none",
          }}
        />
      )}
    </div>
  );
}
