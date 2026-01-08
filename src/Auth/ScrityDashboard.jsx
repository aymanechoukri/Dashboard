import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

export default function SicrtyDashboard() {
    const navigate = useNavigate()
    const email = window.localStorage.getItem("email");

    useEffect(() => {
        if(!email) {
            navigate("/")
        }
    }, [email, navigate]);

    if(!email) {
        return null;
    }

    return <Dashboard />;
}
