import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import { useUser } from "../Context/UserContext";

export default function Dashboard() {
  const { burger } = useUser()
  return (
    <div>
      <TopBar />
      <div className="flex flex-row flex-1 ">
          {burger && <SideBar />}
        <div className="w-full overflow-hidden"><Outlet /></div>
      </div>
    </div>
  );
}
