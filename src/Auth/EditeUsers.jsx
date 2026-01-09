import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { motion as M } from "motion/react";


export default function EditeUsers() {
  const [forms, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { users, setUsers } = useUser();
  const naviget = useNavigate();
  const id = location.pathname.split("/").slice(-1)[0];

  useEffect(() => {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setForm({
        name: userToEdit.name,
        email: userToEdit.email,
        password: userToEdit.password,
      });
    }
  }, [id, users]);
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

    // Success Logic
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name, email, password } : user
      )
    );
    toast.success("Account updated successfully! 🚀");
    naviget("/dashboard/users");

    // Clear form
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="w-full">
      <M.form
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.6}}
        onSubmit={handlSubmit}
        noValidate //
        className="flex flex-col  w-[90%] text-black mt-15"
      >
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          Up date
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-black">Full Name</label>
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
            <label className="text-sm font-medium text-black">
              Email Address
            </label>
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
            <label className="text-sm font-medium text-black">Password</label>
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
          Up Date Now
        </button>
      </M.form>
    </div>
  );
}
