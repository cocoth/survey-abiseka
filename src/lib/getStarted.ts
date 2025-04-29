import * as readline from 'node:readline/promises';
import { Logger } from './utils';
import { CreateUser, GetRoleIdByName } from './repoUser';
import { RoleSeeder } from './seeder';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


async function main(){
    Logger.info("main", "Starting the application...");

    await RoleSeeder().catch((error) => {
        Logger.error("main", `Error seeding roles: ${error}`);
    }).then(() => {
        Logger.info("main", "Roles seeded successfully.");
    })

    const name = await input.question("Input name: ");
    const email = await input.question("Input email: ");

    let password: string | null = null;
    let confirmPassword: string | null = null;

    while (!password) {
        password = await input.question("Input password: ");
        if (!password) {
            Logger.warn("main", "Password cannot be empty. Please try again.");
        }
    }

    while (true) {
        confirmPassword = await input.question("Retype password to confirm: ");
        if (confirmPassword === password) {
            Logger.info("main", "Password confirmed successfully.");
            break;
        } else {
            Logger.warn("main", "Passwords do not match. Please try again.");
        }
    }
    const roleId = await GetRoleIdByName("admin")
    const createdUser = await CreateUser({
        name,
        email,
        password,
        roleId: roleId!,
    })

    Logger.success("main", `Please login with email ${createdUser.email} and password ${createdUser.password}`);

}

main().catch((error) => {
    Logger.error("main", `Error: ${error.message}`);
}).finally(() => {
    Logger.info("main", "Application finished.");
    input.close();
});