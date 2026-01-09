import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });
  const [menu, setMenu] = useState(() => {
    const savedMenu = localStorage.getItem("menu");
    return savedMenu ? JSON.parse(savedMenu) : true;
  });
  const [burger, setBurger] = useState(() => {
    const saved = localStorage.getItem("burger");
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    if (users !== null) {
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.removeItem("users");
    }
  }, [users]);
  return (
    <UserContext.Provider
      value={{ users, setUsers, menu, setMenu, burger, setBurger }}
    >
      {children}
    </UserContext.Provider>
  );
}
