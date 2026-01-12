import { Route, Routes } from "react-router-dom";
import Register from "./Auth/Register";
import UserProvider from "./Context/UserProvider";
import Login from "./Auth/Login";
import Dashboard from "./Pages/Dashboard";
import SicrtyDashboard from "./Auth/ScrityDashboard";
import Users from "./Pages/Users";
import EditeUsers from "./Auth/EditeUsers";
import AddUsers from "./Auth/AddUsers";
import AddProducts from "./Auth/AddProducts";
import ProductProvider from "./Context/ProductProvider";
import Product from "./Pages/Product";
import DashboardChart from "./Pages/DashboardChart";
import ThemeProvider from "./Context/ThemeProvider";

export default function App() {
  return (
    <>
      <UserProvider>
        <ProductProvider>
          <ThemeProvider>
            <Routes>
              <Route path="register" element={<Register />} />
              <Route path="/" element={<Login />} />

              <Route
                path="dashboard"
                element={
                  <SicrtyDashboard>
                    {" "}
                    <Dashboard />{" "}
                  </SicrtyDashboard>
                }
              >
                <Route path="users" element={<Users />} />
                <Route path=":id" element={<EditeUsers />} />
                <Route path="addusers" element={<AddUsers />} />
                <Route path="products" element={<Product />} />
                <Route path="addproduct" element={<AddProducts />} />
                <Route path="chart" element={<DashboardChart />} />
              </Route>
            </Routes>
          </ThemeProvider>
        </ProductProvider>
      </UserProvider>
    </>
  );
}
