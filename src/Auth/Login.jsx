import { useState } from "react";
import { useUser } from "../Context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { motion as M } from "motion/react";

export default function Login() {
  const [forms, setForm] = useState({
    email: "",
    password: "",
  });
  const { users } = useUser();
  const naviget = useNavigate();
  const handlChange = (e) => {
    setForm({ ...forms, [e.target.name]: e.target.value });
  };

  const handlSubmit = (e) => {
    e.preventDefault();

    const { email, password } = forms;

    if (!email.includes("@")) return toast.error("Please enter a valid email");
    if (password.length < 8)
      return toast.error("Password must be at least 8 characters");

    const user = users || [];
    const validUser = user.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {
      return (
        toast.success("Logged in"),
        naviget("/dashboard"),
        window.localStorage.setItem("email", email)
      );
    } else {
      return toast.error("No account");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <M.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center items-center min-h-screen w-full bg-gray-50"
      >
        <div className="flex flex-col md:flex-row justify-between rounded-3xl items-center bg-amber-700 shadow-2xl w-full max-w-4xl overflow-hidden">
          {/* Left Side: Illustration */}
          <div className="w-full md:w-1/2 p-8 flex justify-center items-center ">
            <img
              src="/Images/Login.png"
              alt="Register"
              className="w-full max-w-[450px] drop-shadow-2xl animate-pulse-slow"
            />
          </div>

          {/* Right Side: Form */}
          <form
            onSubmit={handlSubmit}
            noValidate //
            className="flex flex-col w-full md:w-1/2 p-10 md:p-14 text-white"
          >
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Log In
            </h2>

            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-amber-100">
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
                <label className="text-sm font-medium text-amber-100">
                  Password
                </label>
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
              Log In Now
            </button>
            <Link to={"/register"}>
              <p className="text-center mt-6 text-sm text-amber-200">
                Create Account?{" "}
                <span className="underline cursor-pointer hover:text-white transition-colors">
                  Register
                </span>
              </p>
            </Link>
          </form>
        </div>
      </M.div>
    </>
  );
}
