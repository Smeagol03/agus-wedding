import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Buka from "./komponen/buka";
import Isi from "./komponen/isi";
import Gallery from "./komponen/gallery";
import Countdown from "./komponen/hitung_mundur";
import Jadwal from "./komponen/jadwal";
import Poto from "./komponen/potopoto";
import Kehadiran from "./komponen/kehadiran";
import Komentar from "./komponen/komentar";
import Penutup from "./komponen/penutup";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Buka />
    <Isi />
    <Countdown tanggalAcara="2025-08-27T10:30:00" />
    <Jadwal />
    <Poto />
    <Kehadiran />
    <Komentar />
    <Penutup />
    <Gallery />
  </StrictMode>
);
