import { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt to auto-play on mount
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(error => {
          // Auto-play was prevented by browser
          console.log("Auto-play prevented. User interaction required.");
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio 
        ref={audioRef} 
        src="/theme-song.mp3.mp3" 
        loop 
      />
      
      {!hasInteracted && !isPlaying && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-slate-800 whitespace-nowrap flex items-center gap-2"
        >
          <span>Play Theme Song</span>
          <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
        </motion.div>
      )}

      <button 
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${isPlaying ? 'bg-primary text-white' : 'bg-white text-slate-800 hover:bg-slate-50'}`}
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </div>
  );
}
