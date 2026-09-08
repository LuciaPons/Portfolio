import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import texturaFolder from "../../assets/images/textura-beige.webp";

const MotionNavLink = motion.create(NavLink);

const tabOffsets = ["40px", "35px", "18px", "34px", "22px"];

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
      className="absolute w-full"
      style={{
        bottom: `calc(${visualIndex} * var(--folder-step))`,
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
      <div className="relative w-full">
        <div
          className="
            absolute
            z-10
            bottom-6
            p-2
            w-[18%]
            h-(--folder-tab-height)
            rounded-t-(--radius-folder)
            text-center
            font-mono
            shadow-(--shadow-folder)
            overflow-hidden
          "
          style={{
            left: `calc(${index} * var(--tab-step))`,
            marginLeft: tabOffsets[index],
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
          <span className={isActive ? "font-semibold" : ""}>{tab.label}</span>
        </div>

        <div
          className="
          relative
            w-full
            h-(--folder-body-height)
            shadow-(--shadow-folder)
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
