import { useState } from "react";
import { useUser } from "../Context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { motion as M } from "motion/react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "../Context/ThemeContext";

export default function AddUsers() {
  const [forms, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { users, setUsers } = useUser();
  const naviget = useNavigate();

  const handlChange = (e) => {
    setForm({ ...forms, [e.target.name]: e.target.value });
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = forms;

    if (!name.trim()) return toast.error("Please enter your name");
    if (!email.includes("@")) return toast.error("Please enter a valid email");
    if (password.length < 8)
      return toast.error("Password must be at least 8 characters");

    const validEmail = users.find((u) => u.email === email);

    if (validEmail) {
      return toast.error("This account exists");
    }

    // Success Logic
    setUsers([...users, { id: uuidv4(), name, email, password }]);
    toast.success("Account created successfully! 🚀");
    naviget("/dashboard/users");

    // Clear form
    setForm({ name: "", email: "", password: "" });
  };
  const { theme } = useTheme()

  return (
   <div className="w-full">
      <ToastContainer position="top-right" autoClose={3000} />
      <M.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        onSubmit={handlSubmit}
        noValidate //
        className={`flex flex-col  w-[90%] text-black mt-15 ${
          theme ? "bg-white" : " text-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 text-center md:text-left ${
            theme ? "bg-white" : "text-white"
          }`}
        >
          Add user
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium ">Full Name</label>
            <input
              className="px-4 py-3 rounded-xl bg-white/10 border border-amber-500/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all"
              type="text"
              name="name"
              placeholder="John Doe"
              value={forms.name}
              onChange={handlChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium ">Email Address</label>
            <input
              className="px-4 py-3 rounded-xl bg-white/10 border border-amber-500/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all"
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={forms.email}
              onChange={handlChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium ">Password</label>
            <input
              className="px-4 py-3 rounded-xl bg-white/10 border border-amber-500/30 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none transition-all"
              type="password"
              name="password"
              placeholder="••••••••"
              value={forms.password}
              onChange={handlChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all active:scale-95 cursor-pointer"
        >
          Add user Now
        </button>
      </M.form>
    </div>
  );
}
