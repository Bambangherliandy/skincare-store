import { useEffect, useState } from "react";

export default function AuthCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const token = localStorage.getItem("access_token");
        const { data } = await axios.get(`${baseUrl}/categories`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCategories(data || []);
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
    fetchCategories();
  }, []);
  return (
    <div
      className="flex justify-center
   bg-black min-h-screen p-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Chategory List
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
                    Name
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {categories.map((categories) => (
                  <tr
                    key={categories.id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {categories.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
