import habita from "../assets/images/projects/habita.webp";
import portfolioRodrigo from "../assets/images/projects/portfolioRodrigo.webp";
import labsistente from "../assets/images/projects/labsistente.webp";
import linkIcon from "../assets/icons/icon-link.png";
import github3Icon from "../assets/icons/icon-github-3.png";

export const projects = [
  {
    id: 1,
    name: "Portfolio web - Proyecto para cliente",
    img: portfolioRodrigo,
    alt: "Vista de portfolio web de Rodrigo Pons",
    rotate: "2deg",
    description:
      "Aplicación desarrollada con React y Tailwind CSS, utilizando React Router y Motion para navegación, componentes e interacciones. Implementación de SEO técnico y adaptación de la interfaz a distintos dispositivos.",
    tecnologies: "React . Tailwind . Motion . SEO",
    linkUrl: "https://rodrigoponsaudio.com/",
    linkIcon: linkIcon,
    githubIcon: github3Icon,
  },
  {
    id: 2,
    name: "Labsistente - Aplicación para técnicos en Anatomía Patológica",
    img: labsistente,
    alt: "Vista de aplicación para Técnicos en Anatomía Patológica",
    rotate: "-3deg",
    description:
      "Aplicación web mobile-first desarrollada con React para asistir en el troubleshooting de tinciones H&E. Implementación de API/backend e integración con Gemini, manejo de estados, errores y respuestas.",
    tecnologies: "React . APIs . Integración IA",
    linkUrl: "https://lab-ap-eosin.vercel.app/",
    linkIcon: linkIcon,
    githubUrl: "https://github.com/LuciaPons/lab-ap",
    githubIcon: github3Icon,
  },
  {
    id: 3,
    name: "Habita - Aplicación de planificación de ahorro para vivienda",
    img: habita,
    alt: "Vista del panel principal de Habita para planificar y seguir el ahorro para vivienda",
    rotate: "4deg",
    description:
      "Aplicación web desarrollada con React para planificar y hacer seguimiento del ahorro para vivienda. Incluye registro de aportes, visualización del progreso, historial, simulación de escenarios y autenticación con persistencia de datos en Firebase.",
    tecnologies: "React . Tailwind CSS . Firebase . React Router",
    linkUrl: "https://habita-zeta.vercel.app/bienvenida",
    linkIcon: linkIcon,
    githubUrl: "https://github.com/LuciaPons/habita.git",
    githubIcon: github3Icon,
  },
];
