import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import envelopeVideo from "../assets/envelope-opening.mp4";

interface EnvelopeLandingProps {
  onOpen: () => void;
}

const EnvelopeLanding = ({ onOpen }: EnvelopeLandingProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleOpen = () => {
    if (playing) return;
    setPlaying(true);
    videoRef.current?.play();

    // Exit after video plays
    setTimeout(() => {
      onOpen();
    }, 2400); // adjust if your video is longer
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* VIDEO */}
        <video
          ref={videoRef}
          src={envelopeVideo}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* TAP LAYER */}
        {!playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 text-center px-6"
          >
           <button
  onClick={handleOpen}
  className="
    w-36 h-36
    rounded-full
    bg-[#e6dccf]
    flex items-center justify-center
    relative
    shadow-[0_10px_22px_rgba(0,0,0,0.22)]
    -translate-x-5
    active:scale-95
  "
>
  {/* Inner wax ring */}
  <span className="absolute inset-[14px] rounded-full border border-[#d2c6b6]" />

  {/* Diagonal embossed initials */}
  <span
    className="font-['Great_Vibes'] text-[40px] text-[#b8aa98] absolute"
    style={{
      transform: "rotate(-8deg) translateY(2px)",
      textShadow: `
        0 1px 1px rgba(255,255,255,0.85),
        0 -1px 1px rgba(0,0,0,0.35)
      `,
    }}
  >
    R&nbsp;&amp;&nbsp;N
  </span>
</button>
          </motion.div>
        )}

        {/* FADE OUT */}
        {playing && (
          <motion.div
            className="absolute inset-0 bg-black z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          />
          
        )}
      </motion.div>
    

    </AnimatePresence>
  );
};

export default EnvelopeLanding;