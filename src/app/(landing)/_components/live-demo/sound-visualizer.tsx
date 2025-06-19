'use client';

import { useEffect, useRef } from 'react';
import AudioMotionAnalyzer from 'audiomotion-analyzer';

export default function SoundVisualizer({
  mediaStream,
}: {
  mediaStream: MediaStream | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const analyzerRef = useRef<AudioMotionAnalyzer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize analyzer once
    if (!analyzerRef.current) {
      analyzerRef.current = new AudioMotionAnalyzer(containerRef.current, {
        mode: 3, // smoother bars with peak indicators
        barSpace: 0.5, // more space between bars for clarity
        gradient: 'prism',
        showScaleX: false,
        showScaleY: false,
        useCanvas: true,
        overlay: true,
        bgAlpha: 0,
        fftSize: 1024, // higher FFT size for better frequency resolution
        // height: containerRef.current.clientHeight,
        // width: containerRef.current.clientWidth,
        // minDecibels: -100, // very sensitive to quiet sounds
        // maxDecibels: -5, // max amplitude level
      });
    }

    const audioMotion = analyzerRef.current;

    if (mediaStream) {
      // Disconnect previous input if any
      audioMotion.disconnectInput();

      const audioCtx = audioMotion.audioCtx;
      const micSource = audioCtx.createMediaStreamSource(mediaStream);
      audioMotion.connectInput(micSource);
      audioMotion.volume = 0; // mute speakers
    } else {
      // If no stream, disconnect input
      audioMotion.disconnectInput();
    }

    return () => {
      if (analyzerRef.current) {
        analyzerRef.current.disconnectInput();
      }
    };
  }, [mediaStream]);

  return <div ref={containerRef} className="size-full bg-transparent" />;
}
