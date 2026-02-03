import { Heart } from 'lucide-react';
import HeartButton from '../components/HeartButton';

interface LandingStepProps {
  onNext: () => void;
}

export default function LandingStep({ onNext }: LandingStepProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-rose-700 dark:text-rose-300 px-4 leading-tight">
        For my Love of my life Khambor B Kharjana
      </h1>

      {/* Couple Image */}
      <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-200 dark:border-rose-800">
        <img
          src="/assets/IMG-20250222-WA0001.jpg"
          alt="Our beautiful moment together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent pointer-events-none" />
      </div>

      {/* Message */}
      <p className="text-lg md:text-xl text-center text-rose-800 dark:text-rose-200 max-w-2xl px-6 leading-relaxed">
        I love you and will always Love you please click this heart button so that you can answer some questions
      </p>

      {/* Heart Button */}
      <HeartButton onClick={onNext}>
        <Heart className="w-6 h-6 mr-2 fill-current" />
        Start Questions
      </HeartButton>
    </div>
  );
}
