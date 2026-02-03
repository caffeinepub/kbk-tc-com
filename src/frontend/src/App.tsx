import { useState } from 'react';
import LandingStep from './steps/LandingStep';
import QuizStep from './steps/QuizStep';
import GameIntroStep from './steps/GameIntroStep';
import TappingGameStep from './steps/TappingGameStep';
import FinalMessageStep from './steps/FinalMessageStep';

type Step = 'landing' | 'quiz' | 'gameIntro' | 'game' | 'finalMessage';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('landing');

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-950 dark:via-pink-950 dark:to-red-950 flex flex-col">
      {/* Brand Header */}
      <header className="w-full py-4 px-6 flex justify-center">
        <div className="text-rose-600 dark:text-rose-400 font-semibold text-lg tracking-wide">
          KBK&TC.com
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          {currentStep === 'landing' && (
            <LandingStep onNext={() => setCurrentStep('quiz')} />
          )}
          {currentStep === 'quiz' && (
            <QuizStep onComplete={() => setCurrentStep('gameIntro')} />
          )}
          {currentStep === 'gameIntro' && (
            <GameIntroStep onStartGame={() => setCurrentStep('game')} />
          )}
          {currentStep === 'game' && (
            <TappingGameStep onComplete={() => setCurrentStep('finalMessage')} />
          )}
          {currentStep === 'finalMessage' && <FinalMessageStep />}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-6 flex justify-center">
        <p className="text-rose-600 dark:text-rose-400 text-sm">
          created by Luna
        </p>
      </footer>
    </div>
  );
}

export default App;
