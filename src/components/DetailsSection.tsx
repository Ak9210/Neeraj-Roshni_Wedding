import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import venueImage from "@/assets/venue-photo.jpg";

const DetailsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container max-w-4xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Venue Details
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="wedding-card text-center"
        >
          {/* Location Icon (Clickable) */}
          <a
            href="https://www.google.com/travel/search?ts=CAESCgoCCAMKAggDEAAaHBIaEhQKBwjqDxABGBMSBwjqDxABGBQYATICCAIqBwoFOgNJTlI&qs=CAEyE0Nnb0lsdmpueE1xQ3Q3bGNFQUU4CEIJERkqjgfDXwxkQgkRC5YoAedLrx9aAggB&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          > 
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center hover:scale-105 transition-transform">
              <MapPin className="w-7 h-7 text-primary" />
            </div> 
            <p className="font-sans text-muted-foreground mb-8" >Tap for Direction</p>
          </a>

          {/* Venue Name */}
          <h3 className="font-serif text-2xl md:text-3xl text-primary mb-3">
            Madhuvan Resort
          </h3>

          {/* Address */}
          <p className="font-sans text-muted-foreground mb-8">
            Sikker Road
            <br />
            Jaipur, Rajasthan
          </p>

          {/* Venue Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={venueImage}
              alt="Anant Mahal Jaipur - Wedding Venue"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailsSection;