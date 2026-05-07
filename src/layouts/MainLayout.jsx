import Navbar from '../components/Navbar';
import Home from '../sections/Home';
import About from '../sections/About';
import Education from '../sections/Education';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <section id='home' className='min-h-[40vh]'>
                    <Home />
                </section>
                <section id='about' className='min-h-[40vh]'>
                    <About />
                </section>
                <section id='education' className='min-h-[50vh]'>
                    <Education />
                </section>
                <section id='projects' className='min-h-[50vh]'>
                    <Projects />
                </section>
                <section id='contact' className='min-h-[50vh]'>
                    <Contact />
                </section>
            </main>
        </>
    );
}