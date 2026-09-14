import { contacts } from "../data/contacts";
import texturaFolder from "../assets/images/accesories/textura-beige.webp";

import trozoPapel12 from "../assets/images/accesories/trozo-papel-12.png";
import trozoPapel13 from "../assets/images/accesories/trozo-papel-13.png";
import { motion } from "motion/react";

function Contact() {
  return (
    <section
      className="
      h-full
      bg-(--color-folder-5)
      overflow-hidden
      flex flex-col md:flex-row
      gap-8 md:gap-4
      "
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
        <div
          className="
        absolute
        top-0 left-0
        w-full h-300"
        >
          <p
            className="
            text-(--color-text-vivid)
            text-end
            text-sm
            font-body
            absolute
            top-60 right-50
            z-10
            -rotate-4"
          >
            Portfolio diseñado con Figma.
            <br />
            Creado en Visual Studio Code con React JS, <br />
            Tailwind CSS y Motion.
            <br />
            Deployed en Vercel
          </p>
          <img
            src={trozoPapel13}
            alt=""
            className="
            absolute
            top-18 right-10
            w-230 h-300
            object-fit
            -rotate-4
            shadow-(--shadow-paper)
            opacity-80"
          />
          <img
            src={trozoPapel12}
            alt=""
            className="
            absolute
            top-6 left-20
            w-230 h-300
            object-fit
            rotate-2
            shadow-(--shadow-paper)"
          />
          <div
            className="
          absolute
          top-30 left-40
          rotate-2
          py-6 pl-20 
          w-90"
          >
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group 
                flex 
                items-center
                text-(--color-text-dark) 
                gap-4
                px-4 py-3 
                transition duration-300
                group-hover:scale-110"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="
                w-6 h-6
                transition duration-300
                group-hover:scale-110
                group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                />
                <div
                  className="
                flex flex-col
                transition duration-300
                group-hover:scale-105"
                >
                  <span className="text-sm opacity-70">{item.label}</span>
                  <span
                    className="
                  font-medium
                  sm:text-base md:text-sm lg:text-base"
                  >
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
