import { useEffect } from "react";
import { useUser } from "../Context/UserContext";

export default function TopBar() {
    const { burger, setBurger } = useUser()
    useEffect(() => {
        localStorage.setItem("burger", JSON.stringify(burger))
    }, [burger])
  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-white">
      <nav className="w-full shadow-md p-4">
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
      </nav>
    </header>
  );
}
