import { motion, useAnimate } from "motion/react";
import { useState, useEffect } from "react";
import { skills } from "../data/skills";
import { tools } from "../data/tools";
import { languages } from "../data/languages";
import { courses } from "../data/education";
import texturaFolder from "../assets/images/accesories/textura-beige.webp";
import paperEducation from "../assets/images/accesories/paper-education.webp";
import decor4 from "../assets/images/accesories/decor-4.webp";
import paper2 from "../assets/images/accesories/paper-2.webp";
import paper3 from "../assets/images/accesories/paper-3.webp";
import paper4 from "../assets/images/accesories/paper-4.webp";
import decor5 from "../assets/images/accesories/decor-5.webp";
import decor6 from "../assets/images/accesories/decor-6.webp";
import decor7 from "../assets/images/accesories/decor-7.webp";
import decor8 from "../assets/images/accesories/decor-8.webp";
import decor9 from "../assets/images/accesories/decor-9.webp";
import decor10 from "../assets/images/accesories/decor-10.webp";

function Education() {
  const [activePage, setActivePage] = useState(true);

  const handleClick = () => {
    setActivePage((prev) => !prev);
  };

  const [activeCourse, setActiveCourse] = useState(null);

  const toggleCourse = (courseName) => {
    setActiveCourse((prev) => (prev === courseName ? null : courseName));
  };

  const [scope, animate] = useAnimate();

  const handleMouseEnter = async () => {
    await animate(
      scope.current,
      { clipPath: "inset(0 100% 0 0)" },
      { duration: 0.1 },
    );

    await animate(
      scope.current,
      { clipPath: "inset(0 0% 0 0)" },
      { duration: 0.9, ease: "easeInOut" },
    );
  };

  const handleMouseLeave = () => {
    animate(scope.current, { clipPath: "inset(0 0% 0 0)" }, { duration: 0 });
  };

  useEffect(() => {
    document.title = "Educación | Lucía Pons";

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Formación, habilidades y herramientas que utilizo como desarrolladora frontend.",
      );
  }, []);

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
      top-70
      left-8

      md:top-50 
      md:left-6

      xl:top-50 
      xl:left-0
      rotate-180
      z-30
      cursor-pointer
      transition-all duration-300
      "
        onClick={handleClick}
      >
        <img
          src={decor4}
          alt=""
          className="
          w-15
          h-10

          md:w-20
          md:h-10
        
          xl:w-30 
          xl:h-15
        -rotate-12
        hover:-rotate-2"
        />
      </button>
      <button
        className="
      relative
      hidden

      md:block
      md:top-50 
      md:left-234

      xl:top-50 
      xl:left-345

      z-30
      cursor-pointer
      "
        onClick={handleClick}
      >
        <img
          src={decor4}
          alt=""
          className="
          md:w-20
          md:h-10
        
          xl:w-30 
          xl:h-15
        -rotate-8
        hover:rotate-8"
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
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="
              absolute
              w-90
              h-20
              flex flex-col
              top-12
              left-15
              
              md:top-15
              md:left-100

              xl:top-18
              xl:left-150"
            >
              <h2
                className="
                text-base
              
                md:text-xl
                
                font-mono
                font-semibold
                text-(--color-text-vivid)
                drop-shadow-lg
                cursor-default"
              >
                * Habilidades Técnicas
              </h2>
              <motion.img
                ref={scope}
                src={decor6}
                alt=""
                className="
                w-45 
                h-4
           
                md:w-55 
                md:h-5

                xl:w-75 
                xl:h-7"
              />
            </div>
            <img
              src={decor5}
              alt=""
              className="
              absolute
              w-25
              h-30
              top-150
              left-10

              md:w-40
              md:h-45
              md:top-80
              md:left-14

              xl:top-100 
              xl:left-20
              xl:w-45 
              xl:h-50
              opacity-70
              rotate-12
              hover:rotate-8"
            />
            <div
              className="
                absolute
                w-60
                h-60
                top-22
                left-24
                
                md:top-20
                md:left-28
                md:w-80
                md:h-80

                xl:top-14 
                xl:left-34
                xl:w-100 
                xl:h-100
                rotate-4
                z-10
                cursor-default"
            >
              <img
                src={paper2}
                alt=""
                className="
                w-60
                h-60

                md:w-80 
                md:h-80
                
                xl:w-100 
                xl:h-100
                shadow-(--shadow-post-it)"
              />
              <ul
                className="
                  absolute
                  group
                  flex-1
                  w-auto h-auto
                  top-10
                  left-14

                  md:top-12
                  md:left-20

                  xl:top-23 
                  xl:left-25
                  
                  m-1 md:m-4
                  py-4
                  font-body
                  text-(--color-text-vivid)"
              >
                <h4
                  className="
                    pb-4 px-8
                    text-base

                    md:text-lg
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
                      gap-2
                      md:gap-4 
                      md:mb-4 
                      mb-2
                      ml-2
                      transition
                      text-sm

                      md:text-lg"
                  >
                    <span
                      className="
                    absolute 
                    -left-5
                    w-2 h-2
                    bg-(--color-text-vivid)
                    rounded-full
                    transition-all duration-300
                    group-hover:scale-125
                    group-hover:shadow-(--glow-bullet-points)"
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
                left-12
                w-70 
                h-40
                bottom-60 
                
                md:bottom-2 
                md:left-85
                md:w-110 
                md:h-80
                
                xl:bottom-2 
                xl:left-130
                xl:w-120 
                xl:h-90
                rotate-2
                cursor-default"
            >
              <img
                src={paper3}
                alt=""
                className="
                w-70 
                h-50

                md:w-100 
                md:h-80
                
                xl:w-120 
                xl:h-90"
              />
              <h4
                className="
                absolute
                top-8
                left-10
                pb-2
                px-4

                md:top-14 
                md:left-20
                md:pb-4 
                md:px-8
                
                text-sm
                md:text-lg
                font-heading
                font-semibold
                text-(--color-text-dark)
                italic"
              >
                Librerías / Herramientas
              </h4>
              <ul
                className="
                  absolute
                  group
                  grid grid-cols-2
                  top-1
                  left-10
                  w-50
                  h-40
                  m-3
                  
                  md:top-6 
                  md:left-12
                  md:w-80 
                  md:h-60
                  md:m-4

                  xl:m-6
                  xl:left-18
                  
                  pt-10
                  font-heading
                  font-semibold
                  text-(--color-text-dark)"
              >
                {tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="
                      group
                      relative 
                      flex items-center
                      gap-3
                      text-xs
                      md:text-base
                      transition"
                  >
                    <span
                      className="
                        absolute -left-5
                        w-2 h-2
                        bg-(--color-text-vivid)
                        rounded-full
                        transition-all duration-300
                        group-hover:scale-125
                        group-hover:shadow-(--glow-bullet-points)"
                    />
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="
                      w-5
                      h-5
                      md:w-6 
                      md:h-6 
                      opacity-80"
                    />
                    <span>{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="
                absolute
                top-130
                right-1
                w-55
                h-55

                md:top-18
                md:right-20
                md:w-75
                md:h-75

                xl:top-25 
                xl:right-36
                xl:w-100 
                xl:h-100
                -rotate-10
                cursor-default"
            >
              <img
                src={paper4}
                alt=""
                className="
                w-55
                h-55
                
                md:w-80
                md:h-80

                xl:w-100 
                xl:h-100
                shadow-(--shadow-side-post-it)"
              />
              <img
                src={decor7}
                alt=""
                className="
              absolute
              top-4
              left-42
              w-12 
              h-12
              
              md:top-0
              md:left-60
              md:w-20 
              md:h-20

              xl:top-1 
              xl:left-80
              xl:w-25 
              xl:h-25
              rotate-14"
              />
              <ul
                className="
                  absolute
                  top-4 
                  left-8

                  md:top-10 
                  md:left-12

                  xl:top-12 
                  xl:left-20
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
                    font-semibold
                    text-(--color-text-light)
                    text-base

                    md:text-xl
                    "
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
                      gap-4 
                      mb-2
                      md:mb-6 
                      ml-2
                      text-(--color-text-light)
                      text-medium
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
                        group-hover:shadow-(--glow-bullet-points)"
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
              src={decor8}
              alt=""
              className="
              absolute
              top-14 
              left-10
              w-15
              h-15

              md:top-14 
              md:left-25
              md:w-20 
              md:h-20
              
              xl:top-14 
              xl:left-24
              xl:w-25 
              xl:h-25
              rotate-24
              z-40"
            />
            <img
              src={decor9}
              alt=""
              className="
              absolute
              w-35 
              h-10
              bottom-2
              -right-8
              -rotate-18
              
              md:w-45 
              md:h-20
              md:bottom-14
              md:right-30
              md:-rotate-30

              xl:bottom-8 
              xl:right-24
              xl:-rotate-34
              z-40"
            />
            <img
              src={decor10}
              alt=""
              className="
              absolute
              top-155
              left-8
              w-25
              h-40

              md:top-110 
              md:left-18
              md:w-35 
              md:h-55
              
              xl:top-90 
              xl:left-14
              xl:w-45 
              xl:h-65
              -rotate-24
              z-40
              hover:translate-y-2"
            />
            <div
              className="
              absolute
              top-15 
              left-15
              w-[80%]
              h-[95%]

              md:left-30
              md:w-[80%] 
              md:h-[80%]

              xl:left-40

              bg-(--color-4)/70
              rounded-xl"
            >
              <h3
                className="
                text-start 
                ml-20
                mt-8 
                text-xl
                
                md:ml-40
                md:text-3xl
                text-(--color-text-dark) 
                font-mono
                cursor-default"
              >
                EDUCACIÓN
              </h3>
              <div
                className="
              flex
              flex-col 
              md:flex-row
              justify-center
              "
              >
                <ul
                  className="
                  text-(--color-text-dark)
                  w-full h-full
                  mt-2
                  mx-8

                  md:mt-10 
                  md:mx-10
                  font-mono
                  "
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
                        py-2 
                        md:py-4 
                        lg:py-5 
                        xl:py-3
                        transition
                        hover:bg-white/20
                        m-2 lg:m-4 xl:m-2
                        cursor-pointer"
                      >
                        <button
                          onClick={() => toggleCourse(course.name)}
                          aria-expanded={isOpen}
                          aria-controls={`course-${course.name}`}
                          className="
                          w-[80%]
                          md:w-full 
                          flex justify-between items-center text-left
                          cursor-pointer"
                        >
                          <div
                            id={`course-${course.name}`}
                            className="text-xs md:text-base"
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
                           
                          overflow-hidden transition-all duration-300 ease-in-out z-30
                          ${isOpen ? "min-h-20 opacity-100 mt-1 md:mt-2" : "max-h-0 opacity-0"}`}
                        >
                          <div
                            className="
                          text-xs 
                          md:text-sm
                          opacity-80 
                          translate-y-1"
                          >
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
                  mx-4
                  md:mx-10
                  font-body
                  cursor-default"
                >
                  <h4
                    className="
                    text-(--color-base)
                    text-center
                    text-xs
                    mb-4

                    md:font-semibold
                    md:text-lg 
                    md:mb-8
                    lg:text-xl
                    mt-2 
                    "
                  >
                    Experiencia previa a la programación
                  </h4>
                  <p
                    className="
                    text-(--color-text-light)
                    text-xs/5 
                    md:text-base/7
                    lg:text-lg/8
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
