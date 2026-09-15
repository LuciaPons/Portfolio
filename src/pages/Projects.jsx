import { projects } from "../data/projects";
import { motion } from "motion/react";
import ProjectItem from "../components/ProjectItem";
import texturaFolder from "../assets/images/accesories/textura-beige.webp";
import paperProjects from "../assets/images/accesories/paper-projects.jpg";
import decor12 from "../assets/images/accesories/decor-12.png";
import decor11 from "../assets/images/accesories/decor-11.png";

function Projects() {
  return (
    <section
      className="
      h-full
      bg-(--color-folder-3)
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
          src={paperProjects}
          alt=""
          className="
        absolute
        top-8 left-10
        w-[95%] h-full
        opacity-70
        object-fit
        shadow-(--shadow-paper)"
        />
        <div
          className="
          relative
          w-full h-full
          top-4
        flex flex-col lg:flex-row
        justify-center items-center
        gap-4 
        z-10"
        >
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
        <img
          src={decor11}
          alt=""
          className="
        w-50
        h-50
        absolute
        top-9 left-10
        rotate-30"
        />
        <img
          src={decor12}
          alt=""
          className="
        w-60
        h-80
        absolute
        bottom-0 right-10
        opacity-70
        rotate-2"
        />
      </motion.div>
    </section>
  );
}

export default Projects;
