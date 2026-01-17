import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroVideo from "@/assets/home_page.mp4";
import ganeshMohar from "@/assets/ganesh ji.png";

const HeroSection = () => {
  const scrollToCountdown = () => {
    document
      .getElementById("countdown")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* VIDEO BACKGROUND */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          ease: "linear",
        }}
      >
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* CONTENT */}
{/* TOP GANESH MOHAR + SHLOK */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="absolute top-6 -translate-x-1/2 z-20 flex flex-col items-center text-center"
>
  {/* Mohar */}
  <div className="w-20 h-20 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center mb-3">
    <img
      src={ganeshMohar}
      alt="Shree Ganesh"
      className="w-14 h-14 object-contain opacity-90"
    />
  </div>

  {/* Shlok */}
  <p className="font-serif text-[13px] leading-relaxed text-primary/90">
    वक्रतुंड महाकाय सूर्यकोटि समप्रभ ।
    <br />
    निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
  </p>
</motion.div>

      
      <div className="relative z-10 text-center px-6">
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-white mb-6"
        >
          We are getting married
        </motion.p> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6"
        >
          <span className="block">Roshni</span>
          <span className="text-3xl md:text-4xl lg:text-5xl italic font-normal opacity-80">
            Weds
          </span>
          <span className="block">Neeraj</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-20 h-px bg-white/70 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-serif text-xl md:text-2xl text-white/90"
        >
          29 January 2026
        </motion.p>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={scrollToCountdown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors z-10"
        aria-label="Scroll to see more"
      >
        <span className="font-sans text-xs uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default HeroSection;