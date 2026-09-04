import phoneIcon from "../assets/icons/icon-phone.png";
import mailIcon from "../assets/icons/icon-mail.png";
import github2Icon from "../assets/icons/icon-github-2.png";
import linkedinIcon from "../assets/icons/icon-linkedin.png";
import fondo2 from "../assets/img/Fondo-2.png";

function Contact() {
  const contacts = [
    {
      label: "Teléfono",
      value: "+598 097095325",
      href: "tel:+598097095325",
      icon: phoneIcon,
    },
    {
      label: "Email",
      value: "luciaponss@hotmail.com",
      href: "mailto:luciaponss@hotmail.com",
      icon: mailIcon,
    },
    {
      label: "GitHub",
      value: "@LuciaPons",
      href: "https://github.com/LuciaPons",
      icon: github2Icon,
    },
    {
      label: "LinkedIn",
      value: "Lucía Pons",
      href: "https://www.linkedin.com/in/lucia-pons-401961350",
      icon: linkedinIcon,
    },
  ];

  return (
    <>
      <section
        className="
            bg-(--color-folder-5)
            flex flex-col md:flex-row
            gap-8 md:gap-4
            min-h-[50vh]
            "
      >
        <div
          className="
                relative group
                flex 
                md:basis-1/2 
                justify-center items-center
                min-h-[30vh]
                "
        >
          <img
            src={fondo2}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="
                    absolute 
                    min-w-[60%] max-w-[88%] md:min-w-[90%] lg:w-[80%]
                    drop-shadow-xl
                    transition-all duration-300
                    group-hover:rotate-2 "
          />
          <h2
            className="
                    absolute
                    text-(--color-1)
                    text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                    font-medium
                    transition-all duration-300
                    group-hover:rotate-2
                    "
          >
            Contacto
          </h2>
        </div>
        <div
          className="
                flex justify-center
                md:basis-1/2 "
        >
          <div
            className="
                    flex flex-col justify-center
                    bg-(--color-3)
                    p-6 md:p-4 lg:p-10 
                    gap-2 md:gap-4 lg:gap-5
                    md:w-[80%] lg:w-[70%]
                    rounded-xl
                    shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                    text-(--color-base)"
          >
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                            group flex items-center 
                            gap-4 md:gap-2 lg:gap-4
                            px-4 py-3 rounded-lg
                            transition-all duration-300
                            hover:bg-white/10
                            hover:-translate-y-1
                            hover:shadow-[0_6px_15px_rgba(0,0,0,0.25)]"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="
                                w-6 h-6
                                transition duration-300
                                group-hover:scale-110
                                group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                />
                <div className="flex flex-col">
                  <span className="text-sm opacity-70">{item.label}</span>
                  <span
                    className="
                                    font-medium
                                    sm:text-base md:text-sm lg:text-base"
                  >
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div
        className="
            text-(--color-4) 
            text-xs md:text-sm
            text-end
            p-4"
      >
        <p>
          Portfolio diseñado con Whimsical.
          <br />
          Creado en Visual Studio Code con React JS y Tailwind CSS. <br />
          Deployed en Vercel
        </p>
      </div>
    </>
  );
}

export default Contact;
