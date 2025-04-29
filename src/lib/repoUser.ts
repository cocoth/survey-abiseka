import { RoleName, User } from "@/generated/prisma";
import { prisma } from "./prisma";

export async function GetRoleIdByName(roleName: RoleName) {
    const role = await prisma.role.findFirst({
        where: { name: roleName },
    });
    return role ? role.id : null;
}

export async function GetAllUsers() {
    return await prisma.user.findMany();
}

export async function GetUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: { email },
    });
}

export async function GetUserById(id: string) {
    return await prisma.user.findUnique({
        where: { id },
    });
}

export async function GetUserByName(name: string) {
    return await prisma.user.findFirst({
        where: { name },
    });
}

export async function GetUserByRole(role: RoleName) {
    return await prisma.user.findFirst({
        where: {
            role: {
                name: role
            }
        },
    });
}

export async function CreateUser(data: Partial<User>) {
    return await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
            role: {
                connect: { id: data.roleId },
            },
        },
    });
}

export async function UpdateUser(id: string, data: Partial<User>) {
    return await prisma.user.update({
        where: { id },
        data: {
            ...(data.name && { name: data.name }),
            ...(data.email && { email: data.email }),
            ...(data.password && { password: data.password }),
            ...(data.roleId && { role: { connect: { id: data.roleId } } }),
        },
    });
}

export async function DeleteUser(id: string) {
    return await prisma.user.delete({
        where: { id },
    });
}