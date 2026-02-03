import { useState } from 'react';
import HeartButton from '../components/HeartButton';
import { Heart, Sparkles } from 'lucide-react';

interface GameIntroStepProps {
  onStartGame: () => void;
}

export default function GameIntroStep({ onStartGame }: GameIntroStepProps) {
  const [showDino, setShowDino] = useState(false);

  const handleGameClick = () => {
    setShowDino(true);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
      {!showDino ? (
        <div className="text-center space-y-6">
          <Sparkles className="w-16 h-16 mx-auto text-rose-500 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 dark:text-rose-300">
            Ready for a Fun Game?
          </h2>
          <HeartButton onClick={handleGameClick}>
            <Heart className="w-5 h-5 mr-2 fill-current" />
            Let's Play!
          </HeartButton>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-white/80 dark:bg-rose-900/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border-2 border-rose-200 dark:border-rose-700 space-y-8 animate-fade-in">
          {/* Luna Dino */}
          <div className="flex justify-center">
            <div className="relative animate-bounce-slow">
              <img
                src="/assets/generated/luna-chibi-dino-heart.dim_1024x1024.png"
                alt="Luna the chibi dino"
                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Luna's Message */}
          <div className="bg-rose-50 dark:bg-rose-800/30 rounded-2xl p-6 border-2 border-rose-300 dark:border-rose-600">
            <p className="text-lg md:text-xl text-center text-rose-800 dark:text-rose-200 leading-relaxed">
              Hi my name is Luna as you know me hehehe so in this game u have tap 50 times
              in 15 second if you can do that you'll get this heart that I'm holding if you
              can't I'll cry
            </p>
          </div>

          {/* Start Button */}
          <HeartButton onClick={onStartGame}>
            <Heart className="w-5 h-5 mr-2 fill-current" />
            Start Game
          </HeartButton>
        </div>
      )}
    </div>
  );
}
