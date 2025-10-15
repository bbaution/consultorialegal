import CountUp from "react-countup";
import { motion } from "framer-motion";

const OverviewCounter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="container px-4"
    >
      <div className="mx-auto my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white p-6 rounded-2xl shadow-lg max-w-6xl gap-y-6 sm:gap-y-6 lg:gap-y-0 lg:divide-x divide-slate-300 lg:-translate-y-20 md:p-8">


        {/* Item 1 */}
        <div className="flex flex-col items-center text-center px-4">
          <p className="text-lg font-bold text-black">
            <CountUp start={0} end={7000} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
          </p>
          <p className="text-sm text-black/70">Infracciones resueltas</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center px-4">
          <p className="text-lg font-bold text-black">
            <CountUp start={0} end={990} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
          </p>
          <p className="text-sm text-black/70">
            Infracciones Prescriptas
          </p>
        </div>

        

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center px-4">
          <p className="text-lg font-bold text-black">
            <CountUp start={0} end={5000} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
          </p>
          <p className="text-sm text-black/70">
            Clientes satisfechos<br />
            Atención personalizada, 100% online.
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center text-center px-4">
          <p className="text-lg font-bold text-black">
            <CountUp start={0} end={300000} duration={2.5} separator=" " suffix="+" enableScrollSpy scrollSpyOnce />
          </p>
          <p className="text-sm text-black/70">
            Recomendaciones y consultas<br />
            Confianza construida desde 2020.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default OverviewCounter;
