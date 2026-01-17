import { motion } from "framer-motion";
import {
  Instagram,
  Sun,
  Users,
  Car,
} from "lucide-react";

const items = [
  {
    icon: Instagram,
    title: "HASHTAG",
    text: "While posting photos on social media, please use the hashtag #NeerajFoundHisRoshni",
  },
  {
    icon: Sun,
    title: "WEATHER",
    text: "It will be mostly sunny with temperatures reaching up to 14°C at the venue.",
  },
  {
    icon: Users,
    title: "STAFF",
    text: "We recommend the Madhuvan Resort for staff members.",
  },
  {
    icon: Car,
    title: "PARKING",
    text: "Valet parking for all guests will be available at the venue.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ThingsToKnow = () => {
  return (
    <section className="relative min-h-screen bg-background px-6 py-20 text-center">
      
      {/* TITLE */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif text-4xl tracking-widest text-black/70 mb-6"
      >
        THINGS TO KNOW
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="font-serif text-sm text-black/60 leading-relaxed max-w-sm mx-auto mb-16"
      >
        To help you feel at ease and enjoy every moment of the celebrations,
        we’ve gathered a few thoughtful details for you to know before the big day.
      </motion.p>

      {/* ITEMS */}
      <div className="space-y-20">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <Icon className="w-14 h-14 text-black/60 mb-4" />

              <h3 className="font-serif text-2xl tracking-widest text-black/70 mb-3">
                {item.title}
              </h3>

              <p className="font-serif text-sm text-black/60 leading-relaxed max-w-xs">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ThingsToKnow;