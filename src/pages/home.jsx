import { useRef } from "react";
import { NavLink, Link } from "react-router";

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative min-h-screen bg-[#05020a] text-white font-sans overflow-hidden">
        <nav className="sticky top-0 z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto shadow">
          <div className="text-xl font-bold tracking-wide">Skincare</div>

          <div className="hidden md:flex space-x-8 text-sm text-gray-400 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-300"
                  : "text-gray-400 hover:text-purple-300"
              }
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/pub"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-300"
                  : "text-gray-400 hover:text-purple-300"
              }
            >
              <span>Our Product</span>
            </NavLink>
            <Link
              className="hover:text-purple-300"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </Link>
            <Link
              className="hover:text-purple-300"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex gap-2">
            <button className="px-6 py-2.5 rounded-md hover:bg-purple-500 transition">
              <a href="/login">Login</a>
            </button>
          </div>
        </nav>
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-bl from-violet-600 via-purple-900/20 to-transparent blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
            }}
          />
        </div>
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95]">
            Skincare that works with your skin,
            <br />
            <span className="text-gray-400">not against it.</span>
          </h1>

          <div className="flex flex-col justify-center">
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              We create skincare that understands your skin’s context — gentle,
              precise, and deeply human in how it cares.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 transition">
                See how it works
              </button>
              <button className="px-6 py-3 rounded-full bg-purple-200 text-purple-950 font-semibold hover:bg-white transition">
                Start for Free
              </button>
            </div>
          </div>
        </section>

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            className="transition-transform hover:scale-[1.02] duration-300"
            src="https://i.pinimg.com/1200x/5b/f6/34/5bf6346373b766d10b27ac7a822efae0.jpg"
          />
          <img
            className="transition-transform hover:scale-[1.02] duration-300"
            src="https://i.pinimg.com/736x/9a/34/3d/9a343d155dd8d8ea1d0845ccbb4c9745.jpg"
          />
          <img
            className="h-121 w-100 transition-transform hover:scale-[1.02] duration-300"
            src="https://i.pinimg.com/1200x/9d/cc/e8/9dcce812b8ccd8ce655099ec51bd0364.jpg"
          />
        </section>

        <section className="py-20 px-4 md:px-12 lg:px-24" ref={aboutRef}>
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 px-4">
              <p className="text-base font-medium text-white mb-3">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Us
              </h2>
              <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed">
                We are a passionate skincare brand dedicated to creating
                high-quality products that enhance natural beauty and promote
                healthy, glowing skin. Our mission is to make skincare simple,
                effective, and enjoyable for everyone.
              </p>
            </div>

            <div
              className="bg-white rounded-none shadow-sm p-12 mb-12"
              id="about"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-6">
                    Who We Are
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p className="text-lg">
                      Founded in 2018, we have been at the forefront of natural
                      skincare innovation, helping our customers achieve radiant
                      and healthy skin. Our team of skincare experts brings
                      together years of experience in dermatology, product
                      formulation, and wellness.
                    </p>
                    <p className="text-lg">
                      We believe in products that are safe, effective, and
                      sustainably sourced. Every formula is carefully crafted to
                      nourish your skin while respecting the environment.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-2">
                        120+
                      </div>
                      <div className="text-gray-500">Products Created</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-2">
                        5k+
                      </div>
                      <div className="text-gray-500">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-2">
                        6+
                      </div>
                      <div className="text-gray-500">Years in Skincare</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-black mb-2">
                        25+
                      </div>
                      <div className="text-gray-500">Team Members</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 h-80 flex items-center justify-center">
                  <div className="text-center w-full h-full flex items-center justify-center">
                    <iframe
                      className="w-full h-full max-w-3xl max-h-80"
                      src="https://www.youtube.com/embed/RIJlBxpKr_4"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-medium">
          Let's see <br /> Our Product
        </h1>

        <section className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="card py-50 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="relative w-[340px] h-[450px] rounded-[32px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300">
              <img
                src="https://akcdn.detik.net.id/community/media/visual/2021/06/14/foto-pinterestcomnewbeautymagazine.png?w=620&q=90"
                alt="Product skincare"
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
                <h2 className="text-3xl font-semibold mb-2">Rp 130.000</h2>
                <p className="text-gray-300 text-sm mb-4">
                  Glowing skin <br /> 1063 AG Guillaume Briard
                </p>

                <div className="flex gap-6 text-sm">
                  <button className="hover:text-blue-400">Buy</button>
                  <button className="hover:text-blue-400"></button>
                </div>
              </div>
            </div>
            <div className="relative w-[340px] h-[450px] rounded-[32px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300">
              <img
                src="https://i.pinimg.com/1200x/8d/35/a0/8d35a085a27b35016b4a2207ad71af25.jpg"
                alt="Product skincare"
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
                <h2 className="text-3xl font-semibold mb-2">Rp 179.000</h2>
                <p className="text-gray-300 text-sm mb-4">
                  Glowing skin <br /> 1063 AG Guillaume Briard
                </p>

                <div className="flex gap-6 text-sm">
                  <button className="hover:text-blue-400">Buy</button>
                  <button className="hover:text-blue-400"></button>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-[420px]">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium">
                Click{" "}
                <button className="text-blue-400 transition-transform hover:scale-[1.2] duration-300 ">
                  <a href="/publicproduct">here</a>
                </button>{" "}
                to see All Product
              </h1>
            </div>
          </div>
        </section>
        <footer className="bg-gray-900 text-white pt-12 pb-8" ref={contactRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="ml-2 text-xl font-bold">Company</span>
                </div>
                <p className="text-gray-400">
                  Building innovative solutions for the modern world.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Our Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Mobile Apps
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Cloud Solutions
                    </a>
                  </li>
                </ul>
              </div>
              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <address className="not-italic text-gray-400">
                  <p>123 Business Ave</p>
                  <p>Sumatra Utara, Indonesia</p>
                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href="mailto:info@company.com"
                      className="hover:text-white transition"
                    >
                      info@company.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+11234567890"
                      className="hover:text-white transition"
                    >
                      +62 822 4456-7890
                    </a>
                  </p>
                </address>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2026 Company. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
