import { NavLink, useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  async function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <div className="bg-[#05020a] text-white hover:text-purple-300 font-sans overflow-hidden">
        <nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-wide">Skincare</div>

          <div className="hidden md:flex justify-center space-x-8 text-sm text-gray-400 font-medium">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-300"
                  : "text-white hover:text-purple-300"
              }
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="products/add"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-300"
                  : "text-white hover:text-purple-300 "
              }
            >
              <span>Add Product</span>
            </NavLink>
            <NavLink
              to="addUser"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-300"
                  : "text-white hover:text-purple-300 "
              }
            >
              <span>Add Users</span>
            </NavLink>
            <NavLink
              to="categories"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-300"
                  : "text-white hover:text-purple-300 "
              }
            >
              <span>Categories</span>
            </NavLink>
          </div>

          <div className="hidden lg:flex gap-2">
            <a
              className="text-white px-6 py-2.5 rounded-md hover:bg-purple-500 transition"
              onClick={handleLogout}
            >
              <span>Logout</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
