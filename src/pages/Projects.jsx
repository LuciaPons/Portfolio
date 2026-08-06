import zonaLimite from '../assets/img/proyecto-zona-limite.webp';
import linkIcon from '../assets/icons/icon-link.png';
import github3Icon from '../assets/icons/icon-github-3.png';
import fondo1 from '../assets/img/Fondo-1.jpeg';
import tape2 from '../assets/img/Tape-2.png';

function Projects() {

    const projects = [
        {
            name: "Zona Límite", 
            img: zonaLimite , 
            description: "Aplicación e-commerce desarrollada con React y Firebase, que incluye autenticación de usuarios, gestión de carrito y filtrado dinámico de productos. Implementa manejo de estado y navegación con React Router.", 
            tecnologies: "React . Firebase . JavaScript",
            linkUrl: "https://proyectoreact-sand.vercel.app/",
            linkIcon: linkIcon,
            githubUrl: "https://github.com/LuciaPons/proyectoreact", 
            githubIcon: github3Icon,
        },
        
    ];

    return(
        <section 
        id='projects'
        className="
        px-8 
        py-2 md:py-6 
        mb-8">
            <div className='
            relative
            flex justify-center items-center
            h-[14vh] md:h-[20vh]'>
                <div className="
                absolute
                top-[24%] md:top-[35px]
                left-[8%] md:left-[25%]
                w-[30px] md:w-[120px] 
                h-[16px]
                bg-black/30
                blur-md
                rounded-full
                -rotate-6
                z-0
                " />
                <div className="
                absolute
                top-[24%] md:top-[35px]
                right-[8%] md:right-[25%]
                w-[30px] md:w-[120px] 
                h-[16px]
                bg-black/30
                blur-md
                rounded-full
                rotate-6
                z-0
                " />
                <img 
                    src={tape2} 
                    alt=""
                    className='
                    absolute
                    -top-1/2 md:top-0
                    left-1/2
                    -translate-x-1/2
                    h-[20vh] md:h-[8vh] 
                    w-[90vw] md:w-[50vw]
                    object-cover
                    drop-shadow-lg
                    z-10
                    rotate-[-0.5deg]
                    constrast-95
                    opacity-95' />
                <h2 className="
                absolute
                left-1/2 
                top-0 md:top-[10%]
                -translate-x-1/2 -translate-y-1/2
                text-center
                text-[var(--color-2)]
                text-base md:text-3xl lg:text-4xl 
                font-semibold
                z-20 pt-6
                rotate-[-0.5deg]
                whitespace-nowrap">
                    Proyectos Destacados
                </h2>
            </div>
            <div className="
            flex flex-col lg:flex-row
            justify-center items-center
            gap-8 
            mb-4 md:mb-12">
                {projects.map((project) => (
                    <div
                    key={project.name}
                    className='
                    relative group
                    rounded-2xl
                    overflow-hidden
                    min-h-[450px] 
                    w-[50wh] md:w-[60vw]
                    shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                    transition-all duration-300
                    hover:-translate-y-2'
                        >
                        <img 
                        src={fondo1} 
                        alt=""
                        aria-hidden="true"
                        loading="lazy" 
                        className='
                        absolute inset-0
                        w-full h-full 
                        object-cover
                        opacity-70
                        z-0'/>
                        <div className="
                        relative 
                        h-64 
                        overflow-hidden
                        z-10 p-6">
                            <img 
                            src={project.img} 
                            alt={project.name} 
                            className="
                            w-full h-full 
                            object-cover
                            rounded-lg
                            opacity-70
                            transition duration-500
                            group-hover:scale-105"/>
                            <div className="
                            absolute inset-0
                            bg-gradient-to-t from-white/70 to-transparent"/>
                        </div>
                        <div className="
                        p-6
                        border-t-2 border-[var(--color-2)]">
                            <h3 className="
                            text-xl font-semibold 
                            mb-3
                            text-[var(--color-3)]
                            opacity-90">
                                {project.name}
                            </h3>
                            <p className="
                            text-sm md:text-base
                            mb-4
                            text-[var(--color-text-dark)] opacity-90">
                                {project.description}
                            </p>
                            <div className='
                            flex flex-wrap
                            m-2'>
                                <span className='
                                text-base md:text-lg
                                text-[var(--color-text-dark)]
                                opacity-80'>
                                    {project.tecnologies}
                                </span>
                            </div>
                            <div className=" flex gap-4">
                                <a 
                                href={project.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                p-2 z-40
                                rounded-lg
                                hover:bg-white/40
                                transition-all duration-300">
                                    <img 
                                    src={project.linkIcon} 
                                    aria-label={`Ver proyecto ${project.name}`} 
                                    className="
                                    w-7 h-7"/>
                                </a>
                                <a 
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                p-2 z-40
                                rounded-lg
                                hover:bg-white/40
                                transition-all duration-300">
                                    <img 
                                    src={project.githubIcon} 
                                    aria-label={`Ver repositorio de ${project.name} en GitHub`} 
                                    className="
                                    w-7 h-7"/>
                                </a>
                            </div>
                            <p className="text-xs italic opacity-60">
                                    Deployado en producción
                            </p>
                        </div>
                    </div>
                ))}
            </div> 
            <div className='
            p-10 md:mx-40 lg:mx-60 my-8
            bg-[#DBC8B3]/70
            rounded-xl
            shadow-xl
            hover:rotate-[-1deg]
            transition-all
            duration-300'>
                <h4 className="
                    text-lg font-semibold 
                    mb-3
                    text-[var(--color-3)]
                    opacity-90">
                    Portfolio Personal
                </h4>
                <p className='
                text-sm md:text-base
                mb-4
                text-[var(--color-text-dark)] opacity-90'>
                    Portfolio SPA desarrollado con React y Tailwind CSS. Implementa navegación dinámica con IntersectionObserver, diseño responsive y componentes reutilizables enfocados en experiencia de usuario.
                </p>
                <p className='
                text-sm md:text-base
                text-[var(--color-text-dark)]
                opacity-80'>
                    React . Tailwind CSS . JavaScript
                </p>
                <a 
                href="https://github.com/LuciaPons/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver repositorio de Portfolio en GitHub"
                className='
                inline-flex
                items-center
                justify-center
                rounded-md
                hover:bg-white/40 t
                transition-all duration-300
                p-2
                z-40'>
                    <img 
                    src={github3Icon} 
                    alt=''
                    aria-hidden="true"
                    className="
                    w-7 h-7"/>
                </a>
            </div>
        </section>
    )
}

export default Projects;