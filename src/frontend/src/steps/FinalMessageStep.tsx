import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import HeartButton from '../components/HeartButton';

export default function FinalMessageStep() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
      {!showMessage ? (
        <div className="text-center space-y-6">
          <div className="relative">
            <Sparkles className="w-16 h-16 mx-auto text-rose-500 animate-pulse absolute -top-8 -left-8" />
            <Heart className="w-32 h-32 mx-auto text-rose-500 fill-current animate-heartbeat" />
            <Sparkles className="w-16 h-16 mx-auto text-rose-500 animate-pulse absolute -bottom-8 -right-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 dark:text-rose-300">
            One More Thing...
          </h2>
          <HeartButton onClick={() => setShowMessage(true)}>
            <Heart className="w-5 h-5 mr-2 fill-current" />
            Open My Heart
          </HeartButton>
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-white/90 dark:bg-rose-900/40 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-rose-200 dark:border-rose-700 space-y-6 animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="text-center space-y-6">
            <Heart className="w-16 h-16 mx-auto text-rose-500 fill-current animate-heartbeat" />
            
            <h1 className="text-3xl md:text-4xl font-bold text-rose-700 dark:text-rose-300">
              Happy 21❤️ Month Anniversary, my love 🤍
            </h1>

            <div className="space-y-4 text-left text-base md:text-lg text-rose-800 dark:text-rose-200 leading-relaxed">
              <p>
                Twenty one months with you feels like a beautiful journey written by God
                Himself. Every smile we've shared, every challenge we've faced, and every
                prayer whispered together has only strengthened my love for you. You are truly
                one of God's sweetest blessings in my life.
              </p>

              <p>
                I thank God every day for your heart, your patience, your love, and the way you
                make me feel safe and cherished. May the Lord continue to guide our steps,
                protect our bond, and grow our love deeper in faith, understanding, and joy.I
                pray that God fills your life with peace, success, good health, and endless
                happiness. No matter where life takes us, I'm grateful to walk this path with
                you, trusting God and choosing you always.I love you more than words can
                express. Here's to us, to love rooted in faith, and to many more months and
                years together 🤍🙏✨
              </p>
            </div>

            <div className="pt-6 flex justify-center">
              <div className="flex gap-2">
                <Heart className="w-6 h-6 text-rose-500 fill-current animate-heartbeat" />
                <Heart className="w-6 h-6 text-rose-500 fill-current animate-heartbeat animation-delay-200" />
                <Heart className="w-6 h-6 text-rose-500 fill-current animate-heartbeat animation-delay-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
