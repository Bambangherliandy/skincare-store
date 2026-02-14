import { useEffect, useState } from "react";
import UploadImageModal from "../components/uploadimage";
import axios from "axios";
import Toastify from "toastify-js";
import baseUrl from "../constant/url";

export default function AuthProduct() {
  const [products, setProducts] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const token = localStorage.getItem("access_token");
        const { data } = await axios.get(`${baseUrl}/product`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProducts(data || []);
      } catch (error) {
        Toastify({
          text: "Failed to fetch products",
          duration: 3000,
          gravity: "bottom",
          position: "right",
          style: { background: "#F87171", color: "black", borderRadius: "8px" },
        }).showToast();
      }
    }

    fetchProducts();
  }, []);

  const openUploadModal = (product) => {
    setSelectedProduct(product);
    setShowUploadModal(true);
  };
  const closeUploadModal = () => {
    setShowUploadModal(false);
    setSelectedProduct(null);
  };

  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  async function handleDelete(productId) {
    try {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.delete(`${baseUrl}/product/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProducts((prev) => prev.filter((p) => p.id !== productId));

      Toastify({
        text: data.message || "Product deleted successfully",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: { background: "#34D399", color: "black", borderRadius: "8px" },
      }).showToast();

      closeDeleteModal();
    } catch (error) {
      console.error("Delete error:", error);
      Toastify({
        text: error.response?.data?.message || "Failed to delete product",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: { background: "#F87171", color: "black", borderRadius: "8px" },
      }).showToast();
    }
  }

  return (
    <div className="flex justify-center bg-black min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Product List
            </h2>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search Product..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    <td className="px-6 py-4">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {product.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Rp {product.price.toLocaleString("id-ID")}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-semibold ${
                          product.stock > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.stock > 0
                          ? `${product.stock} Available`
                          : "Out of Stock"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <button
                        onClick={() => openUploadModal(product)}
                        className="text-green-600 hover:text-green-900"
                      >
                        Upload Image
                      </button>
                      <a
                        href={`/products/${product.id}`}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => openDeleteModal(product)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <UploadImageModal
        isOpen={showUploadModal}
        product={selectedProduct}
        onClose={closeUploadModal}
      />

      {showDeleteModal && productToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl w-[380px] p-6">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Delete Product
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{productToDelete.name}</span>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 border rounded-lg text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(productToDelete.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
