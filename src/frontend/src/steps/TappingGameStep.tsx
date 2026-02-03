import { useEffect, useState } from 'react';
import { Heart, Timer, Trophy, Frown } from 'lucide-react';
import HeartButton from '../components/HeartButton';
import FloatingTapFeedback from '../components/FloatingTapFeedback';
import PetalOverlay from '../components/PetalOverlay';
import useTappingGame from '../hooks/useTappingGame';

interface TappingGameStepProps {
  onComplete: () => void;
}

interface TapEffect {
  id: number;
  x: number;
  y: number;
}

export default function TappingGameStep({ onComplete }: TappingGameStepProps) {
  const { taps, timeLeft, isActive, isSuccess, isFailed, startGame, resetGame } =
    useTappingGame();
  const [tapEffects, setTapEffects] = useState<TapEffect[]>([]);
  const [feedbackMessages, setFeedbackMessages] = useState<
    Array<{ id: number; x: number; y: number; message: string }>
  >([]);

  useEffect(() => {
    if (!isActive && !isSuccess && !isFailed) {
      startGame();
    }
  }, [isActive, isSuccess, isFailed, startGame]);

  const handleTap = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isActive) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Add tap effect
    const effectId = Date.now() + Math.random();
    setTapEffects((prev) => [...prev, { id: effectId, x, y }]);
    setTimeout(() => {
      setTapEffects((prev) => prev.filter((effect) => effect.id !== effectId));
    }, 600);

    // Add feedback message
    const messages = [
      'i ❤️ u',
      'you can do it',
      'you almost there',
      'you did well',
      'proud of you',
      'keep going! 💪',
      'amazing! ✨',
      'so close! 🎯',
      'you got this! 🌟',
      'love you! 💕',
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageId = Date.now() + Math.random();
    setFeedbackMessages((prev) => [...prev, { id: messageId, x, y, message: randomMessage }]);
    setTimeout(() => {
      setFeedbackMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    }, 1500);
  };

  const progress = (taps / 50) * 100;

  if (isSuccess || isFailed) {
    return (
      <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
        <div className="w-full max-w-2xl bg-white/80 dark:bg-rose-900/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border-2 border-rose-200 dark:border-rose-700 text-center space-y-6">
          {isSuccess ? (
            <>
              <Trophy className="w-24 h-24 mx-auto text-yellow-500 animate-bounce" />
              <h2 className="text-3xl md:text-4xl font-bold text-rose-700 dark:text-rose-300">
                You Did It! 🎉
              </h2>
              <p className="text-xl text-rose-600 dark:text-rose-300">
                You got {taps} taps! You're amazing! 💖
              </p>
            </>
          ) : (
            <>
              <Frown className="w-24 h-24 mx-auto text-rose-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-rose-700 dark:text-rose-300">
                So Close! 😢
              </h2>
              <p className="text-xl text-rose-600 dark:text-rose-300">
                You got {taps} taps! But I still love you! 💕
              </p>
            </>
          )}
          <HeartButton onClick={onComplete}>
            <Heart className="w-5 h-5 mr-2 fill-current" />
            Continue
          </HeartButton>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in relative">
      {/* Petal Overlay */}
      {isActive && <PetalOverlay />}

      {/* Stats */}
      <div className="flex gap-6 items-center justify-center">
        <div className="flex items-center gap-2 bg-white/80 dark:bg-rose-900/30 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-rose-200 dark:border-rose-700">
          <Timer className="w-6 h-6 text-rose-600 dark:text-rose-300" />
          <span className="text-2xl font-bold text-rose-700 dark:text-rose-300">
            {timeLeft}s
          </span>
        </div>
        <div className="flex items-center gap-2 bg-white/80 dark:bg-rose-900/30 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-rose-200 dark:border-rose-700">
          <Heart className="w-6 h-6 text-rose-600 dark:text-rose-300 fill-current" />
          <span className="text-2xl font-bold text-rose-700 dark:text-rose-300">
            {taps}/50
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl px-4">
        <div className="w-full h-4 bg-rose-100 dark:bg-rose-900 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Tapping Area */}
      <div
        className="relative w-full max-w-2xl aspect-square bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50 rounded-3xl shadow-2xl border-4 border-rose-300 dark:border-rose-600 cursor-pointer overflow-hidden touch-none select-none"
        onPointerDown={handleTap}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-4">
            <Heart className="w-32 h-32 mx-auto text-rose-400 dark:text-rose-500 fill-current opacity-20" />
            <p className="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-300">
              Tap Here!
            </p>
          </div>
        </div>

        {/* Tap Effects */}
        {tapEffects.map((effect) => (
          <div
            key={effect.id}
            className="absolute pointer-events-none animate-tap-effect"
            style={{ left: effect.x, top: effect.y }}
          >
            <Heart className="w-8 h-8 text-rose-500 fill-current -translate-x-1/2 -translate-y-1/2" />
          </div>
        ))}

        {/* Floating Feedback Messages */}
        {feedbackMessages.map((msg) => (
          <FloatingTapFeedback
            key={msg.id}
            x={msg.x}
            y={msg.y}
            message={msg.message}
          />
        ))}
      </div>
    </div>
  );
}
