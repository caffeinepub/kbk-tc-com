interface FloatingTapFeedbackProps {
  x: number;
  y: number;
  message: string;
}

export default function FloatingTapFeedback({ x, y, message }: FloatingTapFeedbackProps) {
  return (
    <div
      className="absolute pointer-events-none animate-float-up z-10"
      style={{ left: x, top: y }}
    >
      <span className="text-lg md:text-xl font-bold text-rose-600 dark:text-rose-300 drop-shadow-lg -translate-x-1/2 -translate-y-1/2 block whitespace-nowrap">
        {message}
      </span>
    </div>
  );
}
