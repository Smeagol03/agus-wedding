import { useState } from "react";

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
    <div className="h-screen px-4 flex items-center justify-center">
      <div className="border-2 border-black p-6 rounded-2xl shadow-lg w-full md:max-w-md mx-auto font-utama">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Konfirmasi Kehadiran
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Tuliskan nama Anda"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Jumlah Tamu
            </label>
            <input
              type="number"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Jumlah tamu"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kehadiran
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim Konfirmasi"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Kehadiran;
