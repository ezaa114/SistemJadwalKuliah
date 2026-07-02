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
    kode: 'IF-601',
    nama: 'Machine Learning',
    sks: 3,
    dosen: 'Ause Bellapansa, S.T., M.Cs., M.Kom',
    deskripsi:
      'Mempelajari konsep dan algoritma machine learning meliputi supervised learning, unsupervised learning, model evaluation, feature engineering, serta implementasi menggunakan Python dan library scikit-learn.',
    semester: 6,
  },
  {
    kode: 'IF-602',
    nama: 'Pemrograman Mobile',
    sks: 3,
    dosen: 'Panji Rakhmat Setiawan, S.Kom., MMSI',
    deskripsi:
      'Pengembangan aplikasi mobile cross-platform menggunakan React Native dan Expo, mencakup UI components, navigasi, state management, API integration, dan deployment ke Play Store/App Store.',
    semester: 6,
  },
  {
    kode: 'IF-603',
    nama: 'Big Data',
    sks: 3,
    dosen: 'Dr. Ir. Evizal, S.T., M.Eng',
    deskripsi:
      'Membahas arsitektur dan teknologi Big Data termasuk Hadoop, Spark, data pipeline, data lake, serta teknik pemrosesan dan analisis data berskala besar.',
    semester: 6,
  },
  {
    kode: 'IF-604',
    nama: 'Routing & Switching',
    sks: 3,
    dosen: 'Yudhi Arta, S.T., M.Kom',
    deskripsi:
      'Mempelajari konfigurasi dan manajemen perangkat jaringan (router & switch), protokol routing (OSPF, EIGRP, BGP), VLAN, inter-VLAN routing, dan troubleshooting jaringan enterprise.',
    semester: 6,
  },
  {
    kode: 'IF-605',
    nama: 'Implementasi dan Pengujian Perangkat Lunak',
    sks: 3,
    dosen: 'Dr. Ir. Akmar Efendi, S.Kom., M.Kom',
    deskripsi:
      'Membahas strategi implementasi perangkat lunak, teknik pengujian (unit testing, integration testing, system testing), test automation, CI/CD pipeline, dan quality assurance.',
    semester: 6,
  },
  {
    kode: 'IF-606',
    nama: 'Natural Language Processing',
    sks: 3,
    dosen: 'Dr. Arbi Haza Nasution, B.IT.(Hons), M.IT',
    deskripsi:
      'Pengantar pemrosesan bahasa alami meliputi tokenisasi, POS tagging, named entity recognition, sentiment analysis, word embeddings, dan penerapan model transformer.',
    semester: 6,
  },
];
