import  htmlIcon from '../assets/icons/icon-html5.png';
import cssIcon from '../assets/icons/icon-css3.png';
import jsIcon from '../assets/icons/icon-javascript.png';
import reactIcon from '../assets/icons/icon-react-js.png';
import languageIcon from '../assets/icons/icon-language.png';
import gitIcon from '../assets/icons/icon-git.png';
import gitHub1Icon from '../assets/icons/icon-github-1.png';
import viteIcon from '../assets/icons/icon-vite.png';
import firebaseIcon from '../assets/icons/icon-firebase.png';
import tape1 from '../assets/img/Tape-1.png';
import foto1 from '../assets/img/Foto-1.png';
import pin1 from '../assets/img/pin-1.png';
import trazo1 from '../assets/img/Trazo-1.png';
import { useState } from 'react';

function Education() {

    const skills = [
        {name: "HTML", icon: htmlIcon },
        {name: "CSS", icon: cssIcon },
        {name: "JavaScript", icon: jsIcon },
        {name: "React", icon: reactIcon },
    ];

    const tools = [
        {name: "Git", icon: gitIcon},
        {name: "GitHub", icon: gitHub1Icon},
        {name: "Vite", icon: viteIcon},
        {name: "Firebase", icon: firebaseIcon},
    ]

    const languages = [
        {name: "Español", level: "Nativo", icon: languageIcon},
        {name: "Ingles", level: "B2", icon: languageIcon},
        {name: "Portugués", level: "Básico", icon: languageIcon},
    ]

    const courses = [
        {name: "Desarrollo Web", institute:"CoderHouse", date: "Agosto-Noviembre 2025", url: "https://pub.coderhouse.com/certificates/f7d4e09f-0d04-4e37-9bb8-b9817729c8cc?v=1"},
        {name: "Javascript", institute:"CoderHouse", date: "Noviembre-Enero 2025-2026", url: "https://pub.coderhouse.com/certificates/c86ea741-b8e6-4a6f-be44-8f76e9ebd059?v=1"},
        {name: "React JS", institute:"CoderHouse", date: "Enero-Abril 2026", url: "https://drive.google.com/file/d/10yssV0mpdEOoJiXcxmQyH7peqMgUqVSL/view"},
        {name: "Ingles", date: "2005-2011", url: "https://drive.google.com/file/d/1OV7nkeS-G8ifry3r1UH7SYKzYR_H6KWs/view"},
    ];

    const [activeCourse, setActiveCourse] = useState(null);

    const toggleCourse = (courseName) => {
        setActiveCourse((prev) => (prev === courseName ? null : courseName));
    };

    return (
        <section 
        id='education'
        className="
        my-10 md:my-10 lg:my-20
        grid grid-cols-1 
        xl:grid-cols-2
        items-start">
            <div className="
            flex flex-col
            max-w-[90%] 
            text-[var(--color-texto-1)]
            drop-shadow-xl
            p-2 
            m-6 md:m-4
            gap-2">
                <h2 className="
                text-start
                font-playfair
                font-bold
                text-[#4B2D23]
                text-xl md:text-2xl lg:text-3xl xl:text-4xl
                m-2 pl-16
                text-center
                drop-shadow-lg
                ">
                    Habilidades Técnicas
                </h2>
                <div className='
                inset-0 z-20'>
                    <div className='
                    relative
                    z-10
                    bg-[var(--color-1)]
                    min-h-[300px]
                    w-auto lg:w-full
                    flex flex-col 
                    flex-wrap
                    md:flex-row
                    justify-center
                    items-center md:items-start
                    p-6
                    rounded-lg
                    cursor-default
                    transition-all duration-300 ease-in-out'>
                        <img 
                        src={tape1} 
                        alt="Cinta decorativa"
                        className='
                        absolute z-20
                        w-24 md:w-28
                        -top-4 -right-8
                        lg:-top-4 lg:-right-10  
                        rotate-45' />
                        <img 
                        src={tape1} 
                        alt="Cinta decorativa"
                        className='
                        absolute z-20
                        w-24 md:w-28 
                        -bottom-4 -left-8
                        lg:-bottom-4 lg:-left-10  
                        rotate-45' />
                        <ul className='
                        group
                        flex-1
                        min-w-[250px]
                        m-2 md:m-4
                        px-6 py-4
                        rounded-lg
                        bg-[#D1BEA7]
                        shadow-lg'>
                            <h4 className='
                            pb-4
                            font-sm md:font-base
                            text-[var(--color-3)]
                            '>
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
                                font-extrasmall md:font-base
                                transition
                                ">
                                    <span className='
                                    absolute -left-[20px]
                                    w-2 h-2
                                    bg-[var(--color-3)]
                                    rounded-full
                                    transition-all duration-300
                                    group-hover:scale-125
                                    group-hover:shadow-[0_0_6px_rgba(164,93,68,0.8),0_0_12px_rgba(164,93,68,0.6)]
                                    group-hover:shadow-[0_0_10px_rgba(164,93,68,0.6)]
                                    '/>
                                    <img src={skill.icon} alt={skill.name} className="
                                    w-6 h-6" />
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className='
                        group 
                        flex-1
                        min-w-[250px]
                        m-4
                        px-6 py-4
                        rounded-lg
                        bg-[#D1BEA7]
                        shadow-lg'>
                            <h4 className='
                            pb-4
                            font-small md:font-medium
                            text-[var(--color-3)]
                            '>
                                Herramientas
                            </h4>
                            {tools.map((tool) => (
                                <li 
                                key={tool.name}
                                className='
                                group
                                relative 
                                flex items-center
                                gap-4 mb-4 ml-2
                                font-small md:font-medium
                                transition'>
                                    <span className='
                                    absolute -left-[20px]
                                    w-2 h-2
                                    bg-[var(--color-3)]
                                    rounded-full
                                    transition-all duration-300
                                    group-hover:scale-125
                                    group-hover:shadow-[0_0_6px_rgba(164,93,68,0.8),0_0_12px_rgba(164,93,68,0.6)]
                                    group-hover:shadow-[0_0_10px_rgba(164,93,68,0.6)]'/>
                                    <img src={tool.icon} alt={tool.name} className='w-6 h-6' />
                                    <span>{tool.name}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className='
                        group
                        flex-1
                        min-w-[250px]
                        m-4
                        px-6 py-4
                        rounded-lg
                        bg-[#D1BEA7]
                        shadow-lg'>
                            <h4 className='
                            pb-4
                            font-small md:font-medium
                            text-[var(--color-3)]
                            '>
                                Idiomas
                            </h4>
                            {languages.map((language) => (
                                <li
                                key={language.name}
                                className='
                                group
                                relative 
                                flex items-center
                                gap-4 mb-4 ml-2
                                font-small md:font-medium
                                transition'>
                                    <span className='
                                    absolute -left-[20px]
                                    w-2 h-2
                                    bg-[var(--color-3)]
                                    rounded-full
                                    transition-all duration-300
                                    group-hover:scale-125
                                    group-hover:shadow-[0_0_6px_rgba(164,93,68,0.8),0_0_12px_rgba(164,93,68,0.6)]
                                    group-hover:shadow-[0_0_10px_rgba(164,93,68,0.6)]'/>
                                    <img src={language.icon} alt={language.name} className='w-6 h-6' />
                                    <span>{language.name}: {language.level}</span>  
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='
                flex justify-center
                w-auto
                mt-20 mx-[8%]
                py-8
                bg-[#DBC8B3]/70
                rounded-xl'>
                    <div className="
                    group
                    relative
                    bg-[#B7A99A]/70
                    py-6 px-6 md:px-8
                    border-4
                    rounded-lg
                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    rotate-[-2deg]
                    hover:rotate-[2deg]
                    transition-all duration-300">
                        <img 
                        src={pin1}
                        alt='Pin decorativo sobre foto'
                        className="
                        absolute
                        -top-6 left-1/2
                        -translate-x-8
                        w-24
                        opacity-80
                        drop-shadow-lg
                        rotate-[8deg]
                        z-20
                        group-hover:-translate-y-2
                        transition-all duration-300"/>
                        <img 
                        src={foto1}
                        alt='Foto personal'
                        loading="lazy"
                        className="
                        w-[220px] md:w-[280px]
                        rounded-md
                        object-cover
                        opacity-90"
                        />
                    </div>
                </div>
            </div>
            <div className="
            flex flex-col 
            gap-2 md:gap-6
            bg-[var(--color-4)]
            py-6 px-10 
            lg:p-20 xl:p-10
            m-6 md:mr-8 md:mt-6
            rounded-lg
            shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                    <h3 className="
                    text-center 
                    text-lg sm:text-2xl md:text-3xl
                    text-[var(--color-base)] 
                    font-playfair">
                        EDUCACIÓN
                    </h3>
                    <ul className="
                    text-[var(--color-base)]
                    mt-7">
                        {courses.map((course) => {
                            const isOpen = activeCourse === course.name;
                            return (
                                <li key={course.name} className='
                                bg-white/10 backdrop-blur-sm
                                border-b border-white/10 
                                rounded-lg 
                                px-4 
                                py-3 md:py-4 lg:py-5 xl:py-3
                                transition
                                hover:bg-white/20
                                m-2 lg:m-4 xl:m-2
                                '>
                                    <button
                                    onClick={() => toggleCourse(course.name)}
                                    aria-expanded={isOpen}
                                    aria-controls={`course-${course.name}`}
                                    className='
                                    w-full 
                                    flex justify-between items-center text-left'>
                                        <div 
                                        id={`course-${course.name}`}
                                        className='font-sm md:font-md'>{course.name}</div>
                                        <span className={`
                                        transition-transform duration-300
                                        ${isOpen ? "rotate-180" : ""}`}>
                                            ▼
                                        </span>
                                    </button>
                                    <div className={`
                                        overflow-hidden transition-all duration-300 ease-in-out
                                        ${isOpen ? "h-auto opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                                        <div className='text-sm opacity-80 translate-y-1'>
                                            <p>{course.institute}</p>
                                            <p>Fecha: {course.date}</p>
                                            <a 
                                            href={course.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Ver certificado de ${course.name}`}
                                            className="underline hover:text-[var(--color-3)] transition">
                                                Ver Certificado
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            );
                        })} 
                    </ul>
                
                <div>
                    <h4 className='
                    text-[var(--color-base)]
                    text-center
                    font-playfair
                    font-semibold
                    text-base md:text-lg lg:text-xl
                    mt-8 mb-8'>
                        Experiencia previa a la programación
                    </h4>
                    <p className="
                    text-[var(--color-base)]
                    text-sm/6 md:text-base/7 lg:text-lg/8
                    m-4
                    text-justify">
                        Antes de enfocarme en el desarrollo web, trabajé durante 9 años en el área de la salud, donde obtuve dos títulos de grado.<br/>
                        Esta etapa me permitió desarrollar habilidades como el trabajo en equipo, la organización y la resolución de problemas en entornos exigentes.<br/>
                        Actualmente estoy enfocada en crecer como desarrolladora, incorporando nuevas tecnologías y aplicando estas habilidades en proyectos reales.

                    </p>
                    <img 
                    src={trazo1} 
                    alt="Trazo decorativa estilo dibujado a mano"
                    className="
                    w-[80%] 
                    mx-auto 
                    block" />
                </div>
            </div>
        </section>
    )
}

export default Education;