import clip from '../assets/img/clip.png';

function About() {
    return (
        <section 
        id='about'
        className="
        relative
        bg-[#DBC8B3]/60
        rounded-xl
        shadow-lg
        flex items-center justify-center
        min-h-[60vh] md:min-h-[80vh] 
        mx-2 lg:mx-10 md:mx-10
        mb-14 md:mt-20
        py-20">
            <div className="
            absolute
            w-[80%] md:w-[90%] max-w-[900px]
            h-[370px] md:h-[400px]
            bg-(--color-4)
            rounded-lg
            -rotate-2
            translate-x-[-20px] 
            translate-y-[4px] md:translate-y-[10px]
            z-0
            shadow-[0_15px_40px_rgba(0,0,0,0.25)]
            hover:rotate-0
            transition-all duration-500" />
            <div className="
            absolute
            w-[80%] md:w-[90%] max-w-[900px]
            h-[370px] md:h-[400px]
            bg-(--color-2)
            rounded-lg
            rotate-2
            translate-x-[20px] 
            translate-y-[8px] md:translate-y-[20px]
            z-0
            shadow-[0_15px_40px_rgba(0,0,0,0.25)]
            hover:rotate-0
            transition-all duration-500" />
            <div className="
            group
            relative
            w-[80%] md:w-[90%] max-w-[900px]
            h-[350px]
            bg-(--color-base)
            border-4 border-double border-(--color-4)
            rounded-lg
            shadow-[0_8px_30px_rgba(0,0,0,0.2)]
            p-6
            z-10">
                <img 
                src={clip} 
                alt="Clip decorativo sujetando la sección acerca de mí" 
                className="
                absolute
                w-[180px] md:w-[240px] 
                h-[90px] md:h-[140px]
                -top-10 md:-top-20 left-1/2 
                -translate-x-1/2
                -translate-y-6
                -rotate-2
                drop-shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                transition-all duration-300
                group-hover:rotate-0"/>
                <div className="
                my-2 md:my-6
                w-full text-justify
                space-y-1 md:space-y-4
                text-xs md:text-base lg:text-lg
                text-(--color-3)">
                    <h2 className='
                    text-sm md:text-lg lg:text-xl
                    font-semibold'>
                        Acerca de mí:
                    </h2>
                    <p className="indent-2 md:indent-4">
                        Soy desarrolladora Frontend con experiencia en la creación de aplicaciones web con React.
                        Trabajo con JavaScript, React Router, Context API y Firebase para desarrollar interfaces dinámicas y funcionales.
                    </p>
                    <p className="indent-2 md:indent-4">
                        Desarrollé un e-commerce completo con autenticación de usuarios, gestión de carrito y filtrado de productos, aplicando buenas prácticas y organización de código.
                        Busco seguir creciendo en el desarrollo frontend y aportar en proyectos reales.
                    </p>
                    <p className="indent-2 md:indent-4">
                        Enfocada en seguir mejorando mis habilidades, crecer profesionalmente dentro del desarrollo web e interesada en oportunidades donde pueda aportar y seguir aprendiendo en equipo.
                    </p>
                </div>
            </div>

    </section>
  );
}

export default About;