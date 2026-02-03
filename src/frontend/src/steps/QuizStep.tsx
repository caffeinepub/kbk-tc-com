import { useState } from 'react';
import YesNoButtons from '../components/YesNoButtons';
import HeartButton from '../components/HeartButton';
import { Heart } from 'lucide-react';

interface Question {
  question: string;
  yesResponse: string;
  noResponse: string;
}

const questions: Question[] = [
  {
    question: 'do you love me',
    yesResponse: "that's my man 💖",
    noResponse: ' no ?? you are stuck with me the rest of my life ❤️ accept it ',
  },
  {
    question: 'Will you still love me if I was a worm?',
    yesResponse: "you know I'll never get bored of asking this question",
    noResponse: "it's doesn't matter im still in love with you ",
  },
  {
    question: 'Do you think about me when we are apart?',
    yesResponse: 'Aww, you make my heart melt 🥰',
    noResponse: "Well, I'm always thinking about you anyway 💕",
  },
  {
    question: 'Would you dance with me in the rain?',
    yesResponse: "That's so romantic! I love you 💃",
    noResponse: "We'll dance in the sunshine then ☀️",
  },
  {
    question: 'Am I the best thing that happened to you?',
    yesResponse: 'You are the sweetest! 😘',
    noResponse: "I'll keep trying to be your best 💪❤️",
  },
  {
    question: 'Will you always hold my hand?',
    yesResponse: 'Forever and always 🤝💕',
    noResponse: "I'll hold your heart instead 💝",
  },
  {
    question: 'Do you believe we are soulmates?',
    yesResponse: 'Yes! God brought us together 🙏✨',
    noResponse: "I believe it enough for both of us 💫",
  },
];

interface QuizStepProps {
  onComplete: () => void;
}

export default function QuizStep({ onComplete }: QuizStepProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [response, setResponse] = useState<string | null>(null);
  const [showResponse, setShowResponse] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswer = (answer: 'yes' | 'no') => {
    const responseText =
      answer === 'yes' ? currentQuestion.yesResponse : currentQuestion.noResponse;
    setResponse(responseText);
    setShowResponse(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setResponse(null);
      setShowResponse(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
      <div className="w-full max-w-2xl bg-white/80 dark:bg-rose-900/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border-2 border-rose-200 dark:border-rose-700">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-rose-600 dark:text-rose-300 font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm text-rose-600 dark:text-rose-300 font-medium">
              {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full h-2 bg-rose-100 dark:bg-rose-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-rose-400 to-red-500 transition-all duration-500 ease-out"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-rose-800 dark:text-rose-200 mb-8 min-h-[4rem] flex items-center justify-center">
          {currentQuestion.question}
        </h2>

        {/* Answer Buttons or Response */}
        {!showResponse ? (
          <YesNoButtons onAnswer={handleAnswer} />
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-rose-50 dark:bg-rose-800/30 rounded-2xl p-6 border-2 border-rose-300 dark:border-rose-600">
              <p className="text-xl text-center text-rose-800 dark:text-rose-200 leading-relaxed">
                {response}
              </p>
            </div>
            <HeartButton onClick={handleNext}>
              {isLastQuestion ? (
                <>
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  Continue to Game
                </>
              ) : (
                'Next Question →'
              )}
            </HeartButton>
          </div>
        )}
      </div>
    </div>
  );
}
