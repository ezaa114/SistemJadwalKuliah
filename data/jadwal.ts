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
        matkulNama: 'Pemrograman Mobile',
        ruangan: 'A201',
        jamMulai: '08.00',
        jamSelesai: '10.30',
      },
      {
        id: 's2',
        matkulNama: 'Kecerdasan Buatan',
        ruangan: 'B102',
        jamMulai: '13.00',
        jamSelesai: '15.30',
      },
    ],
  },
  {
    title: 'Selasa',
    data: [
      {
        id: 's3',
        matkulNama: 'Basis Data Lanjut',
        ruangan: 'C303',
        jamMulai: '08.00',
        jamSelesai: '10.30',
      },
      {
        id: 's4',
        matkulNama: 'Rekayasa Perangkat Lunak',
        ruangan: 'A105',
        jamMulai: '13.00',
        jamSelesai: '15.30',
      },
    ],
  },
  {
    title: 'Rabu',
    data: [
      {
        id: 's5',
        matkulNama: 'Jaringan Komputer',
        ruangan: 'D201',
        jamMulai: '10.00',
        jamSelesai: '11.40',
      },
      {
        id: 's6',
        matkulNama: 'Pemrograman Mobile',
        ruangan: 'Lab-A2',
        jamMulai: '13.00',
        jamSelesai: '15.30',
      },
    ],
  },
  {
    title: 'Kamis',
    data: [
      {
        id: 's7',
        matkulNama: 'Kecerdasan Buatan',
        ruangan: 'Lab-B1',
        jamMulai: '08.00',
        jamSelesai: '10.30',
      },
      {
        id: 's8',
        matkulNama: 'Basis Data Lanjut',
        ruangan: 'Lab-C1',
        jamMulai: '13.00',
        jamSelesai: '15.30',
      },
    ],
  },
  {
    title: 'Jumat',
    data: [
      {
        id: 's9',
        matkulNama: 'Rekayasa Perangkat Lunak',
        ruangan: 'A201',
        jamMulai: '08.00',
        jamSelesai: '10.30',
      },
      {
        id: 's10',
        matkulNama: 'Jaringan Komputer',
        ruangan: 'D201',
        jamMulai: '13.00',
        jamSelesai: '14.40',
      },
    ],
  },
];
