import texturaFolder from "../assets/images/accesories/textura-beige.webp";
import paperAbout from "../assets/images/accesories/papel-beige-doblado-1.jpg";
import papelRayas from "../assets/images/accesories/papel-rayas.jpg";
import clip4 from "../assets/images/accesories/clip-4.png";
import acuarelas from "../assets/images/accesories/img-acuarelas.jpg";
import paper11 from "../assets/images/accesories/trozo-papel-11.png";
import decor8 from "../assets/images/accesories/decor-8.png";
import stamp3 from "../assets/images/accesories/stamp-3.png";
import { motion } from "motion/react";

function About() {
  return (
    <section
      className="
      h-full
        bg-(--color-folder-4)
        overflow-hidden"
    >
      <div
        className="
      absolute
      inset-0
      opacity-25
      pointer-events-none"
        style={{
          backgroundImage: `url(${texturaFolder})`,
          backgroundRepeat: "repeat",
        }}
      />
      <motion.div
        className="
      relative
      h-full w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src={paperAbout}
          alt=""
          className="
        absolute
        top-9 left-8
        w-[97%] h-full
        object-fit
        rotate-2
        shadow-(--shadow-paper)"
        />

        <img
          src={paper11}
          alt=""
          className="
            absolute
            top-70 left-60
          w-90 h-90
          opacity-85
          -rotate-10"
        />
        <img
          src={acuarelas}
          alt=""
          className="
            absolute
            top-55 left-80
          w-90 h-60
          opacity-90
          rotate-6"
        />
        <img
          src={decor8}
          alt=""
          className="
            absolute
            top-40 left-70
          w-25 h-25
          opacity-85
          -rotate-16"
        />
        <div
          className="
          absolute
          top-0 right-10
          w-200 h-300"
        >
          <img
            src={clip4}
            alt=""
            className="
          absolute
          -top-2 right-90
          w-40 h-25
          z-10
          rotate-2"
          />
          <img
            src={stamp3}
            alt=""
            className="
          absolute
          top-114 right-20
          w-25 h-20
          z-10
          rotate-16"
          />
          <img
            src={papelRayas}
            alt=""
            className="
          absolute
          top-12 right-4 
          w-200 h-300
          -rotate-2"
          />
          <div
            className="
          absolute
          top-40 right-20
          px-14
          font-mono
          text-(--color-text-dark)
          text-justify
          -rotate-2"
          >
            <p
              className="
              indent-4
              pb-2"
            >
              Soy desarrolladora Frontend con experiencia en la creación de
              aplicaciones web con React. Trabajo con JavaScript, React Router,
              Context API y Firebase para desarrollar interfaces dinámicas y
              funcionales.
            </p>
            <p
              className="
            indent-4
            pb-2"
            >
              Desarrollé un e-commerce completo con autenticación de usuarios,
              gestión de carrito y filtrado de productos, aplicando buenas
              prácticas y organización de código. Busco seguir creciendo en el
              desarrollo frontend y aportar en proyectos reales.
            </p>
            <p className="indent-4">
              Enfocada en seguir mejorando mis habilidades, crecer
              profesionalmente dentro del desarrollo web e interesada en
              oportunidades donde pueda aportar y seguir aprendiendo en equipo.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
