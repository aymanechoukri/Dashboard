import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import { useEffect } from "react";

export default function SideBar() {
  const { menu, setMenu } = useUser()
  useEffect(() => {
  localStorage.setItem("menu", JSON.stringify(menu));
}, [menu]);

  return (
    <>
    <aside
      className={`
        sticky top-[11%] left-0 h-[89vh] shadow-md mr-20
        transition-all duration-300 ease-in-out
        ${menu ? "md:w-[27%] w-[70px]" : "w-[70px]"}
      `}
    >
      {/* Toggle Button */}
      <svg
        onClick={() => setMenu(!menu)}
        className={`hidden md:block
          absolute top-2 rounded-lg 
          transition-all duration-300
          ${menu ? "right-2 cursor-w-resize" : "left-3 cursor-e-resize"}
          hover:bg-gray-500
        `}
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="20"
          height="20"
          x="5"
          y="5"
          rx="4"
          ry="4"
          fill="lightblue"
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1="12"
          y1="5"
          x2="12"
          y2="25"
          stroke="black"
          strokeWidth="2"
        />
      </svg>

      {/* Menu */}
      <nav className="w-full flex flex-col mt-10">
        <ul className="flex flex-col gap-2 p-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 text-lg font-bold
                       hover:text-amber-700 hover:bg-gray-400/30
                       rounded-lg p-2 transition-all duration-200"
          >
            <FontAwesomeIcon icon={faGauge} />
            <span
              className={`
                transition-all duration-300
                ${menu ? "md:opacity-100 md:translate-x-0 opacity-0 -translate-x-5 pointer-events-none" : "opacity-0 -translate-x-5 pointer-events-none"}
              `}
            >
              Dashboard
            </span>
          </Link>

          <Link
            to="/dashboard/users"
            className="flex items-center gap-3 text-lg font-bold
                       hover:text-amber-700 hover:bg-gray-400/30
                       rounded-lg p-2 transition-all duration-200"
          >
            <FontAwesomeIcon icon={faUsers} />
            <span
              className={`
                transition-all duration-300
                ${menu ? "md:opacity-100 md:translate-x-0 opacity-0 -translate-x-5 pointer-events-none" : "opacity-0 -translate-x-5 pointer-events-none"}
              `}
            >
              Users
            </span>
          </Link>
        </ul>
      </nav>
    </aside>
    </>
  );
}
