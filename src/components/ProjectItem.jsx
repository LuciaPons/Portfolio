import PropTypes from "prop-types";
import fondo1 from "../assets/images/accesories/Fondo-1.webp";
import clip2 from "../assets/images/accesories/clip-2.webp";
import { useState } from "react";

export default function ProjectItem({ project }) {
  const [activeDescription, setActiveDescription] = useState(null);

  const isOpen = activeDescription === project.name;

  const toggleDescription = (projectDescription) => {
    setActiveDescription((prev) =>
      prev === projectDescription ? null : projectDescription,
    );
  };

  return (
    <div
      className="
      relative 
      transition-all duration-300
      md:hover:scale-101"
    >
      <img
        src={clip2}
        alt=""
        className="
        absolute
        top-0 
        left-5
        w-4
        h-4
        
        md:left-50
        md:w-7
        md:h-7
        
        xl:left-70
        xl:w-8 
        xl:h-8
        z-20"
      />
      <div
        className="
        relative 
        h-25
        w-50

        md:h-45
        md:w-75

        xl:h-60 
        xl:w-100
        overflow-hidden
        z-10 p-2
        bg-white"
        style={{
          rotate: project.rotate,
        }}
      >
        <img
          src={project.img}
          alt={project.name}
          className="
            w-full h-full 
            object-cover
            opacity-70"
        />
        <div
          className="
          absolute inset-0
          bg-linear-to-t from-white/70 to-transparent"
        />
      </div>
      <div
        className="
        w-60
        h-30

        md:w-75
        md:h-60
        
        xl:w-95 
        border-t-2 border-(--color-3)
        p-4
        rounded-b-lg"
      >
        <img
          src={fondo1}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="
        absolute inset-0
        w-95 h-full
        rounded-lg
        overflow-hidden 
        object-cover
        opacity-70
        z-0"
        />
        <h3
          className="
          hidden
          md:block
          md:text-xs
        xl:text-base

        font-semibold 
        mb-3
        font-mono
        text-(--color-text-dark)
        opacity-90"
        >
          {project.name}
        </h3>
        <p
          className="
        hidden
        md:block
        md:text-sm 
        text-(--color-text-dark) 
        opacity-90"
        >
          {project.description}
        </p>
        <div
          className="
        relative
        md:hidden
        text-(--color-text-dark)
        z-60"
        >
          <button
            onClick={() => toggleDescription(project.name)}
            aria-expanded={isOpen}
            aria-controls={`course-${project.id}`}
            className="
          w-full
          flex 
          justify-between 
          items-center 
          text-left
          cursor-pointer"
          >
            <div
              className="
            text-xs "
            >
              {project.name}
            </div>
            <span
              className={`
            text-sm transition-transform duration-300
            ${isOpen ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>
          <div
            className={`
              absolute
              left-0
              top-full
              w-full
              overflow-hidden 
              transition-all 
              duration-300 
              ease-in-out
            ${
              isOpen
                ? "max-h-40 opacity-100 bg-(--color-folder-2) mt-1 p-2 rounded-lg"
                : "max-h-0 opacity-0"
            }`}
          >
            <p
              id={`course-${project.name}`}
              className="
              text-xs
              text-(--color-text-dark) 
              opacity-90"
            >
              {project.description}
            </p>
          </div>
        </div>
        <div
          className=" 
        flex  
        justify-between
        items-center
        pt-2"
        >
          <p
            className="
            text-start
            text-(--color-text-dark)
            text-xs
            xl:text-sm
            font-mono
            opacity-80"
          >
            {project.tecnologies}
          </p>
          <div
            className="
          flex 
          gap-1
          md:gap-2"
          >
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
            p-1 z-40
            rounded-lg
            hover:bg-white/40
            transition-all duration-300"
            >
              <img
                src={project.linkIcon}
                aria-label={`Ver proyecto ${project.name}`}
                className="
                w-5
                h-5
                md:w-7 
                md:h-7"
              />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
            p-1 z-40
            rounded-lg
            hover:bg-white/40
            transition-all duration-300"
            >
              <img
                src={project.githubIcon}
                aria-label={`Ver repositorio de ${project.name} en GitHub`}
                className="
                w-5
                h-5
                md:w-7 
                md:h-7"
              />
            </a>
          </div>
        </div>
        <p
          className="
        text-xs 
        italic 
        text-zinc-800
        opacity-60"
        >
          Deployado en producción
        </p>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rotate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tecnologies: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    linkIcon: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
    githubIcon: PropTypes.string.isRequired,
  }).isRequired,
};
