import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Music, 
  Music2, 
  Sparkles, 
  Cat, 
  Quote, 
  MailOpen, 
  X
} from "lucide-react";
import { useState, useRef } from "react";
import HeartRain from "./components/HeartRain";

const BorderDecor = () => (
  <div className="border-decor absolute inset-4 pointer-events-none">
    <div className="absolute top-0 left-0 w-10 h-10 border-2 border-natural-muted border-r-0 border-b-0" />
    <div className="absolute top-0 right-0 w-10 h-10 border-2 border-natural-muted border-l-0 border-b-0" />
    <div className="absolute bottom-0 left-0 w-10 h-10 border-2 border-natural-muted border-r-0 border-t-0" />
    <div className="absolute bottom-0 right-0 w-10 h-10 border-2 border-natural-muted border-l-0 border-t-0" />
  </div>
);

const Motifs = () => (
  <>
    <div className="absolute top-8 left-8 text-2xl opacity-15 select-none hidden md:block">🌸</div>
    <div className="absolute top-8 right-8 text-2xl opacity-15 select-none hidden md:block">✨</div>
    <div className="absolute bottom-8 left-8 text-2xl opacity-15 select-none hidden md:block">🕊️</div>
    <div className="absolute bottom-8 right-8 text-2xl opacity-15 select-none hidden md:block">🌿</div>
  </>
);

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const sections = [
    {
      preTitle: "A Message For",
      icon: <Sparkles className="w-10 h-10 text-natural-muted/60" />,
      title: "Dearest Zulfiya",
      subtitle: "You are the most beautiful part of my life ❤",
      description: "You make my world brighter, softer, and infinitely more meaningful.",
    },
    {
      preTitle: "Pure Magic",
      icon: <Cat className="w-10 h-10 text-natural-muted/60" />,
      title: "Every Moment",
      subtitle: "Every moment with you is magic ✨",
      description: "Like a soft kitten's purr, you bring comfort to my soul. You are my peace.",
    },
    {
      preTitle: "Happiness",
      icon: <Heart className="w-10 h-10 text-natural-muted/60 fill-natural-accent/20" />,
      title: "My Everything",
      subtitle: "You are my warmth and my joy 🤍",
      description: "In your eyes, I found home. In your heart, I found love that lasts forever.",
    },
  ];

  return (
    <div className="min-h-screen relative bg-natural-bg text-natural-text selection:bg-natural-accent/20 overflow-hidden font-sans">
      <HeartRain />

      {/* Music Toggle */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/60 backdrop-blur-md border border-natural-muted/20 shadow-sm hover:scale-110 active:scale-95 transition-all text-natural-accent"
      >
        {isPlaying ? <Music className="animate-spin-slow" /> : <Music2 />}
      </button>

      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      <main className="relative z-10 snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
        {sections.map((section, index) => (
          <section
            key={index}
            className="h-screen flex items-center justify-center p-4 md:p-8 snap-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[940px] aspect-[4/3] md:min-h-[680px] bg-white border border-natural-muted/20 shadow-2xl shadow-natural-text/5 relative p-12 md:p-16 flex flex-col items-center justify-center text-center overflow-hidden"
            >
              <BorderDecor />
              <Motifs />

              <div className="space-y-8 relative z-10">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] font-semibold text-natural-muted">
                    {section.preTitle}
                  </span>
                  <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight italic text-natural-text">
                    {section.title}
                  </h1>
                </div>

                <div className="flex justify-center flex-col items-center gap-4">
                  {section.icon}
                  <p className="font-serif text-2xl md:text-3xl text-natural-text/80 leading-relaxed max-w-lg">
                    {section.subtitle}
                  </p>
                </div>

                <div className="w-16 h-px bg-natural-muted/20 mx-auto" />

                <p className="text-sm md:text-base text-natural-text/60 font-sans tracking-wide leading-relaxed max-w-md mx-auto">
                  {section.description}
                </p>
              </div>
            </motion.div>
          </section>
        ))}

        {/* Secret Button Section */}
        <section className="h-screen flex items-center justify-center p-4 md:p-8 snap-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-[940px] aspect-[4/3] md:min-h-[680px] bg-white border border-natural-muted/20 shadow-2xl shadow-natural-text/5 relative p-12 flex flex-col items-center justify-center text-center"
          >
            <BorderDecor />
            <Motifs />

            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] font-semibold text-natural-muted">
                  Final Note
                </span>
                <h2 className="font-serif text-4xl md:text-5xl italic">Something Special</h2>
              </div>

              <div className="relative group">
                <button
                  onClick={() => setShowSecret(true)}
                  className="relative px-12 py-5 bg-natural-accent text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 transition-all flex items-center gap-4 overflow-hidden"
                >
                  <MailOpen className="w-5 h-5" />
                  <span>Open Your Message</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20 translate-x-[-100%]"
                    whileHover={{ translateX: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </button>
              </div>

              <div className="flex justify-center items-center gap-8 pt-8">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-natural-muted/60">Happiness</span>
                  <div className="w-1 h-1 rounded-full bg-natural-muted/30" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-natural-muted/60">Peace</span>
                  <div className="w-1 h-1 rounded-full bg-natural-muted/30" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-natural-muted/60">Warmth</span>
                  <div className="w-1 h-1 rounded-full bg-natural-muted/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Secret Modal */}
      <AnimatePresence>
        {showSecret && (
          <div className="fixed inset-0 z-[100] grid place-items-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSecret(false)}
              className="absolute inset-0 bg-natural-text/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white border border-natural-muted/30 rounded-[2rem] p-8 md:p-14 text-center space-y-8 shadow-2xl relative overflow-hidden"
            >
              <BorderDecor />
              
              <button
                onClick={() => setShowSecret(false)}
                className="absolute top-6 right-6 p-2 text-natural-muted hover:text-natural-accent transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-8 relative z-10 pt-4">
                <Quote className="w-10 h-10 text-natural-accent/20 mx-auto" />
                
                <div className="space-y-6">
                  <p className="font-serif text-2xl md:text-3xl text-natural-text leading-relaxed italic">
                    "Zulfiya, you mean more to me than words can ever express."
                  </p>
                  
                  <div className="w-12 h-px bg-natural-muted/20 mx-auto" />
                  
                  <p className="text-base text-natural-text/70 leading-relaxed font-sans tracking-wide">
                    Every moment I think of you, my heart feels full. 
                    You are my happiness, my peace, and my love. 
                  </p>
                  
                  <div className="pt-8 flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-natural-muted">Forever yours</span>
                    <Heart className="w-5 h-5 text-natural-accent fill-natural-accent" />
                  </div>
                </div>

                <button
                  onClick={() => setShowSecret(false)}
                  className="w-full py-4 rounded-full border border-natural-accent text-natural-accent font-semibold hover:bg-natural-accent hover:text-white transition-all shadow-sm"
                >
                  Close with love
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 text-natural-muted/40 text-[10px] font-bold tracking-[0.4em] uppercase whitespace-nowrap">
        A Digital Love Note for Zulfiya
      </footer>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .aspect-\\[4\\/3\\] {
          aspect-ratio: 4 / 3;
        }
      `}</style>
    </div>
  );
}

