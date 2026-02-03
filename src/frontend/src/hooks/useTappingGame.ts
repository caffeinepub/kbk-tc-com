import { useState, useEffect, useCallback } from 'react';

const GAME_DURATION = 15;
const TARGET_TAPS = 50;

export default function useTappingGame() {
  const [taps, setTaps] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [isActive, setIsActive] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const startGame = useCallback(() => {
    setTaps(0);
    setTimeLeft(GAME_DURATION);
    setIsActive(true);
    setIsSuccess(false);
    setIsFailed(false);
  }, []);

  const resetGame = useCallback(() => {
    setTaps(0);
    setTimeLeft(GAME_DURATION);
    setIsActive(false);
    setIsSuccess(false);
    setIsFailed(false);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsActive(false);
          setIsFailed(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive]);

  useEffect(() => {
    if (taps >= TARGET_TAPS && isActive) {
      setIsActive(false);
      setIsSuccess(true);
    }
  }, [taps, isActive]);

  useEffect(() => {
    if (!isActive) return;

    const handlePointerDown = () => {
      setTaps((prev) => prev + 1);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isActive]);

  return {
    taps,
    timeLeft,
    isActive,
    isSuccess,
    isFailed,
    startGame,
    resetGame,
  };
}
