import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { useUser } from "../Context/UserContext";
import DashboardChart from "./DashboardChart";
import { useTheme } from "../Context/ThemeContext";

export default function Dashboard() {
  const { burger } = useUser()
  const { theme } = useTheme()
  return (
    <div className={`${theme ? "bg-white" : "bg-black/90 text-white"}`}>
      <TopBar />
      <div className="flex flex-row flex-1 ">
          {burger && <SideBar />}
        <div className="w-full overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
