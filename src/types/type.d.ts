interface ResponseAPI{
  status: number;
  message: string;
  data: any;
}

interface Token{
  id: string;
  name: string;
  email: string;
  roleId: string;
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
