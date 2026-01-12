import { useEffect } from "react";
import { useUser } from "../Context/UserContext";
import { faMoon, faSun, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

export default function TopBar() {
    const { burger, setBurger } = useUser()
    useEffect(() => {
        localStorage.setItem("burger", JSON.stringify(burger))
    }, [burger]);

    const navigate = useNavigate();
    const { theme, setTheme } = useTheme();
        useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    const handlLogOut = () => {
      window.localStorage.removeItem("email")
      navigate("/")
    }
  return (
    <header className={`w-full sticky top-0 left-0 z-50 ${theme ? "bg-white" : "bg-black/90 text-white"}`}>
      <nav className="w-full shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <svg onClick={() => setBurger(!burger)} width="30" height="24" viewBox="0 0 30 24" className="md:hidden block cursor-pointer">
            <line
              x1="6"
              y1="4"
              x2="20"
              y2="4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4"
              y1="12"
              x2="24"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="2"
              y1="20"
              x2="28"
              y2="20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <h1 className="text-xl font-extrabold font-stretch-ultra-condensed ">
            Logo
          </h1>
        </div>

        <div className="flex gap-2  items-center justify-center">
          <FontAwesomeIcon className="cursor-pointer text-xl" onClick={() => setTheme(!theme)} icon={theme ? faSun : faMoon}  />
          <FontAwesomeIcon icon={faUserCircle} className="animate-pulse text-4xl text-gray-700" />
          <button onClick={handlLogOut} className="p-2 w-30 border-2 border-blue-400 text-lg font-bold rounded-lg hover:bg-blue-400 transition-all duration-300 cursor-pointer active:bg-blue-200">Log out</button>
        </div>
      </nav>
    </header>
  );
}
