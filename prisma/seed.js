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
    console.log("Character created", testGuy);

    process.exit(0)

}


seed().catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
})