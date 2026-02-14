import { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import axios from "axios";
import baseUrl from "../constant/url";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [page, setPage] = useState(1);
  const [perPage] = useState(9);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/pub/product`, {
          params: {
            page,
            perPage,
            search,
            sort,
          },
        });

        setProducts(data.products);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [page, perPage, search, sort]);

  return (
    <div className="relative min-h-screen bg-[#05020a] text-white font-sans overflow-hidden">
      <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-medium pt-5">
        Our Product
      </h1>

      <section className="max-w-7xl mx-auto px-6 mt-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.length === 0 ? (
            <p className="text-center col-span-3 text-gray-400 mt-10">
              No products found.
            </p>
          ) : (
            products.map((item) => <ProductCard key={item.id} product={item} />)
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              page === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
