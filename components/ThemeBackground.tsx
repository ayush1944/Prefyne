"use client";

import { useTheme } from "next-themes";
import { useRef, useEffect } from "react";

export default function ThemeBackground() {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  // Light background
  if (theme !== "dark") {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-50 to-slate-100" />
    );
  }

  // Dark background
  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="fixed inset-0 -z-10 h-full w-full object-cover"
      >
        <source src="/6.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 -z-10 bg-black/60 backdrop-blur-[2px]" />
    </>
  );
}
