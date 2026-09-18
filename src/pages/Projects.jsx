import { projects } from "../data/projects";
import { motion } from "motion/react";
import ProjectItem from "../components/ProjectItem";
import texturaFolder from "../assets/images/accesories/textura-beige.webp";
import paperProjects from "../assets/images/accesories/paper-projects.webp";
import decor12 from "../assets/images/accesories/decor-12.webp";
import decor11 from "../assets/images/accesories/decor-11.webp";

function Projects() {
  return (
    <section
      className="
      h-full
      bg-(--color-folder-3)
      md:overflow-hidden"
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
        top-2
        w-full
        h-full
        
        md:top-8 
        md:left-6
        md:w-[95%] 
        md:h-full
        
        xl:left-10
        opacity-70
        object-fit
        shadow-(--shadow-paper)"
        />
        <div
          className="
          relative
          top-4
          w-full 
          h-full

          md:h-[90%]
          md:top-4
          xl:h-full
          
          flex 
          flex-col 
          md:flex-row
          md:justify-center 
          items-center
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
          top-3
          left-1
          w-25
          h-25

          md:top-9 
          md:left-10
          md:w-40
          md:h-40

          xl:w-50
          xl:h-50
        absolute
        rotate-30"
        />
        <img
          src={decor12}
          alt=""
          className="
          bottom-0
          right-2
          w-40
          h-60
          
          md:right-10
          md:bottom-0 
          md:w-60
          md:h-80
          absolute
          opacity-70
          rotate-2"
        />
      </motion.div>
    </section>
  );
}

export default Projects;
