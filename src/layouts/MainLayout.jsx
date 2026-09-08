import FolderNavigation from "../components/navigation/FolderNavigation";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-dvh">
      <FolderNavigation />
      <main className="h-[calc(100dvh-var(--navbar-height))]">
        <Outlet />
      </main>
    </div>
  );
}
