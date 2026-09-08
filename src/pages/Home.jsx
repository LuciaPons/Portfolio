import texturaFolder from "../assets/images/textura-beige.webp";
import paperHome from "../assets/images/hoja-acuarela-home.webp";
import polaroid1 from "../assets/images/foto-polaroid.webp";
import polaroid2 from "../assets/images/foto-polaroid-2.webp";
import clip1 from "../assets/images/clip-1.webp";
import trozoPapel1 from "../assets/images/trozo-papel-7.webp";
import stamp1 from "../assets/images/stamp-1.png";
import stamp2 from "../assets/images/stamp-2.png";
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
        <div
          className="
        absolute
        top-10 left-30
        w-[85%] h-full
        -rotate-2
        shadow-(--shadow-paper)
        "
          style={{
            backgroundImage: `url(${paperHome})`,
          }}
        />
        <img
          src={clip1}
          alt=""
          className="
          absolute
          top-1 right-75
          z-40
          w-30 h-25
          rotate-5"
        />
        <div
          className="
        absolute
        top-10 right-70
        w-80 h-150"
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
        top-18 left-80
        w-100 h-400
        rotate-2"
        >
          <p
            className="
            absolute
            top-63 left-22
            font-heading
            font-semibold
            text-2xl
            text-(--color-text-dark)"
          >
            Lucía Pons
          </p>
          <p
            className="
          absolute
          top-72 left-25
          font-heading
          font-semibold
          text-xl
          text-(--color-text-dark)"
          >
            Frontend Developer
          </p>
          <img
            src={trozoPapel1}
            alt=""
            className="
          shadow-(--shadow-post-it)"
          />
        </div>
        <img
          src={stamp1}
          alt=""
          className="
        absolute
        bottom-5 right-30
        w-80 h-60"
        />
        <img
          src={stamp2}
          alt=""
          className="
        absolute
        top-15 left-40
        w-70 h-50"
        />
      </motion.div>
    </section>
  );
}
