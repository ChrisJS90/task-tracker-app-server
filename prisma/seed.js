const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    const testGuy = await prisma.user.upsert({
        where: { email: "test@test.com" },
        update: {},
        create: {
            email: "test@test.com",
            name: "Test",
            password: "testpassword",
            phone: "123456789",
            role: "Admin",
        }

    })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })