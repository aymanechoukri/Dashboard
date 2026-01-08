import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

export default function Dashboard() {
  return (
    <div>
      <TopBar />
      <div className="flex flex-row flex-1 space-x-2">
          <SideBar />
        <div className="ml-[23%] w-full"><Outlet /></div>
      </div>
    </div>
  );
}
