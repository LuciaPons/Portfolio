import texturaFolder from "../assets/images/textura-beige.webp";
import paperHome from "../assets/images/hoja-acuarela-home.webp";
import polaroid1 from "../assets/images/foto-polaroid.webp";
import polaroid2 from "../assets/images/foto-polaroid-2.webp";
import clip1 from "../assets/images/clip-1.webp";
import trozoPapel1 from "../assets/images/trozo-papel-7.png";
import trozoPapel10 from "../assets/images/trozo-papel-10.png";
import decor2 from "../assets/images/decor-2.png";
import { useState } from "react";
import { motion } from "motion/react";

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
        top-8 left-10
        w-[95%] h-full
        object-fit
        -rotate-2
        shadow-(--shadow-paper)"
        />
        <img
          src={clip1}
          alt=""
          className="
          absolute
          bottom-125 right-75
          z-40
          w-35 h-25
          "
        />
        <div
          className="
        absolute
        top-10 right-70
        w-80 h-150
        cursor-pointer"
          onClick={() => setTopPhoto((prev) => (prev === 1 ? 2 : 1))}
        >
          <img
            src={polaroid1}
            alt=""
            className={`
            absolute
            inset-0
          w-80 h-120
          shadow-(--shadow-photo)
          ${topPhoto === 1 ? "z-20 -rotate-4" : "z-10 -rotate-3"}`}
          />
          <img
            src={polaroid2}
            alt=""
            className={`
              absolute
              inset-0
          w-80 h-120
          shadow-(--shadow-photo)
          ${topPhoto === 2 ? "z-20 rotate-3" : "z-10 rotate-4"}`}
          />
        </div>
        <div
          className="
        relative
        top-20 left-80
        w-90 h-400
        rotate-2
        z-10
        cursor-default"
        >
          <p
            className="
            absolute
            top-60 left-22
            font-heading
            font-semibold
            text-3xl
            text-(--color-text-dark)"
          >
            Lucía Pons
          </p>
          <p
            className="
          absolute
          top-72 left-20
          font-heading
          font-semibold
          text-2xl
          text-(--color-text-dark)"
          >
            Frontend Developer
          </p>
          <img
            src={trozoPapel1}
            alt=""
            className="
          shadow-(--shadow-post-it)
          "
          />
        </div>
        <img
          src={trozoPapel10}
          alt=""
          className="
          absolute
          top-14 left-130
          w-80 h-140
          -rotate-4"
        />
        <img
          src={decor2}
          alt=""
          className="
        absolute
        top-80 left-40
        w-50 h-75
        -rotate-20
        hover:-translate-y-2"
        />
      </motion.div>
    </section>
  );
}
