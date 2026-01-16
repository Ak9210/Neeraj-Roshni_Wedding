import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AccommodationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container max-w-3xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Request Your Presence
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Invitation Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="wedding-card text-center px-6 md:px-10 py-10"
        >
          <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed">
            We humbly request the pleasure of your gracious presence
            and heartfelt blessings as we begin our new journey together.
            <br />
            <span className="block mt-4">
              Your presence will add to the joy of this auspicious occasion.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AccommodationSection;