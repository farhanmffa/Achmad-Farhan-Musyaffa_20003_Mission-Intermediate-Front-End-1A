import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar({ isLoggedIn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-neutral-200 px-5 py-4 z-50">
      <div className="flex items-center justify-between">
        {/* Logo -> Mengarah ke Halaman Utama (Home Page) */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-32 md:w-56 h-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* --- Bagian Kanan Navbar --- */}
        <div className="flex items-center gap-6">
          {/* Menu Kategori (Desktop) */}
          <span
            onClick={() => navigate("/category")}
            className="hidden md:block text-sm font-medium text-neutral-600 cursor-pointer hover:text-orange-500 transition"
          >
            Kategori
          </span>

          {/* Tombol Daftar (Desktop & Belum Login) */}
          {!isLoggedIn && (
            <Link
              to="/register"
              className="hidden md:inline-block px-4 py-2 rounded-lg text-sm font-semibold text-orange-500 border border-orange-500 hover:bg-orange-50 transition"
            >
              Daftar
            </Link>
          )}

          {/* Container Dropdown / Auth Button */}
          <div className="relative" ref={dropdownRef}>
            {/* Tombol Desktop: Avatar Inisial (JO) jika login, atau Tombol Masuk ke /login */}
            {isLoggedIn ? (
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="hidden md:flex items-center focus:outline-none hover:opacity-85 transition"
                aria-label="User Menu"
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border border-neutral-200 shadow-sm">
                  <span className="text-sm font-bold text-orange-500">JO</span>
                </div>
              </button>
            ) : (
              <Link
                to="/login"
                className="hidden md:inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
              >
                Masuk
              </Link>
            )}

            {/* Tombol Mobile: Garis Tiga */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden p-2 text-neutral-600 hover:text-orange-500 transition focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white border border-neutral-200 rounded-xl shadow-2xl overflow-hidden z-50">
                <ul className="text-neutral-700">
                  <li
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/category");
                    }}
                    className="block md:hidden px-5 py-3 hover:bg-neutral-50 cursor-pointer border-b border-neutral-100 text-sm font-medium text-neutral-600"
                  >
                    Kategori
                  </li>

                  {isLoggedIn ? (
                    <>
                      <Link to="/profile" onClick={() => setIsOpen(false)}>
                        <li className="px-5 py-3 hover:bg-neutral-50 cursor-pointer border-b border-neutral-100 text-sm font-medium">
                          Profil Saya
                        </li>
                      </Link>
                      <Link to="/my-classes" onClick={() => setIsOpen(false)}>
                        <li className="px-5 py-3 hover:bg-neutral-50 cursor-pointer border-b border-neutral-100 text-sm font-medium">
                          Kelas Saya
                        </li>
                      </Link>
                      <Link to="/my-orders" onClick={() => setIsOpen(false)}>
                        <li className="px-5 py-3 hover:bg-neutral-50 cursor-pointer border-b border-neutral-100 text-sm font-medium">
                          Pesanan Saya
                        </li>
                      </Link>
                      <li
                        onClick={() => {
                          setIsOpen(false);
                          onLogout();
                        }}
                        className="px-5 py-3 hover:bg-orange-50/50 cursor-pointer text-orange-500 flex items-center justify-between text-sm font-semibold transition"
                      >
                        Keluar
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                      </li>
                    </>
                  ) : (
                    /* Menu Mobile Berdampingan untuk Daftar & Masuk */
                    <li className="block md:hidden px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Link
                          to="/register"
                          onClick={() => setIsOpen(false)}
                          className="w-1/2 text-center py-2 px-3 rounded-lg text-sm font-semibold text-orange-500 border border-orange-500 hover:bg-orange-50 transition block"
                        >
                          Daftar
                        </Link>
                        <Link
                          to="/login"
                          onClick={() => setIsOpen(false)}
                          className="w-1/2 text-center py-2 px-3 rounded-lg text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition shadow-sm block"
                        >
                          Masuk
                        </Link>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
