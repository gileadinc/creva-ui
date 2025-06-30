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
        mode: 10,
        bgAlpha: 0.7,
        fillAlpha: 0.6,
        gradient: 'rainbow',
        lineWidth: 2,
        lumiBars: true,
        maxFreq: 16000,
        radial: false,
        reflexAlpha: 1,
        reflexBright: 1,
        reflexRatio: 0.5,
        showBgColor: false,
        showPeaks: false,
        overlay: true,
        useCanvas: true,
        showScaleX: false,
        showScaleY: false,
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
