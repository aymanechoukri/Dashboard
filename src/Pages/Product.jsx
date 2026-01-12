import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion as M } from "motion/react";
import { useProduct } from "../Context/ProductContext";
import { useTheme } from "../Context/ThemeContext";


export default function Product() {
  const { product, setProduct } = useProduct();
  const { theme } = useTheme()
 
  const removeUser = (id) => {
    setProduct((prev) => prev.filter((user) => user.id !== id));
    toast.success("Product removed successfully!");
  };

  const showUsers = product.map((produ, index) => (
    <tr
      key={produ.id}
      className="hover:bg-gray-100 transition odd:bg-white even:bg-gray-50 border-b last:border-0"
    >
      <td className="px-4 py-4 text-sm md:text-base">{index + 1}</td>
      <td className="px-4 py-4 text-sm md:text-base font-medium">{produ.title}</td>
      <td className="px-4 py-4 text-sm md:text-base">{produ.description}</td>
      <td className="px-4 py-4">
  {(() => {
    const picture = produ.picture;
    if (typeof picture === 'string' && picture) {
      return (
        <img 
          src={picture} 
          alt="product" 
          className="w-12 h-12 object-cover rounded-lg"
        />
      );
    }
    if (picture instanceof File || picture instanceof Blob) {
      return (
        <img 
          src={URL.createObjectURL(picture)} 
          alt="product" 
          className="w-12 h-12 object-cover rounded-lg"
        />
      );
    }
    return (
      <img 
        src="https://via.placeholder.com/50" 
        alt="product" 
        className="w-12 h-12 object-cover rounded-lg"
      />
    );
  })()}
</td>
      <td className="px-4 py-4 text-sm md:text-base">${produ.price}</td>

      <td className="px-4 py-4 space-x-4">
        <FontAwesomeIcon
          onClick={() => removeUser(produ.id)}
          icon={faTrash}
          className="text-red-500 hover:text-red-700 active:scale-90 transition duration-150 cursor-pointer"
        />
      </td>
    </tr>
  ));

  return (
    <div className="p-4 md:p-10">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-2xl font-bold mb-6 text-gray-800 ${theme ? "bg-white" : "text-white"}`}>Products List</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-hidden">
            <M.table
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="w-full text-left border-collapse min-w-[600px]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wider">ID</th>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wider">Title</th>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wider">Description</th>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wider">Pictur</th>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wider">Price</th>
                  <th className="px-4 py-4 text-sm font-semibold uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-200">
                {product.length > 0 ? (
                  showUsers
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-10 text-gray-400">
                      No Products found.
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