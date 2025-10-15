import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import Carousel from "../Carousel/Carousel.jsx"; // <-- importa el Carousel
import img1 from "../../assets/carouselImg/img1.webp";
import img2 from "../../assets/carouselImg/img2.webp";
import img3 from "../../assets/carouselImg/img3.webp";


// Array de imágenes
const fotos = [img1, img2, img3];

const VideoBanner = () => {
  return (
    <div id="servicios" className="bg-[#d29b44]">
      <div className="container py-8 h-[900px] md:py-16 md:h-[700px] flex justify-center">
        <div className="grid grid-cols-1 items-center  md:grid-cols-2 gap-4 md:gap-8">
          
          {/* text section */}
          <div className="space-y-4 text-center md:text-left text-white ">
            <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
            <ul>
              <li> Impugnación de infracciones de tránsito (CABA y Provincia de Buenos Aires).</li>
              <li>Revisión de actas prescriptas o mal notificadas.</li>
              <li>Descargos legales online ante juzgados y organismos de control.</li>
              <li> Asesoramiento preventivo para evitar sanciones futuras.</li>
              <li>Gestión de infracciones empresariales (flotas y transportes).</li>
              <li>Seguimiento integral del trámite hasta la resolución final.</li>
            </ul>
            <motion.a
              href="https://wa.me/5491138796922"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              animate="animate"
              className="btn bg-white text-[#d29b44] inline-flex items-center rounded-lg gap-2 p-3  text-xl"
            >
              <IoLogoWhatsapp className="text-2xl" />
              <a href="https://wa.me/5491138796922?text">Contactanos</a>
            </motion.a>
          </div>
          {/* Carousel section */}
          <Carousel  images={fotos} />
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
