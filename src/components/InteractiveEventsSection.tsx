import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

type EventItem = {
  id: string;
  title: string;
  time: string;
  description: string;
  date: string;
};

export default function InteractiveEventsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const events: EventItem[] = [
    {
      id: "mehndi",
      date: t.day27,
      title: t.mehndi,
      time: "Afternoon",
      description:
        language === "hi"
          ? "परंपरागत मेहंदी समारोह परिवार और दोस्तों के साथ।"
          : "Traditional mehndi ceremony with family and friends.",
    },
    {
      id: "kirtan",
      date: t.day27,
      title: t.kirtan,
      time: "Evening",
      description:
        language === "hi"
          ? "भजन और कीर्तन का आध्यात्मिक आयोजन।"
          : "Spiritual kirtan with devotional songs.",
    },
    {
      id: "haldi",
      date: t.day28,
      title: t.haldi,
      time: "Morning",
      description:
        language === "hi"
          ? "हल्दी की रस्म खुशियों और आशीर्वाद के साथ।"
          : "Haldi ceremony filled with laughter and blessings.",
    },
    {
      id: "sangeet",
      date: t.day28,
      title: t.sangeet,
      time: "Evening",
      description:
        language === "hi"
          ? "संगीत, नृत्य और उत्सव की शाम।"
          : "An evening of music, dance, and celebration.",
    },
    {
      id: "chaak",
      date: t.day29,
      title: t.chaak,
      time: "Morning",
      description:
        language === "hi"
          ? "चाक भात प्रसादी – पारिवारिक परंपरा।"
          : "Chaak Bhat Prasadi – a sacred family ritual.",
    },
    {
      id: "wedding",
      date: t.day29,
      title: t.wedding,
      time: "Evening",
      description:
        language === "hi"
          ? "विवाह समारोह – दो आत्माओं का मिलन।"
          : "Wedding ceremony – the union of two souls.",
    },
  ];

  const [activeId, setActiveId] = useState(events[0].id);

  const activeEvent = events.find((e) => e.id === activeId)!;

  return (
    <section className="bg-[#f6f3ef] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl text-[#4a433c]">
            {t.eventsTitle}
          </h2>
          <p className="mt-4 text-sm text-[#7a7268]">
            {t.eventsSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16">
          {/* LEFT: Timeline */}
          <div className="space-y-8">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveId(event.id)}
                className={`w-full text-left p-5 rounded-lg transition
                ${
                  activeId === event.id
                    ? "bg-white shadow-md"
                    : "bg-transparent hover:bg-white/40"
                }`}
              >
                <p className="text-xs uppercase tracking-widest text-[#8b8176]">
                  {event.date}
                </p>
                <h3 className="mt-2 font-serif text-lg text-[#4a433c]">
                  {event.title}
                </h3>
                <p className="text-sm text-[#6d645a] mt-1">
                  {event.time}
                </p>
              </button>
            ))}
          </div>

          {/* RIGHT: Expanded Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-[#d8d1c7] to-[#bfb6a8] flex items-center justify-center">
                <span className="font-serif text-[#6b6258] text-xl">
                  {activeEvent.title}
                </span>
              </div>

              {/* Details */}
              <div className="p-8">
                <p className="text-xs uppercase tracking-widest text-[#8b8176]">
                  {activeEvent.date} · {activeEvent.time}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-[#4a433c]">
                  {activeEvent.title}
                </h3>
                <p className="mt-4 text-sm text-[#6d645a] leading-relaxed">
                  {activeEvent.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}