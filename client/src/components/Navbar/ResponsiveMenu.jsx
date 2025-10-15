
import iconoFondoBlanco from "../../assets/iconoFondoBlanco.webp";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <>
      <div
        className={`fixed top-0 z-50 ${
          showMenu ? "left-0" : "-left-[100%]"
        } h-screen w-[75%] bg-white dark:bg-slate-950 dark:text-white z-50 transition-all duration-500 pt-10 pb-6 px-8 flex flex-col justify-between md:hidden`}
      >
        {/* Navbar section */}
        
        <div>
          <div className="pb-3">
                <img src={iconoFondoBlanco} alt="icono" />
            </div>
          {/* Menu section */}
          <nav className="">
            <ul className="space-y-6 text-lg font-semibold">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#testimonios">Testimonios</a>
              </li>
              <li>
                <a href="#servicios">Nuestros Servicios</a>
              </li>
              <li>
                <a href="#porqueelegirnos">¿Por qué elegirnos?</a>
              </li>
            </ul>
            
          </nav>
        </div>
        {/* Nav Footer section */}
        <div className="border-t border-gray-300/50 pt-6 text-center text-sm">
          <p>© 2025. Todos los derechos reservados.</p>
          <p className="mt-2">
            Diseñado y desarrollado por{" "}
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#0a88b6] hover:underline"
            >
              UnicornTech
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
