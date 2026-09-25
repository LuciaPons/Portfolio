import zonaLimite from "../assets/images/projects/zonaLimite.webp";
import portfolioRodrigo from "../assets/images/projects/portfolioRodrigo.png";
import labsistente from "../assets/images/projects/labsistente.png";
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
    name: "Zona Límite - E-commerce",
    img: zonaLimite,
    alt: "Vista de demo de tienda online Zona Límite",
    rotate: "4deg",
    description:
      "Aplicación demo desarrollado con React y Firebase, que incluye autenticación de usuarios, gestión de carrito y filtrado dinámico de productos. Implementa manejo de estado y navegación con React Router.",
    tecnologies: "React . Context API . Firebase",
    linkUrl: "https://proyectoreact-sand.vercel.app/",
    linkIcon: linkIcon,
    githubUrl: "https://github.com/LuciaPons/proyectoreact",
    githubIcon: github3Icon,
  },
];
