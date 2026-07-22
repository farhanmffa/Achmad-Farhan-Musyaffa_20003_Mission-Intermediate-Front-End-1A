import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import logo from "../assets/logo.png";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.jpg";
import card6 from "../assets/card6.jpg";

const categoryCards = [
  {
    id: 1,
    title: "Big 4 Auditor Financial Analyst",
    category: "Pemasaran",
    price: 300000,
    originalPrice: null,
    rating: 3.5,
    reviews: 86,
    instructor: "Jenna Ortega",
    role: "Senior Accountant di Gojek",
    image: card1,
  },
  {
    id: 2,
    title: "Big 4 Auditor Financial Analyst",
    category: "Digital & Teknologi",
    price: 100000,
    originalPrice: 300000,
    rating: 3.5,
    reviews: 86,
    instructor: "Jenna Ortega",
    role: "Senior Accountant di Gojek",
    image: card2,
  },
  {
    id: 3,
    title: "Big 4 Auditor Financial Analyst",
    category: "Pengembangan Diri",
    price: 100000,
    originalPrice: 300000,
    rating: 3.5,
    reviews: 86,
    instructor: "Jenna Ortega",
    role: "Senior Accountant di Gojek",
    image: card3,
  },
  {
    id: 4,
    title: "Big 4 Auditor Financial Analyst",
    category: "Bisnis Manajemen",
    price: 300000,
    originalPrice: null,
    rating: 3.5,
    reviews: 86,
    instructor: "Jenna Ortega",
    role: "Senior Accountant di Gojek",
    image: card4,
  },
  {
    id: 5,
    title: "Big 4 Auditor Financial Analyst",
    category: "Pemasaran",
    price: 300000,
    originalPrice: null,
    rating: 3.5,
    reviews: 86,
    instructor: "Jenna Ortega",
    role: "Senior Accountant di Gojek",
    image: card5,
  },
  {
    id: 6,
    title: "Big 4 Auditor Financial Analyst",
    category: "Digital & Teknologi",
    price: 300000,
    originalPrice: null,
    rating: 3.5,
    reviews: 86,
    instructor: "Jenna Ortega",
    role: "Senior Accountant di Gojek",
    image: card6,
  },
  {
    id: 7,
    title: "Big 4 Auditor Financial Analyst",
    category: "Pemasaran",
    price: 250000,
    originalPrice: null,
    rating: 3.5,
    reviews: 86,
    instructor: "Jenna Ortega",
    role: "Senior Accountant di Gojek",
    image: card1,
  },
  {
    id: 8,
    title: "Big 4 Auditor Financial Analyst",
    category: "Digital & Teknologi",
    price: 150000,
    originalPrice: 300000,
    rating: 3.5,
    reviews: 86,
    instructor: "Jenna Ortega",
    role: "Senior Accountant di Gojek",
    image: card2,
  },
  {
    id: 9,
    title: "Big 4 Auditor Financial Analyst",
    category: "Pengembangan Diri",
    price: 200000,
    originalPrice: null,
    rating: 3.5,
    reviews: 86,
    instructor: "Jenna Ortega",
    role: "Senior Accountant di Gojek",
    image: card3,
  },
];

