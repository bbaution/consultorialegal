import React from "react";
import cartel from "../../assets/cartel.webp";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${cartel})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  width: "100%",
};

const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: delay, ease: "easeInOut" },
  },
});

const Hero = () => {
  const [message, setMessage] = React.useState("");

  const whatsappLink = `https://wa.me/5491138796922?text=${encodeURIComponent(message)}`;

  return (
    <div id="inicio" style={bgStyle}>
      <div className="min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/70 to-[#d29c4481] pt-32 pb-24
 md:pt-48">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
            {/* Hero Text */}
            <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]">
              <motion.h1
                variants={FadeUp(0.2)}
                initial="initial"
                animate="animate"
                className="text-5xl lg:text-7xl font-bold"
              >
                Transformamos tus problemas de tránsito en soluciones legales, rápidas y efectivas.
              </motion.h1>
              
            </div>

            {/* WhatsApp Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-[90%] md:w-[400px] mx-auto p-4 bg-white text-black dark:bg-black dark:text-white rounded-2xl shadow-md"
            >
              <h1 className="text-lg text-center font-semibold mb-4">
                Enviar mensaje por WhatsApp
              </h1>
              <textarea
                rows="5"
                className="w-full border px-4 py-2 rounded-lg dark:border-gray-800 dark:bg-black"
                placeholder="Escribí tu mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#d29b44] text-white font-semibold py-2 px-4 w-full rounded-full mt-4 hover:bg-[#0a88b9] transition-all"
              >
                Enviar por WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
