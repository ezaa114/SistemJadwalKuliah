export interface MataKuliah {
  kode: string;
  nama: string;
  sks: number;
  dosen: string;
  deskripsi: string;
  semester: number;
}

export const dataMataKuliah: MataKuliah[] = [
  {
    kode: 'IF-401',
    nama: 'Pemrograman Mobile',
    sks: 3,
    dosen: 'Dr. Ahmad Fauzi',
    deskripsi:
      'Mempelajari pengembangan aplikasi mobile menggunakan React Native dan Expo, mencakup UI components, navigasi, state management, dan deployment.',
    semester: 7,
  },
  {
    kode: 'IF-312',
    nama: 'Basis Data Lanjut',
    sks: 3,
    dosen: 'Dr. Sari Dewi',
    deskripsi:
      'Membahas konsep lanjutan basis data relasional dan NoSQL, termasuk optimasi query, indexing, transaksi, dan desain skema.',
    semester: 5,
  },
  {
    kode: 'IF-405',
    nama: 'Kecerdasan Buatan',
    sks: 3,
    dosen: 'Dr. Rizal Hakim',
    deskripsi:
      'Pengantar AI meliputi search algorithms, machine learning dasar, neural networks, dan penerapan dalam problem solving.',
    semester: 7,
  },
  {
    kode: 'IF-308',
    nama: 'Jaringan Komputer',
    sks: 2,
    dosen: 'Dr. Putri Indah',
    deskripsi:
      'Mempelajari arsitektur jaringan, protokol TCP/IP, routing, switching, keamanan jaringan, dan administrasi server.',
    semester: 5,
  },
  {
    kode: 'IF-402',
    nama: 'Rekayasa Perangkat Lunak',
    sks: 3,
    dosen: 'Dr. Hendra Putra',
    deskripsi:
      'Membahas metodologi pengembangan software (Agile, Scrum), requirement engineering, testing, CI/CD, dan manajemen proyek.',
    semester: 7,
  },
];
