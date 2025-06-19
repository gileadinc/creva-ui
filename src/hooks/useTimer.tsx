import { useState, useCallback, useEffect } from 'react';
import { useLocalStorage, useInterval } from 'usehooks-ts';

const TIMER_KEY = 'ai-demo-timer-start';
const ELAPSED_KEY = 'ai-demo-timer-elapsed';
const COUNTDOWN_SECONDS = 90;

export default function useTimer() {
  const [startTime, setStartTime] = useLocalStorage<number | null>(
    TIMER_KEY,
    null,
  );
  const [elapsedBeforePause, setElapsedBeforePause] = useLocalStorage<number>(
    ELAPSED_KEY,
    0,
  );

  const [remaining, setRemaining] = useState<number>(COUNTDOWN_SECONDS);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [timeExceeded, setTimeExceeded] = useState<boolean>(false);

  useEffect(() => {
    if (!startTime && elapsedBeforePause === 0) return;

    const elapsed = startTime
      ? Math.floor((Date.now() - startTime) / 1000) + elapsedBeforePause
      : elapsedBeforePause;

    const newRemaining = COUNTDOWN_SECONDS - elapsed;

    if (newRemaining <= 0) {
      setRemaining(0);
      setTimeExceeded(true);
      setIsRunning(false);
      setIsPaused(false);
    } else {
      setRemaining(newRemaining);
      if (startTime) {
        setIsRunning(true);
      } else {
        setIsPaused(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateRemainingTime = useCallback(() => {
    if (!startTime) return;

    const elapsed =
      Math.floor((Date.now() - startTime) / 1000) + elapsedBeforePause;
    const newRemaining = COUNTDOWN_SECONDS - elapsed;

    if (newRemaining <= 0) {
      setRemaining(0);
      setTimeExceeded(true);
      setIsRunning(false);
      setIsPaused(false);
    } else {
      setRemaining(newRemaining);
    }
  }, [startTime, elapsedBeforePause]);

  useInterval(updateRemainingTime, isRunning && !isPaused ? 1000 : null);

  const startTimer = useCallback(() => {
    setStartTime(Date.now());
    setElapsedBeforePause(0);
    setRemaining(COUNTDOWN_SECONDS);
    setIsRunning(true);
    setIsPaused(false);
    setTimeExceeded(false);
  }, [setStartTime, setElapsedBeforePause]);

  const pauseTimer = useCallback(() => {
    if (!startTime) return;
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    setElapsedBeforePause((prev) => prev + elapsed);
    setStartTime(null);
    setIsPaused(true);
    setIsRunning(false);
  }, [startTime, setElapsedBeforePause, setStartTime]);

  const resumeTimer = useCallback(() => {
    setStartTime(Date.now());
    setIsRunning(true);
    setIsPaused(false);
  }, [setStartTime]);

  const resetTimer = useCallback(() => {
    setStartTime(null);
    setElapsedBeforePause(0);
    setRemaining(COUNTDOWN_SECONDS);
    setIsRunning(false);
    setIsPaused(false);
    setTimeExceeded(false);
  }, [setStartTime, setElapsedBeforePause]);

  // On refresh, keep updating time if paused
  useInterval(
    () => {
      if (!startTime && elapsedBeforePause > 0 && !isRunning && !isPaused) {
        const totalElapsed = elapsedBeforePause;
        const newRemaining = COUNTDOWN_SECONDS - totalElapsed;
        setRemaining(newRemaining > 0 ? newRemaining : 0);
        if (newRemaining <= 0) setTimeExceeded(true);
      }
    },
    !isRunning && !isPaused && elapsedBeforePause > 0 ? 1000 : null,
  );

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const formatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return {
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    remaining,
    formatted,
    isRunning,
    isPaused,
    timeExceeded,
  };
}
