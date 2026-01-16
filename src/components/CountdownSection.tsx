import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ FIXED: Wedding date set to 29 January (IST)
  const weddingDate = new Date("2026-01-29T23:53:00+05:30");

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ✅ FIXED: English labels
  const countdownItems = [
  { value: timeLeft.days, label: t.days },
  { value: timeLeft.hours, label: t.hours },
  { value: timeLeft.minutes, label: t.minutes },
  { value: timeLeft.seconds, label: t.seconds },
];

  return (
    <section id="countdown" ref={ref} className="py-24 md:py-32 bg-primary">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* ✅ FIXED: English text */}
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
  {t.countdownTitle}
</h2>

<p className="font-sans text-primary-foreground/70 text-sm md:text-base font-light">
  {t.countdownSubtitle}
</p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-3 md:gap-6"
        >
          {countdownItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="countdown-box"
            >
              <span className="countdown-number">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="countdown-label">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;