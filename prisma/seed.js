import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import env from "node:process";
import bcrypt from "bcrypt"

const pass1 = await bcrypt.hash(process.env.PASS1, 10)
const pass2 = await bcrypt.hash(process.env.PASS2, 20)

// const testguy = {
//     name: "TestBoy",
//     email: "test@test.com",
//     password: `${pass1}`,
//     phone: "123456789",
//     role: "Admin",
// }

// const testgirl = {
//     name: "TestGirl",
//     email: "test2@test.com",
//     password: `${pass2}`,
//     phone: "123456789",
//     role: "Admin",
// }

async function seed() {
    const testGuy = await prisma.user.create({
        data: {
            name: "TestBoy",
            email: "test@test.com",
            password: `${pass1}`,
            phone: "123456789",
            role: "Admin",
        }

    })
    console.log("User created", testGuy);

    const testGirl = await prisma.user.create({
        data: {
            name: "TestGirl",
            email: "test2@test.com",
            password: `${pass2}`,
            phone: "123456789",
            role: "Admin",
        }

    })
    console.log("User created", testGirl);

    const testTask = await prisma.task.create({
        data: {
            name: "Fix leak",
            type: "Plumbing",
            location: "Room 204",
            status: "Started"
        }
    })

    console.log("Task created", testTask)

    process.exit(0)

}


seed().catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
})