import { useUser } from "../Context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { use } from "react";

export default function Users() {
  const { users, setUsers } = useUser();

  const removeUser = (indexToRemove) => {
    setUsers((prev) => prev.filter((_, index) => index !== indexToRemove));
    toast.success("User removed successfully!");
  };

  const showUsers = users.map((user, index) => (
    <tr
      key={index}
      className="hover:bg-gray-100 transition odd:bg-white even:bg-gray-200 cursor-pointer"
    >
      <td className="px-6 py-3">{index + 1}</td>
      <td className="px-6 py-3">{user.name}</td>
      <td className="px-6 py-3">{user.email}</td>
      <td className="px-6 py-3 space-x-2">
        <FontAwesomeIcon
          onClick={() => removeUser(index)}
          icon={faTrash}
          className="hover:text-red-600 active:scale-95 transition duration-150 cursor-pointer"
        />
        <Link to={`/dashboard/${index}`}>
          <FontAwesomeIcon
            icon={faPen}
            className="hover:text-green-600 active:scale-95 transition duration-150 cursor-pointer"
          />
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className="flex justify-center mt-10 px-4">
      <ToastContainer />
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full border-collapse overflow-auto">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-semibold border-b">ID</th>
              <th className="px-6 py-3 text-left font-semibold border-b">
                Name
              </th>
              <th className="px-6 py-3 text-left font-semibold border-b">
                Email
              </th>
              <th className="px-6 py-3 text-left font-semibold border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">{showUsers}</tbody>
        </table>
      </div>
    </div>
  );
}
