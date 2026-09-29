import FolderNavigation from "../components/Navigation/FolderNavigation";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div
      className="
    flex flex-row
    h-dvh
    md:flex-col"
    >
      <FolderNavigation />
      <main
        className="
      flex-1
      md:h-[calc(100dvh-var(--navbar-height))]"
      >
        <Outlet />
      </main>
    </div>
  );
}
