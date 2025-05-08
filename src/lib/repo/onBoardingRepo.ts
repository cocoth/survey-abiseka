import { Data_PT } from "@/generated/prisma";
import { prisma } from "../prisma";

export async function CreateBoardingUser(data: Partial<Data_PT>){
    if (!data || !data.userId) {
        throw new Error("all fields are required.");
    }
    return await prisma.data_PT.create({
        data: {
            nama: data.nama,
            kode: data.kode,
            akreditasi: data.akreditasi,
            tanggal_berdiri: data.tanggal_berdiri,
            no_SK_pendirian: data.no_SK_pendirian,
            tanggal_SK_pendirian: data.tanggal_SK_pendirian,
            alamat: data.alamat,
            userId: data.userId,
        },
    });
}

export async function UpdateBoardingUser(id: string, data: Partial<Data_PT>) {
    if (!id) {
        throw new Error("id is required.");
    }
    return await prisma.data_PT.update({
        where: { id },
        data: {
            nama: data.nama,
            kode: data.kode,
            akreditasi: data.akreditasi,
            tanggal_berdiri: data.tanggal_berdiri,
            no_SK_pendirian: data.no_SK_pendirian,
            tanggal_SK_pendirian: data.tanggal_SK_pendirian,
            alamat: data.alamat,
            
        },
    });
}

export async function GetBoardingUserById(id: string) {
    return await prisma.data_PT.findUnique({
        where: { id },
    });
}

export async function GetBoardingUserByName(name: string) {
    return await prisma.data_PT.findFirst({
        where: { User: { name } },
    });
}

export async function GetBoardingUserByUserId(userId: string) {
    return await prisma.data_PT.findFirst({
        where: { userId }
    });
}

export async function GetAllBoardingUsers() {
    return await prisma.data_PT.findMany();
}

export async function DeleteBoardingUser(id: string) {
    return await prisma.data_PT.delete({
        where: { id },
    });
}