import dbClient from "../utils/dbClient.js"

export async function getAllUsers() {
    return await dbClient.user.findMany()
}

export async function getByEmail(email) {
    return await dbClient.user.findUnique({
        where: {
            email: email,
        }
    })
}