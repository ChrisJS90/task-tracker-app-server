import dbClient from "../utils/dbClient.js";

export async function getAllTasks() {
    return await dbClient.task.findMany()
}

export async function addTask(content) {
    return await dbClient.task.create({
        data: {
            name: content.name,
            type: content.type,
            location: content.location,
            status: content.status
        },
        select: {
            id: true,
        }
    })
}