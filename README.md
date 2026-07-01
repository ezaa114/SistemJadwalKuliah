# 📚 Sistem Jadwal Kuliah (JadwalMK)

Sistem Jadwal Kuliah (**JadwalMK**) adalah aplikasi mobile berbasis **React Native (Expo)** dan **TypeScript** yang dirancang untuk membantu mahasiswa mengelola ringkasan mata kuliah, jadwal mingguan, serta daftar pertemuan kuliah secara terstruktur. 

Proyek ini dibuat sebagai implementasi praktis dari berbagai teknik rendering list dalam React Native, yaitu **`.map()`**, **`FlatList`**, dan **`SectionList`**, semuanya digabungkan dalam satu proyek yang rapi dan responsif.

---

## ✨ Fitur Utama

### 🌓 1. Dynamic Dark & Light Mode Toggle
*   Mendukung pergantian tema dinamis antara **Mode Terang (Academic Slate)** dan **Mode Gelap (Midnight Academic)** secara *real-time*.
*   Tombol toggle matahari/bulan yang interaktif terletak di kanan atas header halaman utama.
*   Status Bar dan warna navigasi otomatis menyesuaikan dengan tema aktif demi kenyamanan mata mahasiswa.

### 🏫 2. Desain Portal Akademik Modern (Academic Navy Dashboard)
*   Menggunakan skema warna akademis (Deep Navy, Slate Blue, Slate Grey, and Soft Lavender) yang memberikan kesan profesional, tepercaya, dan bersih.
*   Desain kartu yang modern dengan sudut membulat (`BorderRadius: 16px`) dan bayangan halus khas dashboard portal akademik modern (seperti Canvas/Google Classroom).
*   **Efek Tekan Taktil (Scale Press Animation)**: Kartu mata kuliah dan pertemuan akan sedikit menyusut (`scale: 0.98`) ketika disentuh untuk memberikan sensasi menekan tombol fisik yang responsif.

### 🖥️ 3. Layout Responsif / Split Screen (Tablet & Web)
*   Menggunakan sistem **Split Layout (Master-Detail)** yang mendeteksi lebar layar secara otomatis.
*   Pada layar HP, mengetuk item akan membuka halaman detail (drilldown).
*   Pada tablet atau web (layar lebar), aplikasi akan otomatis membagi layar menjadi dua kolom: daftar item di sisi kiri (Master) dan panel detail di sisi kanan (Detail).

---

## 🛠️ Tech Stack

*   **Framework Utama**: React Native & Expo (SDK 54)
*   **Bahasa Pemrograman**: TypeScript
*   **Navigasi**: `@react-navigation/native` & `@react-navigation/bottom-tabs`
*   **Icons**: `@expo/vector-icons` (Feather)
*   **Layouting & Safe Area**: `react-native-safe-area-context`

---

## 📋 Struktur Halaman & Syarat Tugas

Aplikasi ini telah memenuhi seluruh kriteria dan butir tugas akademik:

1.  **Halaman Ringkasan Mata Kuliah (`.map()`)**
    *   Menampilkan daftar mata kuliah menggunakan fungsi `.map()` dari array statis.
    *   Setiap item menampilkan: Nama Mata Kuliah, Kode Matkul, Jumlah SKS, dan Dosen Pengampu.
    *   Menggunakan key unik berbasis kode mata kuliah.
2.  **Halaman Daftar Pertemuan (`FlatList`)**
    *   Menampilkan daftar minimal 10 pertemuan dari seluruh mata kuliah secara detail.
    *   Mengimplementasikan 4 props FlatList wajib:
        *   `keyExtractor` — ID unik per pertemuan.
        *   `ItemSeparatorComponent` — Garis pembatas visual antarkartu.
        *   `ListHeaderComponent` — Judul halaman dinamis beserta ringkasan jumlah pertemuan.
        *   `ListEmptyComponent` — Tampilan khusus ketika daftar data kosong.
3.  **Halaman Jadwal Kuliah (`SectionList`)**
    *   Menampilkan jadwal mata kuliah yang dikelompokkan berdasarkan **Hari** (Senin - Jumat).
    *   Header hari dibedakan secara visual menggunakan warna aksen, ikon nomor hari, dan pembatas garis horizontal.
    *   Menampilkan informasi: Nama Mata Kuliah, Ruangan, dan Jam Mulai–Selesai.

---

## 📂 Struktur Proyek

```bash
JadwalMK/
├── App.tsx                  # Entry point aplikasi & Tab Navigator
├── app.json                 # Konfigurasi Expo
├── constants/
│   └── theme.ts             # Palet warna terang/gelap & tipografi akademik
├── context/
│   └── ThemeContext.tsx     # State provider untuk tema dinamis
├── data/
│   ├── jadwal.ts            # Data statis jadwal kuliah harian (SectionList)
│   ├── matakuliah.ts        # Data statis ringkasan mata kuliah (.map)
│   └── pertemuan.ts         # Data statis daftar pertemuan (FlatList)
├── components/
│   ├── MatkulCard.tsx       # Kartu mata kuliah dengan animasi presstouch
│   ├── PertemuanItem.tsx    # Kartu daftar pertemuan dengan animasi presstouch
│   ├── JadwalItemCard.tsx   # Kartu jadwal per hari
│   ├── JadwalSectionHeader.tsx # Header pemisah hari di SectionList
│   ├── DetailPanel.tsx      # Panel detail mata kuliah
│   └── SplitLayout.tsx      # Komponen pembagi kolom layar lebar
├── screens/
│   ├── RingkasanScreen.tsx  # Halaman Ringkasan (.map)
│   ├── PertemuanScreen.tsx  # Halaman Pertemuan (FlatList)
│   ├── JadwalScreen.tsx     # Halaman Jadwal Harian (SectionList)
│   └── SplashScreen.tsx     # Halaman Loader pembuka
└── tsconfig.json            # Konfigurasi TypeScript compiler
```

---

## 🚀 Cara Menjalankan Aplikasi Secara Lokal

### Prasyarat
Pastikan Anda sudah menginstal **Node.js** dan **npm** di komputer Anda.

### Langkah-langkah
1.  **Clone repositori ini**:
    ```bash
    git clone https://github.com/ezaa114/SistemJadwalKuliah.git
    cd SistemJadwalKuliah
    ```
2.  **Instal dependensi proyek**:
    ```bash
    npm install
    ```
3.  **Jalankan server Expo**:
    ```bash
    npx expo start
    ```
4.  **Buka aplikasi**:
    *   **Android/iOS**: Scan QR Code di terminal menggunakan aplikasi **Expo Go** di HP Anda.
    *   **Web**: Tekan tombol `w` di terminal untuk membukanya di browser web.

---

## 📝 Catatan Tambahan (Pengembangan Masa Depan)
*   **Integrasi Backend**: Struktur data dirancang agar mudah diganti dari array statis ke panggilan REST API menggunakan Axios atau Fetch.
*   **Lokalisasi**: Format hari dan jam saat ini dihardcode menggunakan format waktu akademik lokal (WIB).

