import { useState } from "react";

const Kehadiran = () => {
  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "",
    status: "Hadir",
  });

  const [loading, setLoading] = useState(false);

  // Ganti dengan URL Web App yang kamu dapat dari Google Apps Script
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyOMr5tULQq-K8NGydKWShGS0g209xd3eH27IDkEOpZ4Oc6gdctiV4mjZnrDy8zSkO9/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Terima kasih, konfirmasi Anda telah tercatat!");
      setFormData({ nama: "", jumlah: "", status: "Hadir" });
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Konfirmasi Kehadiran
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nama */}
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

        {/* Jumlah Tamu */}
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

        {/* Status Kehadiran */}
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

        {/* Tombol Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
        >
          {loading ? "Mengirim..." : "Kirim Konfirmasi"}
        </button>
      </form>
    </div>
  );
};

export default Kehadiran;
