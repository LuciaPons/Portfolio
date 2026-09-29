import { motion } from "motion/react";
import { useState, useEffect } from "react";
import texturaFolder from "../assets/images/accesories/textura-beige.webp";
import paperAbout from "../assets/images/accesories/paper-about.webp";
import paper5 from "../assets/images/accesories/paper-5.webp";
import paper6 from "../assets/images/accesories/paper-6.webp";
import paper7 from "../assets/images/accesories/paper-7.webp";
import clip1 from "../assets/images/accesories/clip-1.webp";
import clip3 from "../assets/images/accesories/clip-3.webp";
import decor7 from "../assets/images/accesories/decor-7.webp";
import decor8 from "../assets/images/accesories/decor-8.webp";

function About() {
  const [position, setPosition] = useState(0);

  const text =
    "Soy desarrolladora Frontend y me gusta transformar ideas en experiencias web que sean funcionales, dinámicas y agradables de usar. Trabajo principalmente con React y JavaScript, y disfruto especialmente de la parte visual: pensar cómo se organiza una interfaz, cómo se siente al interactuar con ella y cómo adaptarla a distintos dispositivos.\n\nMe gusta aprender haciendo, experimentar con nuevas herramientas y encontrar distintas formas de convertir una idea en algo concreto. Cada proyecto es una oportunidad para aprender algo nuevo, mejorar la forma en que trabajo y seguir construyendo una mirada más completa sobre el desarrollo web.\n\nAhora estoy buscando dar el próximo paso y formar parte de un equipo de desarrollo. Me interesa seguir aprendiendo, enfrentar nuevos desafíos y aportar todo lo que fui construyendo hasta ahora.";

  useEffect(() => {
    if (position < text.length) {
      const timer = setTimeout(() => {
        setPosition((prevPosition) => prevPosition + 1);
      }, 6);
      return () => clearTimeout(timer);
    }
  }, [position]);

  useEffect(() => {
    document.title = "Sobre mí | Lucía Pons";

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Conocé más sobre mí, mi forma de trabajar y mi enfoque como desarrolladora frontend.",
      );
  }, []);

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
      opacity-35
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
        top-9 
        left-6

        md:left-8
        md:w-[95%]

        xl:w-[97%] 
        h-full
        object-fit
        rotate-2
        shadow-(--shadow-paper)"
        />
        <h1 className="sr-only">Acerca de mí</h1>
        <span className="group">
          <img
            src={paper6}
            alt=""
            className="
            absolute
            top-10 
            left-10
            w-100 
            h-50
            rotate-4

            md:top-50 
            md:-left-14
            md:w-120 
            md:h-70
            md:-rotate-85
            
            xl:top-40 
            xl:-left-14
            xl:w-140 
            xl:h-90
            md:group-hover:-rotate-80"
          />
          <img
            src={paper5}
            alt=""
            className="
            hidden
            md:block
            absolute
            
            md:bottom-60 
            md:-left-6
            md:w-80 
            md:h-50

            xl:bottom-30 
            xl:-left-7
            xl:w-90 
            xl:h-60
          -rotate-85
          group-hover:-rotate-90"
          />
          <img
            src={clip1}
            alt=""
            className="
          absolute
          top-6 
          left-40
          w-20 
          h-15
          rotate-6
          
          md:top-80 
          md:-left-3
          md:w-30 
          md:h-15
          md:-rotate-95
          
          xl:top-55 
          xl:-left-5
          xl:w-40 
          xl:h-25
          z-10"
          />
        </span>
        <div
          className="
          absolute
          top-0 
          -right-10
          w-full
          h-full

          md:right-2
          md:w-150
          md:h-250
          
          xl:right-10
          xl:w-200 
          xl:h-300"
        >
          <img
            src={clip3}
            alt=""
            className="
          absolute
          top-80
          right-64
          w-30
          h-20
          -rotate-94
          
          md:w-40 
          md:h-25
          md:-top-2
          md:right-50
          md:rotate-2

          xl:-top-2 
          xl:right-90
          z-10"
          />
          <img
            src={decor7}
            alt=""
            className="
          absolute
          top-30
          right-10
          w-10
          h-10

          md:top-130
          md:right-10
          md:w-15
          md:h-15
          
          xl:top-124 
          xl:right-20
          xl:w-20 
          xl:h-20
          z-10
          rotate-16
          hover:rotate-4"
          />
          <img
            src={decor8}
            alt=""
            className="
            hidden
            md:block
            absolute
          top-20
          right-140
          w-10 
          h-10

          md:top-20
          md:right-140
          md:w-10 
          md:h-10

          xl:top-18 
          xl:right-190
          xl:w-15 
          xl:h-15
          z-10
          -rotate-25
          hover:-rotate-10"
          />
          <img
            src={paper7}
            alt=""
            className="
          absolute
          top-30
          right-1
          w-100
          h-[85%]
          
          md:top-12 
          md:right-4 
          md:w-200 
          md:h-300
          -rotate-2"
          />
          <div
            className="
            w-full
          absolute
          top-36
          right-10
          text-xs
          px-2

          md:top-35 
          md:right-20
          md:text-sm
          md:px-10

          xl:top-34 
          xl:right-20
          xl:text-base
          xl:px-14
          
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
                  duration: 0.8,
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
