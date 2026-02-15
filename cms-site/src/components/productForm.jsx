import { useEffect, useState } from "react";
import Toastify from "toastify-js";
import axios from "axios";
import Button from "./button";
import baseUrl from "../constant/url";

export default function ProductForm({ nameProp, handleSubmit, product }) {
  const [category, setCategories] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imageUrl: "",
    categoryId: "",
  });

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name || "",
        description: product.description || "",
        price: product.price?.toString() || "",
        stock: product.stock?.toString() || "",
        imageUrl: product.imageUrl || "",
        categoryId: product.categoryId?.toString() || "",
      });
    }
  }, [product]);

  function handleForm(e, fieldName) {
    setForm((oldValue) => ({
      ...oldValue,
      [fieldName]: e.target.value,
    }));
  }

  // Fetch categories
  async function fetchCategories() {
    const token = localStorage.getItem("access_token");
    try {
      const { data } = await axios.get(`${baseUrl}/category`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(data.categories || []);
    } catch (error) {
      setCategories([]);
      Toastify({
        text: error.response.data.message || "Failed to fetch categories",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
          background: "#F87171",
          color: "black",
          borderRadius: "8px",
        },
      }).showToast();
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex justify-center bg-black min-h-screen p-6">
      <form
        className="p-10 mt-5 border-2 border-white rounded-lg bg-[#05020a] "
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e, {
            ...form,
            price: Number(form.price),
            stock: Number(form.stock),
            categoryId: Number(form.categoryId),
          });
        }}
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-white">
          {nameProp}
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-white w-full px-3 py-2 border-2 border-white rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              onChange={(e) => handleForm(e, "name")}
              value={form.name}
            />
          </div>

          <div>
            <label className="label">
              <span className="font-bold">Description</span>
            </label>
            <input
              type="text"
              placeholder="Enter Description"
              className="bg-white w-full px-3 py-2 border-2 border-white rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              onChange={(e) => handleForm(e, "description")}
              value={form.description}
            />
          </div>

          <div>
            <label className="label">
              <span className="font-bold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Enter Price"
              className="bg-white w-full px-3 py-2 border-2 border-white rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              onChange={(e) => handleForm(e, "price")}
              value={form.price}
            />
          </div>

          <div>
            <label className="label">
              <span className="font-bold">Stock</span>
            </label>
            <input
              type="number"
              placeholder="Enter Stock"
              className="bg-white w-full px-3 py-2 border-2 border-white rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              onChange={(e) => handleForm(e, "stock")}
              value={form.stock}
            />
          </div>

          <div>
            <label className="label">
              <span className="font-bold">Image (URL)</span>
            </label>
            <input
              type="text"
              placeholder="Enter Image URL"
              className="bg-white w-full px-3 py-2 border-2 border-white rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              onChange={(e) => handleForm(e, "imageUrl")}
              value={form.imageUrl}
            />
          </div>

          <div>
            <label className="label">
              <span className="font-bold">Category</span>
            </label>
            <select
              className="bg-white w-full px-3 py-2 border-2 border-white rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              name="category"
              onChange={(e) => handleForm(e, "categoryId")}
              value={form.categoryId}
            >
              {category.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5">
          <Button nameProp={nameProp} />
        </div>
      </form>
    </div>
  );
}
