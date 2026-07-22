import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import eyeLogo from "../assets/vector.png";
import googleIcon from "../assets/google.png";

export default function LoginPage() {
  const navigate = useNavigate();

  // Fungsi untuk menangani login
  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    console.log("Login berhasil");

    // Simpan status login ke localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Arahkan ke homepage
    navigate("/");
  };

  const handleRegister = () => {
    navigate("/register"); // Arahkan ke halaman register
  };

  const handleGoogleLogin = () => {
    console.log("Google Login diklik");
  };

  return (
    <div className="min-h-screen bg-[#fffdf2]">
      <div className="bg-white w-full py-[24px] px-6 border-b border-neutral-200">
        <div className="px-4 md:px-18">
          <img src={logo} alt="videobelajar" className="h-14 w-auto" />
        </div>
      </div>

      <div className="flex justify-center items-center px-4 mt-12 mb-30">
        <div className="w-full max-w-[550px] bg-white p-[20px] border border-neutral-200 rounded-[4px] flex flex-col gap-[16px]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-800">
              Masuk ke Akun
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Yuk, lanjutin belajarmu di videobelajar.
            </p>
          </div>

          {/* Form menggunakan onSubmit */}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Masukkan alamat e-mail"
                className="w-full border border-neutral-300 rounded p-2 outline-none focus:border-green-500 placeholder:italic"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Masukkan kata sandi"
                  className="w-full border border-neutral-300 rounded p-2 pr-10 outline-none focus:border-green-500 placeholder:italic"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={eyeLogo}
                    alt="Toggle"
                    className="w-[20px] h-[12px] object-contain"
                  />
                </button>
              </div>
            </div>

            <div className="text-right text-sm text-neutral-600 hover:underline cursor-pointer italic">
              Lupa Kata Sandi?
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-2 rounded transition-all duration-200 hover:bg-green-600 active:scale-[0.98] cursor-pointer"
            >
              Masuk
            </button>

            <button
              type="button"
              onClick={handleRegister}
              className="w-full bg-[#EAFCE6] text-green-500 font-semibold py-2 rounded transition-all duration-200 hover:bg-[#d4f5cc] active:scale-[0.98] cursor-pointer"
            >
              Daftar
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-neutral-200"></div>
            <span className="px-3 text-neutral-400 text-xs">atau</span>
            <div className="flex-grow border-t border-neutral-200"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full border border-neutral-300 py-2 rounded flex items-center justify-center gap-2 text-sm text-neutral-700 transition-all duration-200 hover:bg-neutral-50 active:scale-[0.98] cursor-pointer"
          >
            <img src={googleIcon} className="w-4 h-4" alt="googleIcon" />
            Masuk dengan Google
          </button>
        </div>
      </div>
    </div>
  );
}
