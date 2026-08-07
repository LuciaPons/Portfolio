import corkBoard from '../assets/img/Cork-board.webp';
import colorPalette from '../assets/img/Paleta-colores.png';
import pin1 from '../assets/img/pin-1.png';

export default function Home() {
    return(
        <section 
        id='home'
        className='
        shadow-[0_8px_30px_rgba(0,0,0,0.2)]'>
            <div className="
            relative
            flex items-center justify-start
            h-[30vh] md:h-[40vh] 
            my-4 md:my-8
            overflow-hidden
            shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                <img 
                src={corkBoard} 
                alt="Fondo tipo tablero de corcho"
                loading='lazy'
                className='
                absolute 
                w-full h-full
                object-cover
                opacity-75' />
                <div className='
                relative z-10
                mx-10'>
                    <h1 className="
                    text-3xl md:text-5xl
                    font-semibold
                    font-playfair
                    text-(--color-text-dark)
                    text-center
                    leading-none
                    drop-shadow-lg">
                        PORTFOLIO
                    </h1>
                    <h2 className='
                    text-2xl md:text-4xl
                    text-(--color-text-dark)
                    drop-shadow-lg'>
                        Lucía Pons
                    </h2>
                    <p className='
                    text-base md:text-xl
                    text-(--color-text-dark)
                    drop-shadow-lg'>
                        Frontend Develover
                    </p>
                </div>
            </div>
            <div className='
            absolute
            right-[-26px] md:right-[-20px]
            top-[32%] md:top-[40%]
            -translate-y-1/2
            rotate-90
            z-20'>
                <div 
                aria-hidden="true"
                className='relative group mr-6 '>
                    <img 
                    src={colorPalette} 
                    alt="Paleta de colores del diseño del portfolio" 
                    className='
                    w-[160px] md:w-[280px]
                    shadow-[0_10px_25px_rgba(0,0,0,0.3)]
                    rotate-6
                    rounded-lg
                    opacity-90
                    transition-all duration-300 ease-out
                    group-hover:rotate-1'/>
                    <img 
                    src={pin1} 
                    alt="Pin decorativo sobre la paleta de colores" 
                    className='
                    absolute
                    top-4 md:top-6 
                    left-[-2%] 
                    -translate-x-1/3 -translate-y-1/3
                    w-20 md:w-15 
                    h-12 md:h-14
                    rotate-[-60deg]
                    z-30
                    drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]
                    transition-all duration-300 ease-out
                    group-hover:rotate-[-40deg]
                    group-hover:scale-110'/>
                </div>
            </div>
        </section>
    );
}