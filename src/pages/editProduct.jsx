import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import baseUrl from "../constant/url";
import Toastify from "toastify-js";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const token = localStorage.getItem("access_token");
        const { data } = await axios.get(`${baseUrl}/product/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProduct(data);
      } catch (err) {
        console.error(err);
        Toastify({
          text: "Failed to fetch product",
          duration: 3000,
          gravity: "bottom",
          position: "right",
          style: { background: "#F87171", color: "black", borderRadius: "8px" },
        }).showToast();
      }
    }
    fetchProduct();
  }, [id]);

  async function handleEdit(e, form) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      await axios.put(`${baseUrl}/product/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      Toastify({
        text: "Product updated successfully",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: { background: "#34D399", color: "black", borderRadius: "8px" },
      }).showToast();

      navigate("/products"); // kembali ke list produk
    } catch (err) {
      console.error(err);
      Toastify({
        text: err.response?.data?.message || "Failed to update product",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: { background: "#F87171", color: "black", borderRadius: "8px" },
      }).showToast();
    }
  }

  return product ? (
    <ProductForm
      nameProp="Edit Product"
      handleSubmit={handleEdit}
      product={product}
    />
  ) : (
    <p>Loading product...</p>
  );
}
