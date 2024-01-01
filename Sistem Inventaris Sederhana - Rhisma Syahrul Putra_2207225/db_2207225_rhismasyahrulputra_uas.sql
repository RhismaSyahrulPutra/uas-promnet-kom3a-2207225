-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Jan 2024 pada 22.47
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2207225_rhismasyahrulputra_uas`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `inventory_rhismasyahrulputra`
--

CREATE TABLE `inventory_rhismasyahrulputra` (
  `id` int(255) NOT NULL,
  `nama_barang` varchar(255) NOT NULL,
  `jumlah` int(255) NOT NULL,
  `harga_satuan` int(255) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `inventory_rhismasyahrulputra`
--

INSERT INTO `inventory_rhismasyahrulputra` (`id`, `nama_barang`, `jumlah`, `harga_satuan`, `lokasi`, `deskripsi`) VALUES
(1, 'Laptop ASUS ROG Strix G15', 5, 12000000, 'Bandung', 'Laptop gaming terkini dengan prosesor Intel Core i7 dan GPU NVIDIA RTX 3070.'),
(2, 'Samsung Galaxy S21 Ultra', 10, 15000000, 'Jakarta', 'Smartphone dengan kamera 108MP dan layar Dynamic AMOLED 6.8 inci.'),
(3, 'Sony Bravia 65 inch', 8, 18000000, 'Denpasar', 'LED TV 4K dengan teknologi HDR dan speaker Acoustic Surface Audio+.'),
(4, 'Canon EOS R5', 3, 35000000, 'Manokwari', 'Kamera Mirrorless dengan sensor full-frame 45MP dan kemampuan perekaman video 8K.'),
(5, 'LG TurboWash 9kg', 12, 8000000, 'Bandung', 'Mesin cuci dengan teknologi TurboWash dan kapasitas 9kg.'),
(6, 'Bose SoundTouch 700', 6, 5000000, 'Jakarta', 'Soundbar premium dengan desain elegan dan suara berkualitas tinggi.'),
(7, 'Peloton Bike+', 15, 25000000, 'Denpasar', 'Sepeda indoor cerdas dengan layar sentuh 23.8 inci dan kelas pelatihan interaktif.'),
(8, 'Behringer X32', 4, 28000000, 'Manokwari', 'Mixer digital 32-channel dengan preamp Midas dan interface audio USB.'),
(9, 'Herman Miller Aeron', 20, 7500000, 'Bandung', 'Kursi kantor ergonomic dengan dukungan postur tubuh.'),
(10, 'Epson Home Cinema 5050UB', 7, 27000000, 'Jakarta', 'Proyektor 4K dengan teknologi 3LCD dan dukungan HDR.');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `inventory_rhismasyahrulputra`
--
ALTER TABLE `inventory_rhismasyahrulputra`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `inventory_rhismasyahrulputra`
--
ALTER TABLE `inventory_rhismasyahrulputra`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
