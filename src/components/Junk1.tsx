import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-watercolor.jpg";
import ganeshMohar from "@/assets/ganesh ji.png";

const HeroSection = () => {
  const scrollToCountdown = () => {
    document.getElementById("countdown")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wedding background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-lg min-h-screen flex flex-col items-center text-primary pt-10 md:pt-16">        {/* Ganesh */}
        {/* Ganesh Mohar */}
{/* Ganesh Mohar */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="flex justify-center mb-6 mt-2"
>
  <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-[#f5f0e8]
    shadow-[0_16px_40px_rgba(0,0,0,0.22)]
    flex items-center justify-center"
  >
    <img
      src={ganeshMohar}
      alt="Shree Ganesh"
      className="w-28 h-28 md:w-32 md:h-32 object-contain"
    />
  </div>
</motion.div>

{/* Shlok */}
<motion.p
  initial={{ opacity: 0, y: 6 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="font-serif text-base md:text-lg leading-relaxed text-primary text-center mb-14 md:mb-17 px-4"
>
  वक्रतुंड महाकाय सूर्यकोटि समप्रभ ।
  <br />
  निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
</motion.p>

        {/* Manuhar Patrika */}
        {/* <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-3xl tracking-wide text-gold my-6"
        >
          MANUHAR PATRIKA
        </motion.h2> */}

        {/* Invitation line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-sans text-sm mb-6"
        >
          We request the honour of your gracious presence
          <br />
          at the auspicious wedding celebrations of
        </motion.p>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-4"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-gold mb-2">Roshni</h1>
          <p className="text-base md:text-lg">
            Beloved daughter of
            <br />
            Smt. Rekha & Shri Jitendra
          </p>
        </motion.div>


 <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-4"
        >
          <p className="text-base md:text-lg">
            and
            <br />
          </p>
        </motion.div>


        {/* Groom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-6"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-gold mb-2">Neeraj</h1>
          <p className="text-base md:text-lg">
            Cherished son of
            <br />
            Smt. Madhu & Shri Mahesh
          </p>
        </motion.div>

        {/* Blessing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="font-sans text-xs mb-6"
        >
          As two families unite, the couple steps into a
          lifetime of love, harmony and prosperity.
        </motion.p>

        {/* Date & Venue */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="font-serif text-lg"
        >
          29 January 2027
        </motion.p>
        <p className="text-sm">
          Anant Mahal, Mansarovar
          <br />
          Jaipur (Rajasthan)
        </p> */}
      </div>

      {/* Scroll */}
      <button
        onClick={scrollToCountdown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/70"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;