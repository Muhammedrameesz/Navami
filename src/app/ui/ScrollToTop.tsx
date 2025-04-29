"use client";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <motion.button
          initial={{ opacity: 0,y:50 }}
          animate={{ opacity: 1,y:0 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-5 z-50 bg-gray-950 text-white p-2 cursor-pointer rounded-full shadow-2xl 
          hover:scale-105 transition-all duration-300 flex items-center justify-center"
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.div>
        </motion.button>
      )}
    </>
  );
}
