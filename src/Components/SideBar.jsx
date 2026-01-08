import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <aside className="w-[20%] shadow-md fixed top-[11%] left-0 mr-20 h-full">
      <nav className="w-full flex flex-col justify-center">
        <ul className="w-full flex flex-col justify-center p-4">
          <Link
            to={"/dashboard"}
            className="text-lg font-bold hover:text-amber-700 hover:bg-gray-400/30   rounded-lg p-2 transition duration-150 "
          >
            <li>
              <FontAwesomeIcon icon={faGauge} /> <span>Dashboard</span>
            </li>
          </Link>

          <Link
            to={"/dashboard/users"}
            className="text-lg font-bold hover:text-amber-700 hover:bg-gray-400/30  rounded-lg p-2 transition duration-150 "
          >
            <li>
              <FontAwesomeIcon icon={faUsers} /> <span>Users</span>
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
