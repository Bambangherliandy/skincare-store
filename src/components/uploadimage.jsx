import { useState } from "react";
import axios from "axios";
import baseUrl from "../constant/url";
import Toastify from "toastify-js";

export default function UploadImageModal({
  isOpen,
  product,
  onClose,
  onUpdateImage,
}) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen || !product) return null;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file)
      return Toastify({
        text: "Please select a file",
        duration: 3000,
      }).showToast();
    setLoading(true);

    try {
      const token = localStorage.getItem("access_token");
      const formData = new FormData();
      formData.append("imageUrl", file);

      await axios.patch(`${baseUrl}/product/${product.id}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Toastify({
        text: "Image uploaded successfully",
        duration: 3000,
        style: { background: "#34D399" },
      }).showToast();

      onUpdateImage(product.id, data.imageUrl);

      onClose();
    } catch (error) {
      Toastify({
        text: "Failed to upload image",
        duration: 3000,
        style: { background: "#F87171" },
      }).showToast();
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-[380px] p-6">
        <h2 className="text-lg font-semibold mb-3">
          Upload Image for {product.name}
        </h2>
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
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}
