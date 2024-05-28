import dbClient from "../utils/dbClient.js"

export async function getAllCharacters() {
    return await dbClient.user.findMany()
}