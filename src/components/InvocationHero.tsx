import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function InvocationHero() {
  const { language } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f6f3ef] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-sm w-full text-center"
      >
        {/* Ganesh */}
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 rounded-full border border-[#c9bfae] flex items-center justify-center text-[#7a6f63] font-serif text-xl">
            ॐ
          </div>
          <p className="mt-3 text-xs tracking-widest text-[#8a8176]">
            || SHREE GANESHAY NAMAH ||
          </p>
        </div>

        {/* Main text */}
        <div className="space-y-4">
          <p className="text-sm text-[#6f665b] tracking-wide">
            {language === "hi"
              ? "आपकी शुभ उपस्थिति सादर आमंत्रित है"
              : "Request the pleasure of your gracious presence"}
          </p>

          <h1 className="font-serif text-4xl text-[#3f3a33] leading-tight">
            Samudra <br /> & <br /> Jom
          </h1>

          <p className="text-sm text-[#6f665b]">
            {language === "hi"
              ? "विवाह समारोह"
              : "Wedding Celebrations"}
          </p>

          <p className="text-xs tracking-widest text-[#8a8176] pt-2">
            29 JANUARY 2027
          </p>
        </div>

        {/* Scroll hint */}
        <div className="mt-12 text-xs text-[#9a9186]">
          {language === "hi" ? "नीचे स्क्रॉल करें" : "Scroll to continue"}
        </div>
      </motion.div>
    </section>
  );
}