import FolderNavigation from "../components/navigation/FolderNavigation";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <FolderNavigation className="h-full w-full" />
      <main className="min-h-[calc(100dvh-var(--navbar-height))]">
        <Outlet />
      </main>
    </div>
  );
}
