import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({children}) {
    const [users, setUsers] = useState(() => {
        const saved = localStorage.getItem("users");
        return saved ? JSON.parse(saved) : [];
    })

    useEffect(() => {
        if(users !== null) {
            localStorage.setItem("users", JSON.stringify(users))
        } else {
            localStorage.removeItem("users")
        }
    }, [users])
    return (
        <UserContext.Provider value={{users, setUsers}} >{children}</UserContext.Provider>
    )
}