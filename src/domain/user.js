import dbClient from "../utils/dbClient.js"
import bcrypt from "bcrypt"

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

export async function createUser(name, email, password, phone, role) {
    const passwordHash = await bcrypt.hash(password, 10)

    return await dbClient.user.create({
        data: {
            name: name,
            email: email,
            password: passwordHash,
            phone: phone,
            role: role
        }

    })

}