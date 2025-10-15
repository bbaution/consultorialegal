import { IoLogoInstagram } from "react-icons/io";
import Image2 from "../../assets/cartelinterior.webp";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div id="nosotros" className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container md:h-[500px] flex items-center justify-center py-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          {/* img container */}
          <div>
            <img
              src={Image2}
              alt=""
              className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
            />
          </div>
          {/* text container */}
          <div className="lg:max-w-[400px] space-y-6">
            <h1 className="text-2xl font-semibold md:text-4xl mb-4">
              Nosotros
            </h1>
            <ul>
              <li>Somos un equipo de profesionales especializados en Derecho de Tránsito, Derecho Administrativo y Procedimientos de Faltas, con amplia experiencia en el tratamiento de infracciones emitidas por distintos Juzgados de Faltas Municipales y Provinciales.</li>
              <li>Fundado en 2022, González y Asociados nació con la misión de ofrecer una alternativa legal confiable y accesible para quienes enfrentan multas injustas o prescriptas, garantizando un enfoque personalizado y transparente en cada caso.</li>
            </ul>
            <a href=""><motion.a
              href="https://www.instagram.com/consultoralegalvial/"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              animate="animate"
              className=" bg-transparent text-[#d29b44] inline-flex justify-center items-center w-full gap-2 p-3  text-xl"
            >
              <IoLogoInstagram className="text-2xl text-center" />
              consultoralegalvial
            </motion.a></a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
