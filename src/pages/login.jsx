import axios from "axios";
import { useState } from "react";
import Toastify from "toastify-js";
import { Navigate, useNavigate } from "react-router";
import Button from "../components/button";
import baseUrl from "../constant/url";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${baseUrl}/user/login`, {
        email,
        password,
      });
      localStorage.setItem("access_token", data.data.access_token);
      Toastify({
        text: "Succeed Login",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#34D399",
          color: "black",
          border: "solid #000000",
          borderRadius: "8px",
          boxShadow: "2px 2px black",
        },
      }).showToast();
      navigate("/products");
    } catch (error) {
      Toastify({
        text: error.response.data.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#F87171",
          color: "black",
          border: "solid #000000",
          borderRadius: "8px",
          boxShadow: "2px 2px black",
        },
      }).showToast();
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Welcome
          </h2>
          <p className="text-gray-500 text-center mt-2">
            Login to your account
          </p>
          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@gmail.com"
                autoComplete="current-email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              type="submit"
            >
              Login
            </button>
            <div className="flex items-center gap-3 my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-400 text-sm">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
                alt="Google Logo"
              />
              <span className="text-gray-700 font-medium">
                Login with Google
              </span>
            </button>
          </form>
          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account?
            <a
              href="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
