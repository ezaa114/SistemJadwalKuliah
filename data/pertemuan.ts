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
    matkulKode: 'IF-601',
    matkulNama: 'Machine Learning',
    pertemuanKe: 1,
    topik: 'Pengenalan Machine Learning & Supervised vs Unsupervised',
    tanggal: '5 Sep 2025',
  },
  {
    id: 'p2',
    matkulKode: 'IF-601',
    matkulNama: 'Machine Learning',
    pertemuanKe: 2,
    topik: 'Linear Regression & Gradient Descent',
    tanggal: '12 Sep 2025',
  },
  {
    id: 'p3',
    matkulKode: 'IF-602',
    matkulNama: 'Pemrograman Mobile',
    pertemuanKe: 1,
    topik: 'Pengenalan React Native & Expo',
    tanggal: '2 Sep 2025',
  },
  {
    id: 'p4',
    matkulKode: 'IF-602',
    matkulNama: 'Pemrograman Mobile',
    pertemuanKe: 2,
    topik: 'Komponen Dasar & Styling',
    tanggal: '9 Sep 2025',
  },
  {
    id: 'p5',
    matkulKode: 'IF-602',
    matkulNama: 'Pemrograman Mobile',
    pertemuanKe: 3,
    topik: 'Handling Lists & Data Rendering',
    tanggal: '16 Sep 2025',
  },
  {
    id: 'p6',
    matkulKode: 'IF-603',
    matkulNama: 'Big Data',
    pertemuanKe: 1,
    topik: 'Konsep Big Data & Ekosistem Hadoop',
    tanggal: '2 Sep 2025',
  },
  {
    id: 'p7',
    matkulKode: 'IF-603',
    matkulNama: 'Big Data',
    pertemuanKe: 2,
    topik: 'HDFS & MapReduce',
    tanggal: '9 Sep 2025',
  },
  {
    id: 'p8',
    matkulKode: 'IF-604',
    matkulNama: 'Routing & Switching',
    pertemuanKe: 1,
    topik: 'Review Jaringan & Konfigurasi Dasar Router',
    tanggal: '3 Sep 2025',
  },
  {
    id: 'p9',
    matkulKode: 'IF-604',
    matkulNama: 'Routing & Switching',
    pertemuanKe: 2,
    topik: 'Static Routing & Dynamic Routing (RIP)',
    tanggal: '10 Sep 2025',
  },
  {
    id: 'p10',
    matkulKode: 'IF-605',
    matkulNama: 'Implementasi dan Pengujian Perangkat Lunak',
    pertemuanKe: 1,
    topik: 'Strategi Implementasi & Deployment',
    tanggal: '3 Sep 2025',
  },
  {
    id: 'p11',
    matkulKode: 'IF-605',
    matkulNama: 'Implementasi dan Pengujian Perangkat Lunak',
    pertemuanKe: 2,
    topik: 'Unit Testing & Test-Driven Development',
    tanggal: '10 Sep 2025',
  },
  {
    id: 'p12',
    matkulKode: 'IF-606',
    matkulNama: 'Natural Language Processing',
    pertemuanKe: 1,
    topik: 'Pengenalan NLP & Text Preprocessing',
    tanggal: '5 Sep 2025',
  },
  {
    id: 'p13',
    matkulKode: 'IF-606',
    matkulNama: 'Natural Language Processing',
    pertemuanKe: 2,
    topik: 'Tokenisasi, Stemming & Lemmatization',
    tanggal: '12 Sep 2025',
  },
];
