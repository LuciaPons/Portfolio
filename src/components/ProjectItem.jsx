import PropTypes from "prop-types";
import fondo1 from "../assets/img/Fondo-1.jpeg";
import clip2 from "../assets/images/accesories/clip-2.png";

export default function ProjectItem({ project }) {
  return (
    <div
      className="
    relative 
    transition-all duration-300
    hover:scale-101"
    >
      <img
        src={clip2}
        alt=""
        className="
        absolute
        top-0 left-70
      w-8 h-8
      z-20"
      />
      <div
        className="
        relative 
        h-60 w-100
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
        w-95 h-60
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
        text-sm 
        text-(--color-text-dark) 
        opacity-90"
        >
          {project.description}
        </p>
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
            text-sm
            font-mono
            opacity-80"
          >
            {project.tecnologies}
          </p>
          <div
            className="
          flex gap-2"
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
            w-7 h-7"
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
            w-7 h-7"
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
