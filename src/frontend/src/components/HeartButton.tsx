import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeartButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function HeartButton({ children, onClick, className }: HeartButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        'bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-rose-300 dark:border-rose-700',
        className
      )}
    >
      {children}
    </Button>
  );
}
