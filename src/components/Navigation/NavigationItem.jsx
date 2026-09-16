import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import texturaFolder from "../../assets/images/accesories/textura-beige.webp";

const MotionNavLink = motion.create(NavLink);

const tabOffsetDesktop = ["90px", "85px", "68px", "84px", "72px"];

const tabOffsetTablet = ["60px", "-10px", "-90px", "-160px", "-250px"];

const tabOffsetMobile = ["80px", "160px", "230px", "310px", "400px"];

export default function NavigationItem({
  tab,
  index,
  visualIndex,
  bgColor,
  zIndex,
  isActive,
}) {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (isActive) {
      setY(400);

      requestAnimationFrame(() => {
        setY(0);
      });
    }
  }, [isActive]);

  return (
    <MotionNavLink
      to={tab.path}
      className="
      absolute 
      right-[calc(var(--visual-index)*var(--folder-step))]
      h-full
      w-(--navbar-width) 
      pointer-events-none
      
      md:w-full 
      md:h-auto 
      md:right-auto
      md:top-auto
      md:bottom-[calc(var(--visual-index)*var(--folder-step))]
      md:pointer-events-auto
      "
      style={{
        "--visual-index": visualIndex,
        zIndex,
      }}
      animate={{
        y,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
    >
      <div
        className="
      relative 
      w-full
      h-full

      md:h-auto"
      >
        <div
          className="
          absolute 
          z-10 
          -right-9
          top-[calc(var(--tab-index)*var(--tab-step-mobile))]
          mt-(--tab-offset-mobile)
          w-35
          h-(--folder-tab-height)
          -rotate-90
          pointer-events-auto
          
          md:rotate-0
          md:left-[calc(var(--tab-index)*var(--tab-step))]
          md:right-auto
          md:bottom-6
          md:top-auto
          md:ml-(--tab-offset-tablet)
          md:w-[18%] 
          
          xl:ml-(--tab-offset-desktop)
          
          p-2 
          rounded-t-(--radius-folder) 
          text-center 
          font-mono 
          text-(--color-text-dark) 
          font-semibold 
          shadow-(--shadow-folder) 
          overflow-hidden
          "
          style={{
            "--tab-index": index,
            "--visual-index": visualIndex,
            "--tab-offset-desktop": tabOffsetDesktop[index],
            "--tab-offset-tablet": tabOffsetTablet[index],
            "--tab-offset-mobile": tabOffsetMobile[index],
            backgroundColor: bgColor,
          }}
        >
          <div
            className="
          absolute
          inset-0
          opacity-25
          rounded-t-(--radius-folder)
          pointer-events-none"
            style={{
              backgroundImage: `url(${texturaFolder})`,
              backgroundRepeat: "repeat",
            }}
          />
          <span
            className={`
            inline-block
          ${isActive ? "font-bold" : ""}
          `}
          >
            {tab.label}
          </span>
        </div>

        <div
          className="
          absolute
          right-0
          w-(--folder-body-height-mobile)
          h-full
          shadow-(--shadow-folder-mobile)
          
          md:relative
          md:h-(--folder-body-height)
          md:w-full
          md:shadow-(--shadow-folder)
          "
          style={{
            backgroundColor: bgColor,
          }}
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
        </div>
      </div>
    </MotionNavLink>
  );
}

NavigationItem.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  visualIndex: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  zIndex: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};
