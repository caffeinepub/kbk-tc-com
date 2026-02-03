import { Button } from '@/components/ui/button';

interface YesNoButtonsProps {
  onAnswer: (answer: 'yes' | 'no') => void;
}

export default function YesNoButtons({ onAnswer }: YesNoButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        onClick={() => onAnswer('yes')}
        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-green-300 dark:border-green-700"
      >
        Yes 💚
      </Button>
      <Button
        onClick={() => onAnswer('no')}
        className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-semibold text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-rose-300 dark:border-rose-700"
      >
        No 💔
      </Button>
    </div>
  );
}
