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

export async function editTask(content) {
    return await dbClient.task.update({
        where: {
            id: content.id
        },
        data: {
            name: content.name,
            type: content.type,
            location: content.location,
            status: content.status
        }
    })
}

export async function deleteTask(id) {
    return await dbClient.task.delete({
        where: {
            id: id
        }
    })
}