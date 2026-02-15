import { useState } from "react";
import axios from "axios";
import Toastify from "toastify-js";
import baseUrl from "../constant/url";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.post(`${baseUrl}/user/addUser`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(data);

      Toastify({
        text: data.message || "User added successfully",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
          background: "#34D399",
          color: "black",
          borderRadius: "8px",
          boxShadow: "2px 2px black",
        },
      }).showToast();

      navigate("/addUser");
    } catch (error) {
      Toastify({
        text: error.response?.data?.message || "Failed to add user",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
          background: "#F87171",
          color: "black",
          borderRadius: "8px",
          boxShadow: "2px 2px black",
        },
      }).showToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">Add Staff User</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-700 outline-none"
          />

          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-700 outline-none"
          />

          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-700 outline-none"
          />

          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-700 outline-none"
          />

          <button
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            type="submit"
          >
            {loading ? "Processing..." : "Add User"}
          </button>
        </form>
      </div>
    </div>
  );
}
