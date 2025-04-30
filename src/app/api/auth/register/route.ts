import { CreateUser, GetRoleIdByName, GetUserByEmail } from "@/lib/repo/userRepo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({
                status: 400,
                message: "invalid name, email or password",
                data: null
            } as ResponseAPI , { status: 400 });
        }

        const user = await GetUserByEmail(email);
        if (user) {
            return NextResponse.json({
                status: 400,
                message: "user already exists",
                data: null
            } as ResponseAPI, { status: 400 });
        }

        const userRole = await GetRoleIdByName("user");

        const newUser = await CreateUser({
            name,
            email,
            password,
            roleId: userRole!
        });

        return NextResponse.json({
            status: 200,
            message: "Ok",
            data: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                roleId: newUser.roleId,
            }
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "internal server error",
            data: null
        } as ResponseAPI, { status: 500 });
    }
}