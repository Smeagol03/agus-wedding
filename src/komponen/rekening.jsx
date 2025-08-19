import React from "react";

const Rekening = () => {
  return (
    <div className="py-20 px-4 bg-amber-200">
      <div className="flex flex-col items-center justify-center p-6 bg-amber-100 rounded-xl shadow-2xl w-full max-w-sm mx-auto font-utama">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 font-head">
            Hadiah Pernikahan
          </h2>
          <p className="text-lg text-gray-600 mb-4">Agus & Mardiana</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg w-full mb-4">
          <p className="text-xs font-semibold text-blue-800">
            Untuk teman-teman yang ingin mengirimkan hadiah, bisa melalui
            transfer ke rekening berikut:
          </p>
        </div>
        <div className="w-full bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-500">Bank</span>
            <span className="text-xs font-semibold text-gray-800">BCA</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-500">
              No. Rekening
            </span>
            <span className="text-xs font-semibold text-gray-800">
              7255322401
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-gray-500">Atas Nama</span>
            <span className="text-xs font-semibold text-gray-800">
              AGUS PUTRA
            </span>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-4">
          Doa restu dari Anda adalah hadiah terindah bagi kami. Terima kasih
          atas perhatiannya.
        </p>
      </div>
    </div>
  );
};

export default Rekening;
