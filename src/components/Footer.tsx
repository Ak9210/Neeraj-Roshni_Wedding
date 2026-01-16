import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container max-w-2xl text-center px-6"
      >
        {/* Divider */}
        <div className="w-20 h-px bg-gold mx-auto mb-8" />

        {/* Message */}
        <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
          With love and gratitude,
          <br />
          we look forward to celebrating this auspicious occasion with you.
        </p>

        {/* Signature */}
        <p className="font-serif text-xl md:text-2xl text-primary">
          — Roshni & Neeraj
        </p>
      </motion.div>

   <p className="mt-20 text-center font-serif text-[11px] text-primary/40 tracking-wide">
  coded by — Akshat
</p>
    </footer>
  );
};

export default Footer;