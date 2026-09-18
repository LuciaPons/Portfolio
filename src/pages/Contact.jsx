import { motion } from "motion/react";
import { contacts } from "../data/contacts";
import texturaFolder from "../assets/images/accesories/textura-beige.webp";
import paper8 from "../assets/images/accesories/paper-8.png";
import paper9 from "../assets/images/accesories/paper-9.png";

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
            font-body
            absolute
            text-xs
            top-30
            right-6
            
            md:top-44 
            md:right-25
            
            xl:text-sm
            xl:top-60 
            xl:right-50

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
            src={paper9}
            alt=""
            className="
            absolute
            top-15 
            -right-2
            w-full 
            h-110
            -rotate-1

            md:top-18 
            md:right-5
            md:w-170 
            md:h-200
            md:-rotate-4

            xl:top-18 
            xl:right-10
            xl:w-230 
            xl:h-300
            
            object-fit
            shadow-(--shadow-paper)
            opacity-80"
          />
          <img
            src={paper8}
            alt=""
            className="
            absolute
            top-70 
            left-4
            w-full 
            h-110

            md:top-10 
            md:left-2
            md:w-170 
            md:h-200

            xl:top-6 
            xl:left-20
            xl:w-230 
            xl:h-300
            object-fit
            rotate-2
            shadow-(--shadow-paper)"
          />
          <div
            className="
          absolute
          top-79 
          left-8
          pl-2

          md:top-20 
          md:left-0
          md:py-4 
          md:pl-25

          xl:top-30 
          xl:left-30
          xl:py-6 
          xl:pl-20 

          rotate-2
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
                text-xs

                md:text-base
                text-(--color-text-dark) 
                gap-2
                px-4 
                
                md:gap-4
                md:py-2
                xl:py-3 
                
                transition duration-300
                group-hover:scale-110"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="
                  w-5
                  h-5

                  md:w-6 
                  md:h-6
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
