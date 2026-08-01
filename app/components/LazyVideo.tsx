"use client";
import { useState } from "react";
import Image from "next/image";

type LazyVideoProps = {
  src: string;
  poster: string;
  title: string;
  width: number;
  height: number;
  priority?: boolean;
  featured?: boolean;
};

const overlayIcon = (
  <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 group-hover:bg-white transition-colors">
      <svg viewBox="0 0 24 24" className="w-6 h-6 ml-1 fill-black">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  </span>
);

const focusRing = (
  <span className="absolute inset-0 ring-4 ring-inset ring-white opacity-0 group-focus-visible:opacity-100 transition-opacity" />
);

export default function LazyVideo({
  src,
  poster,
  title,
  width,
  height,
  priority,
  featured,
}: LazyVideoProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <video
        src={src}
        controls
        autoPlay
        className="w-full h-full"
        style={{ aspectRatio: `${width} / ${height}` }}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
      className="group relative block w-full outline-none"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={poster}
        alt={title}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={
          featured ? "(min-width: 640px) 560px, 100vw" : "(min-width: 640px) 50vw, 100vw"
        }
        className="object-cover"
      />
      {overlayIcon}
      {focusRing}
    </button>
  );
}
