import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import eyeLogo from "../assets/vector.png";
import googleIcon from "../assets/google.png";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#fffdf2] flex flex-col">
      {/* Navbar */}
      <div className="bg-white w-full py-[24px] px-6 border-b border-neutral-200">
        <div className="px-4 md:px-18">
          <img src={logo} alt="videobelajar" className="h-14 w-auto" />
        </div>
      </div>

      {/* Konten Utama */}
      <div className="flex-grow flex justify-center items-center px-4 py-12">
        <div className="w-full max-w-[550px] bg-white p-[20px] border border-neutral-200 rounded-[4px] flex flex-col gap-[16px]">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-neutral-800">
              Pendaftaran Akun
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Yuk, daftarkan akunmu sekarang juga!
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Nama Lengkap */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-neutral-300 rounded p-2 outline-none focus:border-green-500"
              />
            </div>

            {/* E-Mail */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-neutral-300 rounded p-2 outline-none focus:border-green-500"
              />
            </div>

            {/* Jenis Kelamin */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Jenis Kelamin <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-neutral-300 rounded p-2 outline-none focus:border-green-500 bg-white">
                <option>Wanita</option>
                <option>Pria</option>
              </select>
            </div>

            {/* No. HP */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                No. Hp <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <div className="flex items-center border border-neutral-300 rounded px-2 bg-white">
                  <span className="mr-1">🇮🇩</span>
                  <select className="outline-none bg-transparent py-2">
                    <option>+62</option>
                  </select>
                </div>
                <input
                  type="tel"
                  className="flex-1 border border-neutral-300 rounded p-2 outline-none focus:border-green-500"
                />
              </div>
            </div>

            {/* Kata Sandi */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-neutral-300 rounded p-2 pr-10 outline-none focus:border-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <img
                    src={eyeLogo}
                    alt="toggle"
                    className="w-[20px] h-[12px] object-contain"
                  />
                </button>
              </div>
            </div>

            {/* Konfirmasi Kata Sandi */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Konfirmasi Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full border border-neutral-300 rounded p-2 pr-10 outline-none focus:border-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <img
                    src={eyeLogo}
                    alt="toggle"
                    className="w-[20px] h-[12px] object-contain"
                  />
                </button>
              </div>
            </div>

            <div className="text-right text-sm text-neutral-600 cursor-pointer italic">
              Lupa Kata Sandi?
            </div>

            {/* Tombol Aksi */}
            <button className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition">
              Daftar
            </button>
            <Link
              to="/login"
              className="block text-center w-full bg-[#EAFCE6] text-green-500 font-semibold py-2 rounded hover:bg-[#d4f5cc] transition"
            >
              Masuk
            </Link>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-neutral-200"></div>
            <span className="px-3 text-neutral-400 text-xs">atau</span>
            <div className="flex-grow border-t border-neutral-200"></div>
          </div>

          <button className="w-full border border-neutral-300 py-2 rounded flex items-center justify-center gap-2 text-sm text-neutral-700 hover:bg-neutral-50 transition">
            <img src={googleIcon} className="w-4 h-4" alt="google" />
            Daftar dengan Google
          </button>
        </div>
      </div>
    </div>
  );
}
