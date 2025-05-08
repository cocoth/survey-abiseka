interface ResponseAPI{
  status: number;
  message: string;
  data: any;
}

interface Token{
  id: string;
  name: string;
  email: string;
  role: string;
  exp?: number
  iat?: number;
}

interface LoginRequest{
  email: string;
  password: string;
}

interface RegisterRequest{
  name: string;
  email: string;
  password: string;
}

interface OnBoardingRequest{
  nama: string;
  kode: string;
  akreditasi: string;
  tanggalBerdiri: Date;
  noSKPendirian: string;
  tanggalSKPendirian: Date;
  alamat: string;
  userId: string;
}

interface SurveyRequest{
  kecepatan_internet: string;
  provider_internet: string;
  jenis_internet: string;
  jumlah_komputer: string;
  jenis_komputer: string;
  spesifikasi_komputer: string;
  jumlah_laboratorium: string;
  jenis_laboratorium: string;
  pendinginan_laboratorium: string;
  userId: string;
}