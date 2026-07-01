export interface Pertemuan {
  id: string;
  matkulKode: string;
  matkulNama: string;
  pertemuanKe: number;
  topik: string;
  tanggal: string;
}

export const dataPertemuan: Pertemuan[] = [
  {
    id: 'p1',
    matkulKode: 'IF-401',
    matkulNama: 'Pemrograman Mobile',
    pertemuanKe: 1,
    topik: 'Pengenalan React Native & Expo',
    tanggal: '4 Sep 2025',
  },
  {
    id: 'p2',
    matkulKode: 'IF-401',
    matkulNama: 'Pemrograman Mobile',
    pertemuanKe: 2,
    topik: 'Komponen Dasar & Styling',
    tanggal: '11 Sep 2025',
  },
  {
    id: 'p3',
    matkulKode: 'IF-401',
    matkulNama: 'Pemrograman Mobile',
    pertemuanKe: 3,
    topik: 'Handling Lists & Data Rendering',
    tanggal: '18 Sep 2025',
  },
  {
    id: 'p4',
    matkulKode: 'IF-312',
    matkulNama: 'Basis Data Lanjut',
    pertemuanKe: 1,
    topik: 'Review SQL & Normalisasi',
    tanggal: '5 Sep 2025',
  },
  {
    id: 'p5',
    matkulKode: 'IF-312',
    matkulNama: 'Basis Data Lanjut',
    pertemuanKe: 2,
    topik: 'Indexing & Query Optimization',
    tanggal: '12 Sep 2025',
  },
  {
    id: 'p6',
    matkulKode: 'IF-405',
    matkulNama: 'Kecerdasan Buatan',
    pertemuanKe: 1,
    topik: 'Pengenalan AI & Sejarah',
    tanggal: '3 Sep 2025',
  },
  {
    id: 'p7',
    matkulKode: 'IF-405',
    matkulNama: 'Kecerdasan Buatan',
    pertemuanKe: 2,
    topik: 'Search Algorithms (BFS, DFS)',
    tanggal: '10 Sep 2025',
  },
  {
    id: 'p8',
    matkulKode: 'IF-308',
    matkulNama: 'Jaringan Komputer',
    pertemuanKe: 1,
    topik: 'Model OSI & TCP/IP',
    tanggal: '2 Sep 2025',
  },
  {
    id: 'p9',
    matkulKode: 'IF-308',
    matkulNama: 'Jaringan Komputer',
    pertemuanKe: 2,
    topik: 'Subnetting & IP Addressing',
    tanggal: '9 Sep 2025',
  },
  {
    id: 'p10',
    matkulKode: 'IF-402',
    matkulNama: 'Rekayasa Perangkat Lunak',
    pertemuanKe: 1,
    topik: 'Software Development Life Cycle',
    tanggal: '5 Sep 2025',
  },
  {
    id: 'p11',
    matkulKode: 'IF-402',
    matkulNama: 'Rekayasa Perangkat Lunak',
    pertemuanKe: 2,
    topik: 'Agile & Scrum Framework',
    tanggal: '12 Sep 2025',
  },
  {
    id: 'p12',
    matkulKode: 'IF-401',
    matkulNama: 'Pemrograman Mobile',
    pertemuanKe: 4,
    topik: 'Navigasi & Routing',
    tanggal: '25 Sep 2025',
  },
];
