import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EnvelopeLanding from "@/components/EnvelopeLanding";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import DetailsSection from "@/components/DetailsSection";
// import TimelineSection from "@/components/TimelineSection";
import AccommodationSection from "@/components/AccommodationSection";
import MusicButton from "@/components/MusicButton";
import Footer from "@/components/Footer";
import InvocationHero from "../components/InvocationHero";
// import EventsSection from "../components/EventsSection";
// import InteractiveEventsSection from "../components/InteractiveEventsSection";
import InlineEventsTimeline from "../components/InlineEventsTimeline";
import ElderlySection from "@/components/ElderlySection";
import ThingsToKnow from "@/components/ThingsToKnow";
import MeetBrideGroom from "@/components/MeetTheBrideGroom";
import RSVPSection from "@/components/RSVPSection";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!isEnvelopeOpen && (
          <EnvelopeLanding onOpen={handleEnvelopeOpen} />
        )}
      </AnimatePresence>

      {isEnvelopeOpen && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen"
        >
          <HeroSection />
          {/* <InvocationHero/> */}
          <ElderlySection/>
          <CountdownSection />
          <DetailsSection />
          <InlineEventsTimeline />
          {/* <TimelineSection /> */}
          {/* <AccommodationSection /> */}
          <MeetBrideGroom/>
          <ThingsToKnow/>
          <RSVPSection/>
          <Footer />
          <MusicButton />
        </motion.main>
      )}
    </>
  );
};

export default Index;
