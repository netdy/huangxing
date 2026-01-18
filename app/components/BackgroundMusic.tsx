'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Music, Pause } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt auto-play on mount
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay blocked by browser policy:", err);
          setIsPlaying(false);
        }
      }
    };
    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/tameme.mp3" loop />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg border-2 backdrop-blur-md transition-all duration-300 ${
          isPlaying 
            ? 'bg-primary-dark/80 border-primary-light shadow-primary-dark/50' 
            : 'bg-zinc-800/80 border-zinc-600 shadow-black/50'
        }`}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute"
            >
             <Pause size={24} className="text-white" fill="currentColor" />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute"
            >
              <Music size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Spinning border effect when playing */}
        {isPlaying && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-[-4px] rounded-full border border-dashed border-primary-light/50 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none"
          />
        )}
      </motion.button>
    </div>
  );
}
