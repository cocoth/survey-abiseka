import { Role, RoleName } from "@/generated/prisma";
import { prisma } from "./prisma";

export async function roleSeeder() {

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

roleSeeder()
    .then(() => console.log("Roles seeded successfully!"))
    .catch((error) => console.error("Error seeding roles:", error))
    .finally(() => {
        console.log("Seeder process finished.");
    });