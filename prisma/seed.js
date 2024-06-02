import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
    const testGuy = await prisma.user.create({
        data: {
            name: "TestBoy",
            email: "test@test.com",
            password: "testpassword",
            phone: "123456789",
            role: "Admin",
        }

    })
    console.log("User created", testGuy);

    const testGirl = await prisma.user.create({
        data: {
            name: "TestGirl",
            email: "test2@test.com",
            password: "testpassword",
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