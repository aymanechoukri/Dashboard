import { Route, Routes } from "react-router-dom";
import Register from "./Auth/Register";
import UserProvider from "./Context/UserProvider";
import Login from "./Auth/Login";
import Dashboard from "./Pages/Dashboard";
import SicrtyDashboard from "./Auth/ScrityDashboard";
import Users from "./Pages/Users";
import EditeUsers from "./Auth/EditeUsers";

export default function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Login />} />

          <Route path="dashboard" element={<SicrtyDashboard> <Dashboard /> </SicrtyDashboard>} >
            <Route path="users" element={<Users />} />
            <Route path=":index" element={<EditeUsers />} />
          </Route>
        </Routes>
      </UserProvider>
    </>
  );
}
