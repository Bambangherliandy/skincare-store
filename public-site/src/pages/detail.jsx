import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../constant/url";

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`${baseUrl}/pub/product/${id}`);
        console.log(data);

        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="relative min-h-screen bg-[#05020a] text-white font-sans">
      <main className="max-w-6xl mx-auto p-6 lg:p-10">
        <nav className="text-sm mb-6">
          <Link to="/pub" className="hover:underline text-gray-400">
            ← Back to products
          </Link>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <img
              src={product.imageUrl}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <section className="bg-white rounded-2xl shadow-lg p-8 sticky top-10">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-extrabold text-black">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Stock available: {product.stock}
              </p>
            </div>
            <button className="mt-8 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </section>
        </section>
      </main>
    </div>
  );
}
