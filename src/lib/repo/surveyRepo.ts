import { Survey } from "@/generated/prisma";
import { prisma } from "../prisma";

export async function GetSurveyById(id: string) {
    return await prisma.survey.findUnique({
        where: { id },
        include: {
            User: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    Data_PT: true
                },
            },
            StatusSurvey: {
                select: {
                    id: true,
                    status: true,
                },
            },
        }
    });
}

export async function GetSurveyByName(name: string) {
    return await prisma.survey.findFirst({
        where: { User: { name } },
    });
}

export async function GetSurveyByUserId(userId: string) {
    return await prisma.survey.findFirst({
        where: { userId },
        include: {
            User: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    Data_PT: true
                },
            },
            StatusSurvey: {
                select: {
                    id: true,
                    status: true,
                },
            },
        }
    });
}

export async function GetSurveyByStatus(status: string) {
    return await prisma.survey.findMany({
        where: {
            StatusSurvey: {
                status,
            }
        },
        include: {
            User: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    Data_PT: true
                },
            },
            StatusSurvey: {
                select: {
                    id: true,
                    status: true,
                },
            },
        }
    });
}

export async function GetAllSurveys() {
    return await prisma.survey.findMany({
        include: {
            User: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    Data_PT: true
                },
            },
            StatusSurvey: {
                select: {
                    id: true,
                    status: true,
                },
            },
        }
    });
}

export async function CreateSurvey(data: Partial<Survey>) {
    if (!data) {
        throw new Error("all fields are required.");
    }
    return await prisma.survey.create({
        data: {
            kecepatan_internet: data.kecepatan_internet,
            provider_internet: data.provider_internet,
            jenis_internet: data.jenis_internet,
            jumlah_komputer: data.jumlah_komputer,
            jenis_komputer: data.jenis_komputer,
            spesifikasi_komputer: data.spesifikasi_komputer,
            jumlah_laboratorium: data.jumlah_laboratorium,
            jenis_laboratorium: data.jenis_laboratorium,
            pendinginan_laboratorium: data.pendinginan_laboratorium,
            StatusSurvey:{
                create: {
                    status: "PENDING",
                }
            },
            userId: data.userId as string,
        },
    });
}

export async function UpdateSurvey(id: string, data: Partial<Survey>) {
    if (!id) {
        throw new Error("id is required.");
    }
    return await prisma.survey.update({
        where: { id },
        data: {
            kecepatan_internet: data.kecepatan_internet,
            provider_internet: data.provider_internet,
            jenis_internet: data.jenis_internet,
            jumlah_komputer: data.jumlah_komputer,
            jenis_komputer: data.jenis_komputer,
            spesifikasi_komputer: data.spesifikasi_komputer,
            jumlah_laboratorium: data.jumlah_laboratorium,
            jenis_laboratorium: data.jenis_laboratorium,
            pendinginan_laboratorium: data.pendinginan_laboratorium,
            StatusSurvey: {
                update: {
                    status: "PENDING",
                }
            },
            userId: data.userId,
        },
    });
}

export async function DeleteSurvey(id: string) {
    if (!id) {
        throw new Error("id is required.");
    }
    return await prisma.survey.delete({
        where: { id },
    });
}

export async function UpsertStatusSurvey(id: string, status: string) {
    if (!id) {
        throw new Error("id is required.");
    }
    return await prisma.survey.update({
        where: { id },
        data: {
            StatusSurvey: {
                upsert: {
                    create: {
                        status,
                    },
                    update: {
                        status,
                    },
                }
            }
        }
    })
}

export async function CountAllSurvey(): Promise<number> {
    return await prisma.survey.count()
}

export async function CountSurveyByStatus(status: string): Promise<number> {
    return await prisma.survey.count({
        where: {
            StatusSurvey: {
                status,
            }
        }
    })
}