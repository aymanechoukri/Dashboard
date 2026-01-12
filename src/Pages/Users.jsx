import { useUser } from "../Context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { motion as M } from "motion/react";
import { useTheme } from "../Context/ThemeContext";


export default function Users() {
  const { users, setUsers } = useUser();

  const removeUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    toast.success("User removed successfully!");
  };
  const { theme } = useTheme()

  const showUsers = users.map((user, index) => (
    <tr
      key={user.id}
      className="hover:bg-gray-100 transition odd:bg-white even:bg-gray-50 border-b last:border-0"
    >
      <td className="px-4 py-4 text-sm md:text-base">{index + 1}</td>
      <td className="px-4 py-4 text-sm md:text-base font-medium">{user.name}</td>
      <td className="px-4 py-4 text-sm md:text-base">{user.email}</td>
      <td className="px-4 py-4 space-x-4">
        <FontAwesomeIcon
          onClick={() => removeUser(user.id)}
          icon={faTrash}
          className="text-red-500 hover:text-red-700 active:scale-90 transition duration-150 cursor-pointer"
        />
        <Link to={`/dashboard/${user.id}`}>
          <FontAwesomeIcon
            icon={faPen}
            className="text-blue-500 hover:text-blue-700 active:scale-90 transition duration-150 cursor-pointer"
          />
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className="p-4 md:p-10">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-2xl font-bold mb-6 text-gray-800 ${theme ? "bg-white" : " text-white"}`}>Users List</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-hidden">
            <M.table
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="w-full text-left border-collapse min-w-[600px] overflow-hidden">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wider">ID</th>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wider">Name</th>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wider">Email</th>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                {users.length > 0 ? (
                  showUsers
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-10 text-gray-400">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </M.table>
          </div>
        </div>
      </div>
    </div>
  );
}