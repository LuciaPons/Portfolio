import { motion } from "motion/react";
import { useState } from "react";
import { skills } from "../data/skills";
import { tools } from "../data/tools";
import { languages } from "../data/languages";
import { courses } from "../data/education";
import texturaFolder from "../assets/images/accesories/textura-beige.webp";
import paperEducation from "../assets/images/accesories/papel-azul.jpg";
import flecha from "../assets/images/accesories/flecha.png";
import trozoPapel4 from "../assets/images/accesories/trozo-papel-4.png";
import trozoPapel9 from "../assets/images/accesories/trozo-papel-9.png";
import trozoPapel8 from "../assets/images/accesories/trozo-papel-8.png";
import stamp2 from "../assets/images/accesories/stamp-3.png";
import stamp3 from "../assets/images/accesories/stamp-5.png";
import stamp4 from "../assets/images/accesories/stamp-4.png";
import decor1 from "../assets/images/accesories/decor-1.png";
import decor2 from "../assets/images/accesories/decor-4.png";
import decor3 from "../assets/images/accesories/decor-5.png";

function Education() {
  const [activePage, setActivePage] = useState(true);

  const handleClick = () => {
    setActivePage((prev) => !prev);
  };

  const [activeCourse, setActiveCourse] = useState(null);

  const toggleCourse = (courseName) => {
    setActiveCourse((prev) => (prev === courseName ? null : courseName));
  };

  return (
    <section
      className="
      relative
      h-full w-full
      bg-(--color-folder-2)
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

      <button
        className="
      relative
      top-50 left-0
      rotate-180
      z-30
      cursor-pointer
      transition-all duration-300
      hover:scale-107"
        onClick={handleClick}
      >
        <img
          src={flecha}
          alt=""
          className="
        w-30 h-15
        -rotate-12"
        />
      </button>
      <button
        className="
      relative
      top-50 left-320
      z-30
      cursor-pointer
      transition-all duration-300
      hover:scale-107"
        onClick={handleClick}
      >
        <img
          src={flecha}
          alt=""
          className="
        w-30 h-15
        -rotate-8"
        />
      </button>
      <motion.div
        className="
        w-full h-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className={`
          absolute
          inset-0
          w-full h-full
          
        `}
          initial={false}
          animate={{
            x: activePage ? "0%" : "1%",
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            zIndex: activePage ? 20 : 10,
          }}
        >
          <img
            src={paperEducation}
            alt=""
            className="
          absolute
          top-9 left-6
          w-[95%] h-full
          object-center
          rotate-2
          shadow-(--shadow-paper)"
          />
          <div
            className="
            relative
            w-full h-full"
          >
            <h2
              className="
            absolute
            top-20 left-170
            font-mono
            font-semibold
            text-(--color-text-vivid)
            text-2xl 
            drop-shadow-lg"
            >
              * Habilidades Técnicas
            </h2>
            <img
              src={decor3}
              alt=""
              className="
              absolute
              top-27 left-170
              w-75 h-7"
            />
            <img
              src={decor2}
              alt=""
              className="
              absolute
              top-100 left-20
              opacity-70
              w-50 h-55
              rotate-12"
            />
            <div
              className="
                absolute
                top-14 left-34
                w-100 h-100
                rotate-4
                z-10
                "
            >
              <img
                src={trozoPapel4}
                alt=""
                className="
                  w-100 h-100
                  shadow-(--shadow-post-it)"
              />
              <ul
                className="
                  absolute
                  top-23 left-25
                  group
                  flex-1
                  w-auto h-auto
                  m-2 md:m-4
                  py-4
                  font-body
                  text-(--color-text-vivid)"
              >
                <h4
                  className="
                    pb-4 px-8
                    text-lg
                    "
                >
                  Tecnologías
                </h4>
                {skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="
                      group
                      relative 
                      flex items-center 
                      gap-4 mb-4 ml-2
                      transition"
                  >
                    <span
                      className="
                    absolute 
                    -left-5
                    w-2 h-2
                    bg-(--color-3)
                    rounded-full
                    transition-all duration-300
                    group-hover:scale-125
                    group-hover:shadow-[0_0_6px_rgba(164,93,68,0.8),0_0_12px_rgba(164,93,68,0.6)]"
                    />
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="
                        w-6 h-6"
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="
                absolute
                bottom-2 left-130
                w-120 h-90
                rotate-2"
            >
              <img
                src={trozoPapel9}
                alt=""
                className="
                w-120 h-90"
              />
              <ul
                className="
                  absolute
                  top-6 left-20
                  group
                  flex-1
                  w-auto h-auto
                  m-2 md:m-6
                  py-4
                  font-heading
                  font-semibold
                  text-(--color-text-dark)"
              >
                <h4
                  className="
                    pb-4 px-8
                    text-lg
                    italic"
                >
                  Herramientas
                </h4>
                {tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="
                      group
                      relative 
                      flex items-center
                      gap-4 mb-4 ml-2
                      transition"
                  >
                    <span
                      className="
                        absolute -left-5
                        w-2 h-2
                        bg-(--color-3)
                        rounded-full
                        transition-all duration-300
                        group-hover:scale-125
                        group-hover:shadow-[0_0_6px_rgba(164,93,68,0.8),0_0_12px_rgba(164,93,68,0.6)]"
                    />
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-6 h-6 opacity-80"
                    />
                    <span>{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="
                absolute
                top-25 right-36
                w-100 h-100
                -rotate-10"
            >
              <img
                src={trozoPapel8}
                alt=""
                className="
                w-100 h-100
                shadow-(--shadow-side-post-it)"
              />
              <img
                src={stamp2}
                alt=""
                className="
              absolute
              top-1 left-80
              w-25 h-25
              rotate-14"
              />
              <ul
                className="
                  absolute
                  top-12 left-20
                  group
                  flex-1
                  w-auto h-auto
                  m-2 md:m-4
                  py-4
                  rotate-3
                  font-body"
              >
                <h4
                  className="
                    pb-6
                    text-xl
                    font-semibold
                    text-(--color-text-light)"
                >
                  Idiomas
                </h4>
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="
                      group
                      relative 
                      flex items-center
                      gap-4 mb-6 ml-2
                      text-(--color-text-light)
                      font-medium
                      transition"
                  >
                    <span
                      className="
                        absolute -left-5
                        w-2 h-2
                        bg-(--color-3)
                        rounded-full
                        transition-all duration-300
                        group-hover:scale-125
                        group-hover:shadow-[0_0_6px_rgba(164,93,68,0.8),0_0_12px_rgba(164,93,68,0.6)]"
                    />
                    <img
                      src={language.icon}
                      alt={language.name}
                      className="w-6 h-6"
                    />
                    <span>
                      {language.name}: {language.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`
          absolute
          inset-0
          w-full h-full
          `}
          initial={false}
          animate={{
            x: activePage ? "1%" : "0%",
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            zIndex: activePage ? 10 : 20,
          }}
        >
          <img
            src={paperEducation}
            alt=""
            className="
            absolute
            top-8 left-8
            w-[95%] h-full
            object-center
            -rotate-1
            shadow-(--shadow-paper)"
          />

          <motion.div
            className="
            relative
            w-full h-full"
          >
            <img
              src={stamp3}
              alt=""
              className="
              absolute
              top-14 left-24
              w-25 h-25
              rotate-24
              z-40"
            />
            <img
              src={stamp4}
              alt=""
              className="
              absolute
              bottom-8 right-24
              w-45 h-20
              -rotate-34
              z-40"
            />
            <img
              src={decor1}
              alt=""
              className="
              absolute
              top-90 left-14
              w-45 h-65
              -rotate-24
              z-40"
            />
            <div
              className="
              absolute
              top-20 left-40
              w-[80%] h-[80%]
              bg-(--color-4)/70
              rounded-xl"
            >
              <h3
                className="
                text-start 
                mt-8 ml-40
                text-lg sm:text-2xl md:text-3xl
                text-(--color-text-dark) 
                font-mono"
              >
                EDUCACIÓN
              </h3>
              <div
                className="
              flex flex-row
              justify-center"
              >
                <ul
                  className="
                  text-(--color-text-dark)
                  w-full h-full
                  mt-10 mx-10
                  font-mono"
                >
                  {courses.map((course) => {
                    const isOpen = activeCourse === course.name;
                    return (
                      <li
                        key={course.name}
                        className="
                        bg-white/10 backdrop-blur-xs
                        border-b border-white/10 
                        rounded-lg 
                        px-4 
                        py-3 md:py-4 lg:py-5 xl:py-3
                        transition
                        hover:bg-white/20
                        m-2 lg:m-4 xl:m-2
                        "
                      >
                        <button
                          onClick={() => toggleCourse(course.name)}
                          aria-expanded={isOpen}
                          aria-controls={`course-${course.name}`}
                          className="
                          w-full 
                          flex justify-between items-center text-left"
                        >
                          <div
                            id={`course-${course.name}`}
                            className="font-sm md:font-md"
                          >
                            {course.name}
                          </div>
                          <span
                            className={`
                            transition-transform duration-300
                            ${isOpen ? "rotate-180" : ""}`}
                          >
                            ▼
                          </span>
                        </button>
                        <div
                          className={`
                          overflow-hidden transition-all duration-300 ease-in-out
                          ${isOpen ? "h-auto opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                        >
                          <div className="text-sm opacity-80 translate-y-1">
                            <p>{course.institute}</p>
                            <p>Fecha: {course.date}</p>
                            <a
                              href={course.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Ver certificado de ${course.name}`}
                              className="underline hover:text-(--color-3) transition"
                            >
                              Ver Certificado
                            </a>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div
                  className="
                mx-10
                font-body"
                >
                  <h4
                    className="
                    text-(--color-base)
                    text-center
                    font-semibold
                    text-base md:text-lg lg:text-xl
                    mt-2 mb-8"
                  >
                    Experiencia previa a la programación
                  </h4>
                  <p
                    className="
                    text-(--color-base)
                    text-sm/6 md:text-base/7 lg:text-lg/8
                    text-justify"
                  >
                    Antes de enfocarme en el desarrollo web, trabajé durante 9
                    años en el área de la salud, donde obtuve dos títulos de
                    grado.
                    <br />
                    Esta etapa me permitió desarrollar habilidades como el
                    trabajo en equipo, la organización y la resolución de
                    problemas en entornos exigentes.
                    <br />
                    Actualmente estoy enfocada en crecer como desarrolladora,
                    incorporando nuevas tecnologías y aplicando estas
                    habilidades en proyectos reales.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;
