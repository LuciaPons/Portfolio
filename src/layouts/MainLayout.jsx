import FolderNavigation from "../components/Navigation/FolderNavigation";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <FolderNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
