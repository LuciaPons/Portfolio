import { useState } from "react";
import { motion } from "motion/react";
import texturaFolder from "../assets/images/accesories/textura-beige.webp";
import paperHome from "../assets/images/accesories/paper-home.webp";
import polaroid1 from "../assets/images/accesories/polaroid-1.webp";
import polaroid2 from "../assets/images/accesories/polaroid-2.webp";
import clip1 from "../assets/images/accesories/clip-1.webp";
import paper1 from "../assets/images/accesories/paper-1.webp";
import decor1 from "../assets/images/accesories/decor-1.webp";
import decor2 from "../assets/images/accesories/decor-2.webp";
import decor3 from "../assets/images/accesories/decor-3.webp";

export default function Home() {
  const [topPhoto, setTopPhoto] = useState(1);

  return (
    <section
      className="
      h-full
      bg-(--color-folder-1)
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
          src={paperHome}
          alt=""
          className="
        absolute
        top-8 left-15
        w-[95%] h-full
        object-fit
        -rotate-2

        md:rotate-2
        shadow-(--shadow-paper)"
        />
        <img
          src={paperHome}
          alt=""
          className="
        absolute
        top-8 left-10
        w-[95%] h-full
        object-fit
        
        rotate-2
        md:-rotate-2
        shadow-(--shadow-paper)"
        />
        <img
          src={clip1}
          alt=""
          className="
          absolute
          z-40
          top-3
          right-20
          w-30 h-20
          
          md:w-35 
          md:h-25
          md:top-1
          md:right-60
          
          xl:-top-1 
          xl:right-75
          "
        />
        <div
          className="
        absolute
        top-10
        right-14
        w-50 
        h-80
        
        md:w-70 
        md:h-110
        md:top-8
        md:right-45

        xl:w-80 
        xl:h-150
        xl:top-10 
        xl:right-70
        
        cursor-pointer"
          onClick={() => setTopPhoto((prev) => (prev === 1 ? 2 : 1))}
        >
          <img
            src={polaroid1}
            alt=""
            className={`
            absolute
            inset-0
            w-50 
            h-80

            md:w-70 
            md:h-110

            xl:w-80 
            xl:h-120
            shadow-(--shadow-photo)
            ${topPhoto === 1 ? "z-20 -rotate-4" : "z-10 -rotate-3"}`}
          />
          <img
            src={polaroid2}
            alt=""
            className={`
            absolute
            inset-0
            w-50 
            h-80
              
            md:w-70 
            md:h-110

            xl:w-80 
            xl:h-120

            shadow-(--shadow-photo)
            ${topPhoto === 2 ? "z-20 rotate-3" : "z-10 rotate-8"}`}
          />
        </div>
        <img
          src={decor3}
          alt=""
          className="
          absolute
          top-10
          right-36
          w-40
          h-40
          rotate-260

          md:top-8
          xl:top-6 
          md:right-12

          md:w-50 
          md:h-50

          xl:w-70 
          xl:h-70
          opacity-70
          md:-rotate-4"
        />
        <div
          className="
        relative
        top-106
        left-32
        w-90 h-400
        -rotate-2

        md:top-25 
        md:left-35

        xl:top-20 
        xl:left-80

        md:rotate-2
        z-10
        cursor-default"
        >
          <p
            className="
            absolute
            top-30
            left-10
            font-heading
            font-semibold
            text-(--color-text-dark)
            text-xl
            
            md:top-50
            md:left-22
            md:text-3xl
            
            xl:top-56"
          >
            Lucía Pons
          </p>
          <p
            className="
          absolute
          top-40
          left-7
          font-heading
          font-semibold
          text-(--color-text-dark)
          text-medium
          
          md:top-65
          md:left-12
          md:text-2xl
          
          xl:top-72
          xl:left-15 
          "
          >
            Frontend Developer
          </p>
          <img
            src={paper1}
            alt=""
            className="
          shadow-(--shadow-post-it)
          w-50
          md:w-80
          xl:w-auto
          "
          />
        </div>
        <img
          src={decor2}
          alt=""
          className="
          absolute
          top-106
          left-15
          w-70
          h-70

          md:top-28
          md:left-28
          md:w-100
          md:h-100

          xl:left-70
          xl:top-22 
          xl:w-110 
          xl:h-110
          
          opacity-90
          -rotate-3"
        />
        <img
          src={decor1}
          alt=""
          className="
        absolute
        top-140
        left-8
        w-30
        h-45
        
        md:top-80
        md:left-10
        md:w-40 
        md:h-65

        xl:top-80 
        xl:left-40
        xl:w-50 
        xl:h-75

        -rotate-20
        hover:-translate-y-2"
        />
      </motion.div>
    </section>
  );
}
