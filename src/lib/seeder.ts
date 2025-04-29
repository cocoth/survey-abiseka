import { Role, RoleName } from "@/generated/prisma";
import { prisma } from "./prisma";

export async function RoleSeeder() {

    const roles = [
        { name: RoleName.admin },
        { name: RoleName.user },
        { name: RoleName.guest },
    ];

    for (const role of roles) {
        await prisma.role.upsert({
            where: { name: role.name }, // Ensure 'id' is used as the unique identifier
            update: {},
            create: role,
        });
    }

    await prisma.$disconnect();
}
