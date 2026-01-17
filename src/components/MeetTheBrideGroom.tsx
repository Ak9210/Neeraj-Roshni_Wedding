import { motion } from "framer-motion";
import meetbg from "@/assets/BrideAndGroom.jpg"
import meet1 from "@/assets/meet1.jpg"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const MeetBrideGroom = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={meet1}
          alt="Meet the Bride and Groom Background"
          className="w-full h-full object-cover"
        />
        {/* soft overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-24 max-w-md text-center -mt-14">

        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif text-4xl tracking-widest text-white mb-10"
        >
          MEET THE
          <br />
          BRIDE AND
          <br />
          GROOM
        </motion.h2>

        {/* PARAGRAPH */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-sm leading-relaxed text-white/90"
        >
          We are both so delighted that you are able to join us in celebrating
          what we hope will be one of the happiest days of our lives.
          <br /><br />
          The affection shown to us by so many people since our roka has been
          incredibly moving, and has touched us both deeply.
          <br /><br />
          We would like to take this opportunity to thank everyone most sincerely
          for their kindness, and we look forward to seeing you at the wedding.
        </motion.p>

      </div>
    </section>
  );
};

export default MeetBrideGroom;