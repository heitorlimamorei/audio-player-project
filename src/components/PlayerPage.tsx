"use client";

import Head from "next/head";
import { useRef, useState } from "react";
import { audioMap } from "../lib/audiMap";
import React from "react";

interface AudioPlayerPageProps {
  musicId: string;
}

export default function PlayerPageComponent({ musicId }: AudioPlayerPageProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const src = typeof musicId === "string" ? audioMap[musicId] : undefined;

  return (
    <>
      <Head>
        <title>{musicId ? `Playing ${musicId}` : "Loading…"}</title>
      </Head>

      <main className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100">

        <h1 className="z-10 text-3xl font-semibold mb-6 text-zinc-600">
          {musicId ? `Now playing: ${musicId}` : "Loading…"}
        </h1>

        {src ? (
          <audio
            ref={audioRef}
            controls
            className="z-10 w-full max-w-md shadow-lg rounded-md"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={src} type="audio/mpeg" />
            Your browser doesn’t support the audio element.
          </audio>
        ) : (
          <p className="z-10 text-gray-500">Unknown track.</p>
        )}
      </main>
    </>
  );
}
