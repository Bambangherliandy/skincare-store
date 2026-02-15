import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="relative w-[340px] h-[450px] rounded-[32px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2118] via-[#1a2118]/90 via-40% to-transparent" />

      <div className="absolute top-6 left-6">
        <div className="bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <span className="text-xs font-semibold text-gray-800">
            Prime Pick
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 w-full p-7 text-white z-10">
        <h2 className="text-3xl font-semibold mb-2">
          Rp {product.price.toLocaleString("id-ID")}
        </h2>

        <p className="text-gray-300 text-sm mb-4">{product.name}</p>

        <div className="flex gap-6 text-sm">
          <button className="hover:text-blue-400">Buy</button>

          <Link to={`/pub/${product.id}`} className="hover:text-blue-400">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
