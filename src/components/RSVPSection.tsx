import { motion } from "framer-motion";

const RSVPSection = () => {
  return (
    <section className="bg-[#F6DADA] px-6 py-24 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          w-full max-w-[360px]
          text-center
          bg-white/70
          backdrop-blur-sm
          rounded-3xl
          px-6 py-16
          shadow-lg
        "
      >
        {/* TITLE */}
        <h2 className="font-serif text-4xl tracking-wide text-[#8B5A2B] mb-6">
          RSVP
        </h2>

        {/* SUBTITLE */}
        <p className="font-sans text-sm text-muted-foreground mb-12 leading-relaxed">
          Your presence will make our celebration truly special.
          <br />
          Kindly confirm your attendance.
        </p>

        {/* CONTACT PLACEHOLDERS */}
        <div className="space-y-8">

  {/* CONTACT 1 */}
  <a
    href="https://wa.me/918078684058?text=We%20are%20happy%20to%20confirm%20that%20we%20will%20be%20attending%20the%20wedding.%20Looking%20forward%20to%20celebrating%20together!"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <p className="font-serif text-lg text-[#8B5A2B]">
      Ajay Verma
    </p>
    <p className="font-sans text-sm text-muted-foreground underline">
      +91 8078684058
    </p>
  </a>

  {/* CONTACT 2 */}
  <a
    href="https://wa.me/919829245590?text=We%20are%20pleased%20to%20confirm%20our%20presence%20at%20the%20wedding.%20Thank%20you%20for%20the%20invitation!"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <p className="font-serif text-lg text-[#8B5A2B]">
      Akshat Sharma
    </p>
    <p className="font-sans text-sm text-muted-foreground underline">
      +91 9829245590
    </p>
  </a>

  {/* CONTACT 3 */}
  <a
    href="https://wa.me/918094593034?text=We%20will%20be%20attending%20the%20wedding.%20Please%20let%20us%20know%20if%20any%20details%20are%20required%20from%20our%20side."
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <p className="font-serif text-lg text-[#8B5A2B]">
      Jatin Verma
    </p>
    <p className="font-sans text-sm text-muted-foreground underline">
      +91 8094593034
    </p>
  </a>

</div>

        {/* FOOT NOTE */}
        <p className="mt-14 font-serif text-xs text-muted-foreground">
          We look forward to celebrating together.
        </p>
      </motion.div>
    </section>
  );
};

export default RSVPSection;