
import { motion } from "framer-motion";

const fadeAnimation = (delay) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const OurVision = () => {
  return (
    <div id="testimonios" className="container my-16 bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-xl font-semibold text-center py-5">Nuestra filosofía se basa en tres pilares:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-10">
        <motion.div
          variants={fadeAnimation(0.2)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-[#d29b44] dark:bg-slate-800"
        >
          <p>
            Compromiso: tratamos cada caso como si fuera propio.
           
          </p>
        </motion.div>
        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-[#d29b44] dark:bg-slate-800"
        >
          <p>
            Transparencia: informamos cada paso del proceso.
            
          </p>
        </motion.div>
        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-[#d29b44] dark:bg-slate-800"
        >
          <p>
            Resultados: más del 90% de los descargos presentados logran reducciones o anulaciones.
            
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurVision;
