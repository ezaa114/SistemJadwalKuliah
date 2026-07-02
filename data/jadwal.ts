export interface JadwalItem {
  id: string;
  matkulNama: string;
  ruangan: string;
  jamMulai: string;
  jamSelesai: string;
}

export interface JadwalSection {
  title: string;
  data: JadwalItem[];
}

export const dataJadwal: JadwalSection[] = [
  {
    title: 'Senin',
    data: [
      {
        id: 's1',
        matkulNama: 'Machine Learning (Praktikum)',
        ruangan: 'AI LAB - Teknik D',
        jamMulai: '14.45',
        jamSelesai: '16.25',
      },
    ],
  },
  {
    title: 'Selasa',
    data: [
      {
        id: 's2',
        matkulNama: 'Pemrograman Mobile (Teori)',
        ruangan: '3C.2.07 - Teknik C',
        jamMulai: '08.45',
        jamSelesai: '10.25',
      },
      {
        id: 's3',
        matkulNama: 'Big Data (Teori)',
        ruangan: '3C.2.05 - Teknik C',
        jamMulai: '13.00',
        jamSelesai: '14.40',
      },
    ],
  },
  {
    title: 'Rabu',
    data: [
      {
        id: 's4',
        matkulNama: 'Routing & Switching (Teori)',
        ruangan: '3C.2.08 - Teknik C',
        jamMulai: '10.30',
        jamSelesai: '12.10',
      },
      {
        id: 's5',
        matkulNama: 'Implementasi dan Pengujian PL (Teori)',
        ruangan: '3A.1.08 - Teknik A',
        jamMulai: '13.00',
        jamSelesai: '15.30',
      },
    ],
  },
  {
    title: 'Kamis',
    data: [
      {
        id: 's6',
        matkulNama: 'Routing & Switching (Praktikum)',
        ruangan: 'Network Computer Lab - Teknik C',
        jamMulai: '07.00',
        jamSelesai: '08.40',
      },
      {
        id: 's7',
        matkulNama: 'Pemrograman Mobile (Praktikum)',
        ruangan: 'Mobile Lab - Teknik D',
        jamMulai: '08.45',
        jamSelesai: '10.25',
      },
      {
        id: 's8',
        matkulNama: 'Big Data (Praktikum)',
        ruangan: 'AI LAB - Teknik D',
        jamMulai: '08.45',
        jamSelesai: '10.25',
      },
      {
        id: 's9',
        matkulNama: 'Natural Language Processing (Praktikum)',
        ruangan: 'Computer System LAB - Teknik C',
        jamMulai: '14.45',
        jamSelesai: '16.25',
      },
    ],
  },
  {
    title: 'Jumat',
    data: [
      {
        id: 's10',
        matkulNama: 'Machine Learning (Teori)',
        ruangan: '3A.1.09 - Teknik A',
        jamMulai: '08.45',
        jamSelesai: '10.25',
      },
      {
        id: 's11',
        matkulNama: 'Natural Language Processing (Teori)',
        ruangan: '3C.1.04 - Teknik C',
        jamMulai: '10.30',
        jamSelesai: '12.10',
      },
    ],
  },
];
