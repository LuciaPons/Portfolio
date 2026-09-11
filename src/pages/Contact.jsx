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
          <img
            src={trozoPapel13}
            alt=""
            className="
        absolute
        top-18 left-100
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
        top-4 left-30
        w-230 h-300
        object-fit
        rotate-2
        shadow-(--shadow-paper)"
          />
          <div
            className="
          absolute
          top-30 left-50
          rotate-2
          p-4 w-90
          border-2 border-(--color-3)
          rounded-lg"
          >
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
              group flex items-center 
              gap-4 md:gap-2 lg:gap-4
              px-4 py-3 rounded-lg
              transition-all duration-300
              hover:bg-white/10
              hover:-translate-y-1
              hover:shadow-[0_6px_15px_rgba(0,0,0,0.25)]"
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
                <div className="flex flex-col">
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
      {/* <div
        className="
            text-(--color-4) 
            text-xs md:text-sm
            text-end
            p-4"
      >
        <p>
          Portfolio diseñado con Whimsical.
          <br />
          Creado en Visual Studio Code con React JS y Tailwind CSS. <br />
          Deployed en Vercel
        </p>
      </div> */}
    </section>
  );
}

export default Contact;
