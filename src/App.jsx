import { Route, Routes } from "react-router-dom";
import Register from "./Auth/Register";
import UserProvider from "./Context/UserProvider";
import Login from "./Auth/Login";
import Dashboard from "./Pages/Dashboard";
import SicrtyDashboard from "./Auth/ScrityDashboard";

export default function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="dashboard" element={<SicrtyDashboard> <Dashboard /> </SicrtyDashboard>} />
        </Routes>
      </UserProvider>
    </>
  );
}
