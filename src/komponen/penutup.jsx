import React from "react";
import Mempelai from "/agus/5.jpg";

// Komponen Ikon Dekoratif Bunga (SVG)
const FloralIcon = ({ className }) => (
  <svg
    className={`absolute text-gray-300 opacity-50 ${className}`}
    width="100"
    height="100"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
      fill="currentColor"
      opacity="0.4"
    />
    <path
      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
      fill="currentColor"
    />
  </svg>
);

export default function Penutup() {
  return (
    // Latar belakang seksi dengan warna lembut dan padding yang cukup
    <section className="bg-gradient-to-br from-gray-50 to-stone-100 py-20 px-4 font-serif relative overflow-hidden">
      {/* Ikon Dekoratif sebagai latar belakang */}
      <FloralIcon className="top-10 left-10 transform rotate-45 scale-150" />
      <FloralIcon className="bottom-10 right-10 transform -rotate-45 scale-125" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Foto Pasangan */}
        <div className="mb-8">
          <img
            src={Mempelai}
            alt="Foto Pasangan"
            className="w-56 h-56 md:w-96 md:h-96 object-cover rounded-full mx-auto border-4 border-white shadow-lg transform transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Teks Ucapan */}
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-inner">
          <p className="text-xs md:text-sm text-gray-600 mb-4 italic font-utama">
            "Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kami."
          </p>
          <h2 className="text-2xl font-head font-bold text-gray-800 mb-2 tracking-wider">
            Terima Kasih
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mb-6 font-utama">
            Atas kehadiran dan doa restu Anda, kami ucapkan terima kasih yang
            tulus.
          </p>

          {/* Nama Pasangan */}
          <div className="mt-4">
            <p
              className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-stone-600 to-gray-800"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Agus & Mardiana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