export default function CategoryPage() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const handleBuyCourse = () => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      navigate("/payment");
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBidangStudi, setSelectedBidangStudi] = useState([]);
  const [selectedHarga, setSelectedHarga] = useState([]);
  const [selectedDurasi, setSelectedDurasi] = useState([]);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Urutkan");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const handleCheckboxChange = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleResetFilter = () => {
    setSelectedBidangStudi([]);
    setSelectedHarga([]);
    setSelectedDurasi([]);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const filteredCards = categoryCards.filter((card) => {
    const matchesSearch = card.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesBidang =
      selectedBidangStudi.length === 0 ||
      selectedBidangStudi.includes(card.category);
    return matchesSearch && matchesBidang;
  });

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen bg-[#fffdf2] flex flex-col justify-between">
      <div>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        <main className="px-5 md:px-[150px] max-w-[1600px] mx-auto py-8">
          {/* Header Title */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">
              Koleksi Video Pembelajaran Unggulan
            </h1>
            <p className="text-neutral-500 text-sm md:text-base">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>

          {/* Top Control Bar (Urutkan & Search) - KHUSUS DESKTOP */}
          <div className="hidden lg:flex justify-end items-center gap-4 mb-6">
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="bg-white border border-neutral-200 px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between w-48 shadow-sm cursor-pointer"
              >
                <span>{sortOption}</span>
                <span className="text-neutral-400 text-xs">▼</span>
              </button>
              {sortOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-xl shadow-lg z-20 py-2 text-sm text-neutral-700">
                  {[
                    "Harga Rendah",
                    "Harga Tinggi",
                    "A to Z",
                    "Z to A",
                    "Rating Tertinggi",
                    "Rating Terendah",
                  ].map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setSortOption(opt);
                        setSortOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-neutral-50 cursor-pointer"
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative w-72">
              <input
                type="text"
                placeholder="Cari Kelas"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-500 shadow-sm"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-sm">
                🔍
              </span>
            </div>
          </div>

          {/* FILTER KHUSUS MOBILE (Tampil di atas pada layar kecil) */}
          <div className="block lg:hidden mb-6 space-y-4">
            <div className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-100">
                <span className="font-bold text-neutral-800 text-sm">
                  Filter
                </span>
                <button
                  onClick={handleResetFilter}
                  className="text-orange-500 text-xs font-semibold cursor-pointer"
                >
                  Reset
                </button>
              </div>

              {/* Dropdown Bidang Studi Mobile */}
              <div className="flex items-center justify-between p-3 border border-neutral-200 rounded-xl text-sm text-green-600 font-medium cursor-pointer">
                <div className="flex items-center gap-3">
                  <span>📖</span>
                  <span>Bidang Studi</span>
                </div>
                <span className="text-neutral-400 text-xs">▼</span>
              </div>

              {/* Dropdown Harga Mobile */}
              <div className="flex items-center justify-between p-3 border border-neutral-200 rounded-xl text-sm text-green-600 font-medium cursor-pointer">
                <div className="flex items-center gap-3">
                  <span>💰</span>
                  <span>Harga</span>
                </div>
                <span className="text-neutral-400 text-xs">▼</span>
              </div>

              {/* Dropdown Durasi Mobile */}
              <div className="flex items-center justify-between p-3 border border-neutral-200 rounded-xl text-sm text-green-600 font-medium cursor-pointer">
                <div className="flex items-center gap-3">
                  <span>🕒</span>
                  <span>Durasi</span>
                </div>
                <span className="text-neutral-400 text-xs">▼</span>
              </div>
            </div>

            {/* Urutkan & Cari Kelas Mobile */}
            <div className="flex items-center gap-3">
              <div className="relative w-1/2">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="bg-white border border-neutral-200 px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between w-full shadow-sm cursor-pointer"
                >
                  <span className="truncate">{sortOption}</span>
                  <span className="text-neutral-400 text-xs">▼</span>
                </button>
                {sortOpen && (
                  <div className="absolute left-0 mt-2 w-full bg-white border border-neutral-200 rounded-xl shadow-lg z-20 py-2 text-sm text-neutral-700">
                    {[
                      "Harga Rendah",
                      "Harga Tinggi",
                      "A to Z",
                      "Z to A",
                      "Rating Tertinggi",
                      "Rating Terendah",
                    ].map((opt) => (
                      <div
                        key={opt}
                        onClick={() => {
                          setSortOption(opt);
                          setSortOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-neutral-50 cursor-pointer"
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative w-1/2">
                <input
                  type="text"
                  placeholder="Cari Kelas"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-green-500 shadow-sm"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-sm">
                  🔍
                </span>
              </div>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Filter Sidebar - KHUSUS DESKTOP */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                  <span className="font-bold text-neutral-800 text-base">
                    Filter
                  </span>
                  <button
                    onClick={handleResetFilter}
                    className="text-orange-500 text-xs font-semibold hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                </div>

                {/* 1. Bidang Studi */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-neutral-800 cursor-pointer">
                    <div className="flex items-center gap-2 text-green-600">
                      <span>📖</span>
                      <span>Bidang Studi</span>
                    </div>
                    <span>▲</span>
                  </div>
                  <div className="space-y-2.5 pl-1 text-sm text-neutral-600">
                    {[
                      "Pemasaran",
                      "Digital & Teknologi",
                      "Pengembangan Diri",
                      "Bisnis Manajemen",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedBidangStudi.includes(item)}
                          onChange={() => {
                            handleCheckboxChange(
                              selectedBidangStudi,
                              setSelectedBidangStudi,
                              item,
                            );
                            setCurrentPage(1);
                          }}
                          className="w-4 h-4 accent-green-500 rounded border-neutral-300"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <hr className="border-neutral-100" />

                {/* 2. Harga (Diperbaiki opsi rentang harganya) */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-neutral-800 cursor-pointer">
                    <div className="flex items-center gap-2 text-green-600">
                      <span>💰</span>
                      <span>Harga</span>
                    </div>
                    <span>▲</span>
                  </div>
                  <div className="space-y-2.5 pl-1 text-sm text-neutral-600">
                    {["< Rp 100K", "Rp 100K - Rp 300K", "> Rp 300K"].map(
                      (item) => (
                        <label
                          key={item}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedHarga.includes(item)}
                            onChange={() =>
                              handleCheckboxChange(
                                selectedHarga,
                                setSelectedHarga,
                                item,
                              )
                            }
                            className="w-4 h-4 accent-green-500 rounded border-neutral-300"
                          />
                          <span>{item}</span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <hr className="border-neutral-100" />

                {/* 3. Durasi */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-bold text-neutral-800 cursor-pointer">
                    <div className="flex items-center gap-2 text-green-600">
                      <span>🕒</span>
                      <span>Durasi</span>
                    </div>
                    <span>▲</span>
                  </div>
                  <div className="space-y-2.5 pl-1 text-sm text-neutral-600">
                    {["Kurang dari 4 Jam", "4 - 8 Jam", "Lebih dari 8 Jam"].map(
                      (item) => (
                        <label
                          key={item}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedDurasi.includes(item)}
                            onChange={() =>
                              handleCheckboxChange(
                                selectedDurasi,
                                setSelectedDurasi,
                                item,
                              )
                            }
                            className="w-4 h-4 accent-green-500 rounded border-neutral-300"
                          />
                          <span>{item}</span>
                        </label>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Grid & Pagination Wrapper */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              {/* Grid Kartu: Di mobile menggunakan flex-col (list horizontal ke bawah), di desktop menggunakan grid 2 kolom */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 mb-8 min-h-[750px]">
                {currentCards.map((card) => (
                  <div
                    key={card.id}
                    onClick={handleBuyCourse}
                    className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm flex flex-col lg:flex-col justify-between hover:shadow-md transition cursor-pointer h-full"
                  >
                    {/* Di mobile layout gambar dan konten bisa berdampingan atau tetap tersusun, disesuaikan dengan contoh gambar (gambar di kiri, teks di kanan untuk mobile, atau tetap block ke bawah) */}

                    <div className="flex flex-col lg:block">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full lg:w-full h-48 object-cover rounded-xl mb-4"
                      />

                      <div className="flex flex-col flex-grow justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-base text-neutral-900 leading-snug mb-1">
                            {card.title}
                          </h3>
                          <p className="text-xs text-neutral-500 line-clamp-2">
                            Mulai transformasi dengan instruktur profesional,
                            harga yang terjangkau, dan...
                          </p>
                        </div>

                        <div className="flex items-center gap-2.5 my-1">
                          <div className="w-8 h-8 rounded-full bg-neutral-200 flex-shrink-0 flex items-center justify-center font-bold text-xs text-neutral-600 overflow-hidden">
                            <img
                              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jenna"
                              alt="avatar"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-neutral-800">
                              {card.instructor}
                            </p>
                            <p className="text-[10px] text-neutral-500">
                              {card.role}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-neutral-100">
                          <span className="text-yellow-400 text-sm flex items-center gap-1">
                            ★{" "}
                            <span className="text-neutral-700 font-medium text-xs">
                              3.5
                            </span>{" "}
                            <span className="text-neutral-400 text-xs">
                              ({card.reviews})
                            </span>
                          </span>
                          <div className="flex items-center gap-2">
                            {card.originalPrice && (
                              <span className="text-neutral-400 text-xs line-through">
                                Rp {card.originalPrice / 1000}K
                              </span>
                            )}
                            <span className="text-green-600 font-bold text-base">
                              Rp {card.price / 1000}K
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Component */}
              <div className="flex justify-end items-center gap-2 mb-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="w-9 h-9 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:bg-neutral-50 cursor-pointer shadow-sm"
                >
                  &lt;
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setCurrentPage(num);
                        window.scrollTo({ top: 0, behavior: "smooth" }); // Agar kembali ke atas dengan mulus
                      }}
                      className={`w-9 h-9 rounded-xl font-semibold text-sm cursor-pointer shadow-sm transition ${
                        currentPage === num
                          ? "bg-amber-400 text-neutral-900 border border-amber-400"
                          : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                      }`}
                    >
                      {num}
                    </button>
                  ),
                )}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="w-9 h-9 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:bg-neutral-50 cursor-pointer shadow-sm"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
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
