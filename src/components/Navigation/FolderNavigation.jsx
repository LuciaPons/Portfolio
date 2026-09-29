import { useLocation } from "react-router-dom";
import { navigation } from "../../data/navigation";
import NavigationItem from "./NavigationItem";

const folderColors = [
  "var(--color-folder-1)",
  "var(--color-folder-2)",
  "var(--color-folder-3)",
  "var(--color-folder-4)",
  "var(--color-folder-5)",
];

export default function FolderNavigation() {
  const { pathname } = useLocation();

  const activeIndex = navigation.findIndex((tab) => tab.path === pathname);

  return (
    <nav
      className="
        relative
        bg-(bg-page)
        w-(--navbar-width)
        h-full
        shrink-0

        md:w-full
        md:h-(--navbar-height)
        md:mt-2
      "
    >
      {navigation.map((tab, index) => {
        let visualIndex = index;

        if (activeIndex !== -1) {
          if (index === activeIndex) {
            visualIndex = 0;
          } else if (index < activeIndex) {
            visualIndex = index + 1;
          }
        }

        const zIndex = 50 - visualIndex * 10;

        return (
          <NavigationItem
            key={tab.id}
            tab={tab}
            index={index}
            bgColor={folderColors[index]}
            visualIndex={visualIndex}
            zIndex={zIndex}
            isActive={index === activeIndex}
          />
        );
      })}
    </nav>
  );
}
