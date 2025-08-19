import { useState } from "react";

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0112 15a5 5 0 01-1.414-3.539m-3.414-1.414A5 5 0 006 15a5 5 0 00-1.414-3.539m-3.414 1.414A6.97 6.97 0 001 16c0 .34.024.673.07 1h10.86z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2 transform rotate-45"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </svg>
);

const Kehadiran = () => {
  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "",
    status: "Hadir",
  });
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyOMr5tULQq-K8NGydKWShGS0g209xd3eH27IDkEOpZ4Oc6gdctiV4mjZnrDy8zSkO9/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validasi input
    if (!formData.nama.trim()) {
      alert("Nama tidak boleh kosong!");
      setLoading(false);
      return;
    }
    if (formData.jumlah <= 0) {
      alert("Jumlah tamu harus lebih dari 0!");
      setLoading(false);
      return;
    }

    // Buat FormData untuk format URL-encoded
    const form = new FormData();
    form.append("nama", formData.nama);
    form.append("jumlah", formData.jumlah);
    form.append("status", formData.status);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: form, // Gunakan FormData untuk mengirim data
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.result === "success") {
        alert("Terima kasih, konfirmasi Anda telah tercatat!");
        setFormData({ nama: "", jumlah: "", status: "Hadir" });
      } else {
        throw new Error(result.error || "Gagal menyimpan data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Terjadi kesalahan: ${error.message}. Silakan coba lagi.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4 font-utama">
      {/* Kontainer form dengan bayangan dan animasi */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        {/* Header Form */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-gray-500 mt-2">Mohon isi formulir di bawah ini.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Nama */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserIcon />
            </span>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-purple-500 focus:bg-white transition"
              placeholder="Nama Lengkap Anda"
            />
          </div>

          {/* Input Jumlah Tamu */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UsersIcon />
            </span>
            <input
              type="number"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
              required
              min="1"
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-purple-500 focus:bg-white transition"
              placeholder="Jumlah Tamu"
            />
          </div>

          {/* Pilihan Kehadiran */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CheckCircleIcon />
            </span>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 appearance-none focus:outline-none focus:border-purple-500 focus:bg-white transition"
            >
              <option value="Hadir">Saya akan Hadir</option>
              <option value="Tidak Hadir">Maaf, tidak bisa hadir</option>
            </select>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Mengirim...
              </>
            ) : (
              <>
                Kirim Konfirmasi
                <SendIcon />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Kehadiran;
