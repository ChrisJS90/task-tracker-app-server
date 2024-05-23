const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
    const user = await prisma.user.create({
        name: "Test",
        email: "test@test.com",
        password: "testpassword",
        phone: "123456789",
        role: "Admin",
    })

    process.exit(0);
}

seed().catch(async (error) =>{
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
})