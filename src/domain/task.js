import dbClient from "../utils/dbClient.js";

export async function getAllTasks() {
    return await dbClient.task.findMany()
}

