import { RoleName, User } from "@/generated/prisma";
import { prisma } from "../prisma";

export async function GetRoleIdByName(roleName: RoleName) {
    const role = await prisma.role.findFirst({
        where: { name: roleName },
    });
    return role ? role.id : null;
}

export async function GetRoleNameByRoleId(id :string) {
    const role = await prisma.role.findFirst({
        where: { id },
    });
    return role ? role.name : null;
    
}

export async function GetAllUsers() {
    return await prisma.user.findMany();
}

export async function GetUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: { email },
        include: {
            Role: true,
        }
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
            Role: {
                name: role
            }
        },
    });
}


export async function CreateUser(data: Partial<User>) {
    if (!data.email || !data.password) {
        throw new Error("Email and password are required.");
    }
    const existingUser = await GetUserByEmail(data.email);
    if (existingUser) {
        throw new Error("User already exists with this email.");
    }
    return await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
            Role: {
                connect: { id: data.roleId },
            },
        },
        include:{
            Role: true,
        }
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

export async function UpsertToken(id: string, token: string) {
    try {
        const user = await GetUserById(id);
        if (!user) {
            throw new Error("User not found.");
        }
    
        if (user.sessionToken === token) {
            return user;
        }
        return await prisma.user.update({
            where: { id },
            data: {
                sessionToken: token,
            },
            // update: { sessionToken: token },
            // create: {
            //     sessionToken: token,
            // },
        });
        
    } catch (error) {
        console.error("Error in UpsertToken: ", error);
        return null
    }
}

export async function DeleteUser(id: string) {
    return await prisma.user.delete({
        where: { id },
    });
}