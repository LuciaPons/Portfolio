import { useEffect, useRef, useState } from "react";

const tabs = [
    {id: "home", label: "Inicio"},
    {id: "about", label: "Acerca de mí"},
    {id: "education", label: "Educación"},
    {id: "projects", label: "Proyectos"},
    {id: "contact", label: "Contacto"},
];

export default function Navbar() {
    const [active, setActive] = useState("home");
    const tabRefs = useRef({});

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const offset = 100;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top,
            behavior: "smooth",
            inline: "center",
        });
    };

    useEffect (() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        },
        {
            rootMargin: "-40% 0px -60% 0px",
            threshold: 0,
        }
        );
        tabs.forEach((tab) => {
            const el = document.getElementById(tab.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect(); 
    },[]);

    const [indicatorStyle, setIndicatorStyle] = useState({});

    useEffect(() => {
        const el = tabRefs.current[active];
        if (el) {
            setIndicatorStyle({
                width: el.offsetWidth,
                transform: `translateX(${el.offsetLeft}px)`,
            });
            el.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    },[active]);

    const bgTones = [
        "#DBC8B3",
        "#CBB093",
        "#a99886",
        "#98846E",
        "#7d6f60"
    ]
    
    return (
        <header className="
        bg-[var(--color-bg-navbar)]
        pt-6 px-4 md:px-6
        sticky top-0 z-50">
            <nav 
            aria-label="Navegación principal"
            className="
            flex items-end
            gap-4 md:gap-8
            px-8
            overflow-x-auto
            whitespace-nowrap
            scrollbar-hide
            scroll-smooth
            scrollbar-thin">
                {tabs.map((tab, index) => (
                <a
                    key={tab.id}
                    ref={(el) => (tabRefs.current[tab.id] = el)}
                    href={`#${tab.id}`}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollTo(tab.id);
                    }}
                    aria-current={active === tab.id ? "page" : undefined}
                    className="relative 
                    flex-shrink-0"
                    style={{
                        zIndex: active === tab.id ? 50 : tabs.length - index
                    }}>
                    <div
                    style={
                    active !== tab.id
                    ? { backgroundColor: bgTones[index]}
                    : undefined
                }
                    className={`
                    relative
                    text-xs md:text-md 
                    px-2 md:px-6 py-3
                    rounded-t-xl
                    transition-all duration-300
                    border border-white/20
                        ${active === tab.id
                            ? `
                            bg-[var(--color-base)] text-[var(--color-3)] font-semibold translate-y-[2px] z-10
                            `
                            : `
                            text-[var(--color-base)] font-semibold hover:bg-[#D1BEA7]
                            hover:translate-y-[2px]
                            `
                        }
                    `}
                    >
                        <span className="relative z-10">
                            {tab.label}
                        </span>
                        <div
                        className={`
                        absolute top-0 right-[-20px]
                        w-[40px] h-full
                        bg-inherit
                        border-t border-r border-white/20
                        transform skew-x-[25deg]
                        origin-left
                        rounded-tr-xl
                        `} />
                        <div
                        className={`
                        absolute bottom-0 left-[-20px]
                        w-[40px] h-full
                        bg-inherit
                        border-l border-b border-white/20
                        transform skew-x-[-25deg]
                        origin-right
                        rounded-tl-xl
                        `} />
                    </div>
                </a>
            ))}
        </nav>
    </header>
    )
}