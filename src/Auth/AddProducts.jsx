import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useProduct } from "../Context/ProductContext";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "../Context/ThemeContext";

export default function AddProducts() {
  const [forms, setForms] = useState({
    title: "",
    description: "",
    picture: "",
    price: "",
  });
  const { product, setProduct } = useProduct();
  console.log(product);
  const handlChange = (e) => {
    const { name, value, files, type } = e.target;

    setForms({
      ...forms,
      [name]: type === "file" ? files[0] : value,
    });
  };
  const { theme } = useTheme()

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handlSubmit = async (e) => {
    e.preventDefault();
    const { title, description, picture, price } = forms;

    if (!title.trim()) return toast.error("Title is required ❌");

    if (description.trim().length < 8)
      return toast.error("Description must be at least 8 characters ❌");

    if (!picture) return toast.error("Product image is required ❌");

    if (!price || price <= 0)
      return toast.error("Please enter a valid price ❌");

    // Convert image to base64 string for localStorage
    let pictureBase64 = picture;
    if (picture instanceof File) {
      try {
        pictureBase64 = await convertToBase64(picture);
      } catch {
        return toast.error("Error reading image ❌");
      }
    }

    setProduct([
      ...product,
      { id: uuidv4(), title, description, price, picture: pictureBase64 },
    ]);
    toast.success("Product added successfully ✅");

    setForms({ title: "", description: "", price: "", picture: "" });
  };
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} />
      <form
        onSubmit={handlSubmit}
        className={`flex flex-col  w-[90%] text-black mt-15 p-5 ${
          theme ? "bg-white" : " text-white"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          Create Products
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium ">Title</label>
            <input
              className="px-4 py-3 rounded-xl bg-white/10 border border-amber-500/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all"
              type="text"
              name="title"
              value={forms.title}
              onChange={handlChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-amber">
              Description
            </label>
            <input
              className="px-4 py-3 rounded-xl bg-white/10 border border-amber-500/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all"
              type="text"
              name="description"
              value={forms.description}
              onChange={handlChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium ">
              Picture Product
            </label>
            <input
              className="px-4 py-3 rounded-xl bg-white/10 border border-amber-500/30 
               focus:border-green-400 focus:ring-2 focus:ring-green-400/20 
               outline-none transition-all
               file:mr-4 file:py-1 file:px-4
               file:rounded-full file:border-0
               file:text-sm file:font-semibold
               file:bg-amber-500 file:text-white
               hover:file:bg-amber-600 file:cursor-pointer cursor-pointer"
              type="file"
              name="picture"
              onChange={handlChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-amber-600">Price</label>
          <div className="relative">
            <input
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-amber-500/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all"
              type="number"
              name="price"
              placeholder="0.00"
              step="0.01"
              value={forms.price}
              onChange={handlChange}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              MAD
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 bg-green-500 hover:bg-green-600 text-black font-bold py-4 rounded-xl shadow-lg transform transition-all active:scale-95 cursor-pointer"
        >
          Product Now
        </button>
      </form>
    </div>
  );
}
