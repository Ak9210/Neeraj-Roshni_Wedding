import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";
import bgMusic from "@/assets/background_music.mp3";

const MusicButton = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  // 🔥 AUTO PLAY MUSIC ON MOUNT
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.muted = false;

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // autoplay might still fail in rare cases, ignore safely
        });
      }
    }
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  return (
    <>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        src={bgMusic}
        loop
        preload="auto"
      />

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        onClick={toggleMute}
        className="music-btn"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <VolumeX className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Music className="w-5 h-5" />

            {/* Animated rings when music is ON */}
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full border border-primary-foreground/30"
            />
          </motion.div>
        )}
      </motion.button>
    </>
  );
};

export default MusicButton;