import { motion } from "motion/react";
import { useState, useEffect } from "react";
import texturaFolder from "../assets/images/accesories/textura-beige.webp";
import paperAbout from "../assets/images/accesories/paper-about.jpg";
import paper5 from "../assets/images/accesories/paper-5.jpg";
import paper6 from "../assets/images/accesories/paper-6.png";
import paper7 from "../assets/images/accesories/paper-7.jpg";
import clip1 from "../assets/images/accesories/clip-1.webp";
import clip3 from "../assets/images/accesories/clip-3.png";
import decor7 from "../assets/images/accesories/decor-7.png";
import decor8 from "../assets/images/accesories/decor-8.png";

function About() {
  const [position, setPosition] = useState(0);

  const text =
    "Soy desarrolladora Frontend y me gusta transformar ideas en experiencias web que sean funcionales, dinámicas y agradables de usar. Trabajo principalmente con React y JavaScript, y disfruto especialmente de la parte visual: pensar cómo se organiza una interfaz, cómo se siente al interactuar con ella y cómo adaptarla a distintos dispositivos.\n\nMe gusta aprender haciendo, experimentar con nuevas herramientas y encontrar distintas formas de convertir una idea en algo concreto. Cada proyecto es una oportunidad para aprender algo nuevo, mejorar la forma en que trabajo y seguir construyendo una mirada más completa sobre el desarrollo web.\n\nAhora estoy buscando dar el próximo paso y formar parte de un equipo de desarrollo. Me interesa seguir aprendiendo, enfrentar nuevos desafíos y aportar todo lo que fui construyendo hasta ahora.";

  useEffect(() => {
    if (position < text.length) {
      const timer = setTimeout(() => {
        setPosition((prevPosition) => prevPosition + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [position]);

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
        <span className="group">
          <img
            src={paper6}
            alt=""
            className="
            absolute
            bottom-20 -left-14
          w-140 h-90
          -rotate-85
          group-hover:-rotate-80"
          />
          <img
            src={paper5}
            alt=""
            className="
            absolute
            bottom-30 -left-8
          w-90 h-60
          -rotate-85
          group-hover:-rotate-90"
          />
          <img
            src={clip1}
            alt=""
            className="
          absolute
          bottom-30 -left-8
          w-40 h-25
          z-10
          -rotate-95"
          />
        </span>
        <div
          className="
          absolute
          top-0 right-10
          w-200 h-300"
        >
          <img
            src={clip3}
            alt=""
            className="
          absolute
          -top-2 right-90
          w-40 h-25
          z-10
          rotate-2"
          />
          <img
            src={decor7}
            alt=""
            className="
          absolute
          top-124 right-20
          w-20 h-20
          z-10
          rotate-16"
          />
          <img
            src={decor8}
            alt=""
            className="
          absolute
          top-18 right-190
          w-15 h-15
          z-10
          -rotate-25"
          />
          <img
            src={paper7}
            alt=""
            className="
          absolute
          top-12 right-4 
          w-200 h-300
          -rotate-2"
          />
          <div
            className="
            w-full
          absolute
          top-34 right-20
          px-14
          font-mono
          text-(--color-text-vivid)
          text-start
          -rotate-2"
          >
            <p
              className="
              w-full
            indent-4
            pb-2
            pl-18
            whitespace-break-spaces"
            >
              {text.slice(0, position)}
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                |
              </motion.span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
