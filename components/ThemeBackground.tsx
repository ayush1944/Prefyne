"use client";

import { useTheme } from "next-themes";
import { useRef, useEffect, useState } from "react";

export default function ThemeBackground() {
    const [randomNumber, setRandomNumber] = useState<number | null>(null);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 3));
  }, []);

  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  const videosList = ["https://res.cloudinary.com/dke3lb44y/video/upload/v1770755410/6_p2cdos.mp4", "https://res.cloudinary.com/dke3lb44y/video/upload/v1770755405/2_ogmb3d.mp4", "https://res.cloudinary.com/dke3lb44y/video/upload/v1770755389/1_gr0ypu.mp4"];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  if (randomNumber === null) return null; // or a loader

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
        <source src={videosList[randomNumber]} type="video/mp4" />
      </video>

      <div className="fixed inset-0 -z-10 bg-black/60 backdrop-blur-[2px]" />
    </>
  );
}
