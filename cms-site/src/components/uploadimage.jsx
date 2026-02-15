import { useState } from "react";
import axios from "axios";
import baseUrl from "../constant/url";
import Toastify from "toastify-js";

export default function UploadImageModal({
  isOpen,
  product,
  onClose,
  fetchProducts,
}) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen || !product) return null;

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      if (!file) {
        return Toastify({
          text: "Please select a file",
          duration: 3000,
        }).showToast();
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("imageUrl", file);
      const token = localStorage.getItem("access_token");
      const { data } = await axios.patch(
        `${baseUrl}/product/${product.id}/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Toastify({
        text: data.message || "Upload Image successfully",
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

      fetchProducts();
      onClose();
    } catch (error) {
      console.log(error);

      Toastify({
        text: error.response.data.message || "Upload failed",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
          background: "#F87171",
          color: "black",
          border: "solid #000000",
          borderRadius: "8px",
          boxShadow: "2px 2px black",
        },
      }).showToast();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-[380px] p-6">
        <h2 className="text-lg font-semibold mb-3">Upload Image</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={handleUpload}
            disabled={loading}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}
