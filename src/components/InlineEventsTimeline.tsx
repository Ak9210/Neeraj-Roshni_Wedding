import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";
import mehndiImg from "../assets/haldiii.jpg";
import HaldiImg from "../assets/haldi_image.jpeg";
import ShaadiImg from "../assets/shaadi.jpg";
import SangeetImg from "../assets/Sangeet.jpeg"
import KirtanImg from "../assets/kirtan.jpeg"
import MayraImg from "../assets/mayra.jpg"
// import kirtanImg from "../assets/events/kirtan.jpg";
// import haldiImg from "../assets/events/haldi.jpg";
// import sangeetImg from "../assets/events/sangeet.jpg";
// import chaakImg from "../assets/events/chaak.jpg";
// import weddingImg from "../assets/events/wedding.jpg";


type EventItem = {
  id: string;
  date: string;
  title: string;
  time: string;
  venue: string;
  description: string;
  image: string;
};

export default function InlineEventsTimeline() {
  const { language } = useLanguage();
  const t = translations[language];

  const events: EventItem[] = [
  {
    id: "mehndi",
    date: t.day27,
    title: t.mehndi,
    time: "1:00 PM onwards",
    venue: "Madhuvan Resort",
    image: mehndiImg,
    description:
      language === "hi"
        ? "परंपरागत मेहंदी समारोह परिवार और मित्रों के साथ।"
        : "Traditional mehndi ceremony with family and friends.",
        
  },
  {
    id: "kirtan",
    date: t.day27,
    title: t.kirtan,
    time: "6:00 PM onwards",
    venue: "Community Hall",
    image: KirtanImg,
    description:
      language === "hi"
        ? "भजन और कीर्तन के साथ आध्यात्मिक संध्या।"
        : "An evening of devotional songs and kirtan.",
  },
  {
    id: "haldi",
    date: t.day28,
    title: t.haldi,
    time: "11:00 AM",
    venue: "Pool Area",
    image: HaldiImg,
    description:
      language === "hi"
        ? "हल्दी की रस्म खुशियों और आशीर्वाद के साथ।"
        : "Haldi ceremony filled with joy and blessings.",
  },
  {
    id: "sangeet",
    date: t.day28,
    title: t.sangeet,
    time: "7:00 PM onwards",
    venue: "Banquet Hall",
    image: SangeetImg,
    description:
      language === "hi"
        ? "संगीत, नृत्य और पारिवारिक उत्सव।"
        : "Music, dance, and celebration with loved ones.",
  },
  {
    id: "chaak",
    date: t.day29,
    title: t.chaak,
    time: "9:00 AM",
    venue: "Bride’s Residence",
    image: MayraImg,
    description:
      language === "hi"
        ? "चाक भात – पारिवारिक परंपरा।"
        : "Chaak Bhat – a sacred family ritual.",
  },
  {
    id: "wedding",
    date: t.day29,
    title: t.wedding,
    time: "7:00 PM",
    venue: "Wedding Venue",
    image: ShaadiImg,
    description:
      language === "hi"
        ? "विवाह समारोह – दो आत्माओं का पवित्र मिलन।"
        : "Wedding ceremony – the sacred union of two souls.",
  },
];

  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="bg-[#f6f3ef] py-24 px-6">
      <div className="max-w-xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-[#4a433c]">
            {t.eventsTitle}
          </h2>
          <p className="mt-4 text-sm text-[#7a7268]">
            {t.eventsSubtitle}
          </p>
          
        </div>

        {/* Timeline */}
        <p className="-mt-4 mb-6 text-center text-sm text-[#7a7268]">
            {t.eventsTap}
          </p>
        <div className="space-y-6">
          {events.map((event) => {
            const isOpen = activeId === event.id;

            return (
              <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Header */}
                <button
                  onClick={() => setActiveId(isOpen ? null : event.id)}
                  className="w-full text-left p-5 flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#8b8176]">
                      {event.date}
                    </p>
                    <h3 className="mt-1 font-serif text-lg text-[#4a433c]">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[#6d645a]">
                      {event.time}
                    </p>
                  </div>

                  <span className="text-[#a89f94] text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {/* Image placeholder */}
                      <div className="w-full h-48 overflow-hidden">
  <img
    src={event.image}
    alt={event.title}
    className="w-full h-full object-cover"
  />
</div>

                      {/* Details */}
                      <div className="p-6 space-y-4 text-sm text-[#6d645a]">
  {/* Time */}
  <div className="flex items-start gap-3">
    <span className="text-[#a89f94]">🕒</span>
    <span>{event.time}</span>
  </div>

  {/* Venue */}
  <div className="flex items-start gap-3">
    <span className="text-[#a89f94]">📍</span>
    <span>{event.venue}</span>
  </div>

  {/* Description */}
  <p className="pt-2 leading-relaxed">
    {event.description}
  </p>
</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}