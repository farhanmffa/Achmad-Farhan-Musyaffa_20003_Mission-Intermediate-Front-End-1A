import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Pastikan sudah install react-router-dom
import newsletterImage from "../assets/newslatter.jpg";
import navImage from "../assets/navimage.jpg";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";
import card6 from "../assets/card6.jpg";
import card7 from "../assets/card7.jpg";
import card8 from "../assets/card8.jpg";
import card9 from "../assets/card9.jpg";

const cardImages = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
];

export default function HomePage() {
  const navigate = useNavigate();

  // Ambil data dari localStorage (hasil setItem dari LoginPage)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // Fungsi untuk logout (menghapus status dari localStorage)
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  // --------------------------

  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  // Fungsi yang dijalankan ketika tombol beli / course diklik
  const handleBuyCourse = () => {
    if (!isLoggedIn) {
      // Jika Belum Login, arahkan ke halaman Login
      navigate("/");
    } else {
      // Jika Sudah Login, arahkan langsung ke halaman Payment
      navigate("/payment");
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf2]">
      {/* --- TAMBAHKAN PROPS onLogout KESINI --- */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <main className="px-5 md:px-[150px] max-w-[1600px] mx-auto overflow-x-hidden">
        {/* 1. Hero Section */}
        <section className="relative bg-[#1C1C1C] mx-auto rounded-[10px] overflow-hidden flex flex-col justify-center items-center text-center text-white h-[400px] p-6 md:p-14">
          <img
            src={navImage}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative z-10 flex flex-col items-center w-full max-w-sm md:max-w-3xl px-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p className="text-neutral-200 mb-6 text-sm md:text-lg">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              videobelajar. Berkualitas tinggi.
            </p>
            <button
              onClick={handleBuyCourse}
              className="bg-green-500 px-6 py-3 rounded-[10px] font-semibold hover:bg-green-600 transition self-center max-w-[280px] text-xs md:text-sm md:max-w-none md:px-8 cursor-pointer"
            >
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </section>

        {/* 2. Koleksi Video Section */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-2">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-neutral-500 mb-6">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>

          <div className="flex gap-8 mb-8 border-b border-neutral-200 overflow-x-auto">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`pb-3 font-semibold ${index === 0 ? "border-b-2 border-orange-500 text-orange-500" : "text-neutral-500"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardImages.map((img, i) => (
              <div
                key={i}
                onClick={handleBuyCourse} // Card bisa diklik untuk memicu pengecekan login/payment
                className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-row md:flex-col items-center md:items-stretch gap-4 md:gap-3 hover:shadow-md transition cursor-pointer"
              >
                {/* Foto Card */}
                <img
                  src={img}
                  alt={`Course ${i + 1}`}
                  className="w-24 h-24 md:w-full md:h-48 object-cover rounded-lg flex-shrink-0"
                />

                {/* Konten Card */}
                <div className="flex flex-col w-full justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-sm md:text-base leading-tight mb-1">
                      Big 4 Auditor Financial Analyst
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-2 hidden md:block">
                      Mulai transformasi dengan instruktur profesional, harga
                      yang terjangkau, dan...
                    </p>
                  </div>

                  {/* Instruktur */}
                  <div className="flex items-center gap-2 my-1">
                    <div className="w-7 h-7 rounded-full bg-neutral-200 flex-shrink-0"></div>
                    <div>
                      <p className="text-[10px] md:text-xs font-semibold">
                        Jenna Ortega
                      </p>
                      <p className="text-[9px] md:text-[10px] text-neutral-500">
                        Senior Accountant di Gojek
                      </p>
                    </div>
                  </div>

                  {/* Rating & Harga */}
                  <div className="flex justify-between items-center pt-2 border-t border-neutral-100 mt-1">
                    <span className="text-yellow-400 text-xs md:text-sm">
                      ★★★☆☆{" "}
                      <span className="text-neutral-500 text-[10px] md:text-xs underline">
                        3.5 (86)
                      </span>
                    </span>
                    <span className="text-green-600 font-bold text-sm md:text-base">
                      Rp 300K
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 3. Newsletter Section */}
      <section className="px-5 md:px-[150px] py-16">
        <div className="relative w-full h-[450px] md:h-[400px] rounded-[20px] overflow-hidden flex flex-col items-center justify-center text-center text-white p-6 md:p-8 max-w-[1600px] mx-auto">
          <img
            src={newsletterImage}
            alt="Newsletter BG"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
            <span className="uppercase tracking-widest text-xs md:text-sm font-semibold mb-2">
              Newsletter
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Mau Belajar Lebih Banyak?
            </h2>
            <p className="text-neutral-200 mb-8 px-2 text-sm md:text-base">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>

            <div className="flex flex-col md:flex-row w-full gap-4 md:bg-white md:p-2 md:rounded-2xl md:shadow-lg md:items-center">
              <input
                type="email"
                placeholder="Masukkan Emailmu"
                className="w-full px-6 py-4 bg-white md:bg-transparent text-neutral-500 rounded-xl outline-none shadow-lg md:shadow-none text-center md:text-left"
              />
              <button className="bg-[#FFC045] px-10 py-4 rounded-xl font-bold text-white w-full md:w-auto shadow-lg hover:bg-orange-500 transition whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="px-5 md:px-[150px] py-12 bg-white border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <img src={logo} alt="videobelajar" className="h-10 w-auto" />
              <p className="font-semibold text-neutral-800">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </p>
              <p className="text-sm text-neutral-600">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="text-sm text-neutral-600">+62-877-7123-1234</p>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Kategori",
                  items: [
                    "Digital & Teknologi",
                    "Pemasaran",
                    "Manajemen Bisnis",
                    "Pengembangan Diri",
                    "Desain",
                  ],
                },
                {
                  title: "Perusahaan",
                  items: [
                    "Tentang Kami",
                    "FAQ",
                    "Kebijakan Privasi",
                    "Ketentuan Layanan",
                    "Bantuan",
                  ],
                },
                { title: "Komunitas", items: ["Tips Sukses", "Blog"] },
              ].map((section) => (
                <div key={section.title}>
                  <h4 className="font-bold mb-4 text-neutral-800 hidden md:block">
                    {section.title}
                  </h4>
                  <ul className="text-sm text-neutral-600 space-y-3 hidden md:block">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="cursor-pointer hover:text-orange-500"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="md:hidden flex justify-between items-center py-4 border-b border-neutral-200">
                    <span className="font-bold text-neutral-800">
                      {section.title}
                    </span>
                    <span className="text-neutral-400 text-xl">{">"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              @2023 Gerobak Sayur All Rights Reserved.
            </p>
            <div className="flex gap-3">
              {["in", "f", "ig", "tw"].map((icon) => (
                <div
                  key={icon}
                  className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-600 hover:bg-neutral-100 cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
