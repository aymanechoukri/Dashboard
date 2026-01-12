import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faUsers,
  faUserPlus,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import { useEffect } from "react";
import { useTheme } from "../Context/ThemeContext";

export default function SideBar() {
  const { menu, setMenu } = useUser();
  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu));
  }, [menu]);
  const { theme } = useTheme()

  return (
    <>
      <aside
        className={`
        sticky top-[11%] left-0 h-[89vh] shadow-md mr-20
        transition-all duration-300 ease-in-out
        ${menu ? "md:w-[27%] w-[70px]" : "w-[70px]"}
        ${theme ? "bg-white" : "bg-black/90 text-white"}
      `}
      >
        {/* Toggle Button */}
        <svg
          onClick={() => setMenu(!menu)}
          className={`hidden md:block
          absolute top-4 rounded-lg 
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
          <line x1="12" y1="5" x2="12" y2="25" stroke="black" strokeWidth="2" />
        </svg>

        {/* Menu */}
        <nav className="w-full flex flex-col mt-10">
          <ul className="flex flex-col gap-2 p-2">
            <Link
              to="/dashboard/chart"
              className="flex items-center gap-3 text-lg font-bold
                       hover:text-amber-700 hover:bg-gray-400/30
                       rounded-lg p-2 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faGauge} />
              <span
                className={`
                transition-all duration-300
                ${
                  menu
                    ? "md:opacity-100 md:translate-x-0 opacity-0 -translate-x-5 pointer-events-none"
                    : "opacity-0 -translate-x-5 pointer-events-none"
                }
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
                ${
                  menu
                    ? "md:opacity-100 md:translate-x-0 opacity-0 -translate-x-5 pointer-events-none"
                    : "opacity-0 -translate-x-5 pointer-events-none"
                }
              `}
              >
                Users
              </span>
            </Link>

            <Link
              to="/dashboard/addusers"
              className="flex items-center gap-3 text-lg font-bold
                       hover:text-amber-700 hover:bg-gray-400/30
                       rounded-lg p-2 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faUserPlus} />
              <span
                className={`
                transition-all duration-300
                ${
                  menu
                    ? "md:opacity-100 md:translate-x-0 opacity-0 -translate-x-5 pointer-events-none"
                    : "opacity-0 -translate-x-5 pointer-events-none"
                }
              `}
              >
                Add Usres
              </span>
            </Link>

            <Link
              to="/dashboard/products"
              className="flex items-center gap-3 text-lg font-bold
                       hover:text-amber-700 hover:bg-gray-400/30
                       rounded-lg p-2 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faBoxOpen} />
              <span
                className={`
                transition-all duration-300
                ${
                  menu
                    ? "md:opacity-100 md:translate-x-0 opacity-0 -translate-x-5 pointer-events-none"
                    : "opacity-0 -translate-x-5 pointer-events-none"
                }
              `}
              >
                Products
              </span>
            </Link>

            <Link
              to="/dashboard/addproduct"
              className="flex items-center gap-3 text-lg font-bold
                       hover:text-amber-700 hover:bg-gray-400/30
                       rounded-lg p-2 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faBoxOpen} />
              <span
                className={`
                transition-all duration-300
                ${
                  menu
                    ? "md:opacity-100 md:translate-x-0 opacity-0 -translate-x-5 pointer-events-none"
                    : "opacity-0 -translate-x-5 pointer-events-none"
                }
              `}
              >
                Add Products
              </span>
            </Link>
          </ul>
        </nav>
      </aside>
    </>
  );
}
