

import iconoFondoAzul from "../../assets/iconoFondoAzul.webp";
import {
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp
} from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const importantLinks = [
  {
    name: "Inicio",
    href: "#inicio",
  },
  {
    name: "Nosotros",
    href: "#nosotros",
  },
  {
    name: "Nuestra filosofía",
    href: "#testimonios",
  },
  {
    name: "Nuestros Servicios",
    href: "#servicios",
  },
  {
    name: "¿Por qué elegirnos?",
    href: "#porqueelegirnos",
  },
];


const Footer = () => {
  return (
    <div className="text-white rounded-t-3xl  bg-[#d29b44] ">
      <div className="mx-auto max-w-[1200px] p-4">
        {/* footer containt section  */}
        <div className="grid py-5 md:grid-cols-3">
          <div className="px-4 py-8">
            <h1 className="mb-3 text-justify text-xl sm:text-left sm:text-3xl">
              <a href="/#home" className="uppercase">
                <img src={iconoFondoAzul} alt="icono" />
              </a>
            </h1>
            
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <a href="https://wa.me/5491138796922?text">+54 9 11 3879-6922</a>
            </div>
          </div>
          <div className="grid grid-cols-2  md:pl-10 col-span-2">
            <div className=" py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                Enlaces
              </h1>
              <ul className="flex flex-col gap-3">
                <FooterLinks links={importantLinks} />
              </ul>
            </div>
            <div className=" py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                Redes Sociales
              </h1>
              <div className="space-y-3">

                <div className="flex gap-3 mt-6 items-center">
                  <a href="https://www.instagram.com/consultoralegalvial/" className="duration-200 hover:scale-105">
                    <FaInstagram className="text-3xl" />
                  </a>
                  
                  <a href="https://wa.me/5491138796922" className="duration-200 hover:scale-105">
                    <FaWhatsapp className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer copyright section */}
        <div className="bottom-footer">
          <p className="border-t-2 border-gray-300/50 py-6 text-center">
            Copyright © 2017. Todos los derechos reservados.
            <br />
            Diseñado y desarrollado por  <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#ffffff] hover:underline"
            >
              UnicornTech
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
