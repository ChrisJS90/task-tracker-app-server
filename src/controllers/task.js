import { getAllTasks, addTask, editTask, deleteTask } from "../domain/task.js";
import { sendDataResponse, sendErrorResponse } from "../utils/responses.js"

export const getAll = async(req, res) => {
    const users = await getAllTasks();
    return sendDataResponse(res, 200, users)
}

export const createNewTask = async(req, res) => {
    const{ name, type, location, status} = req.body

    const content = {
        name: name,
        type: type,
        location: location,
        status: status
    }

    // Only use this is adding users besides Caroline and I
    // const userRole = req.user.userRole

    const createdTask = await addTask(content)

    return sendDataResponse(res, 200, {
        task: createdTask
    })
}

export const editingTask = async(req, res) => {
    const{ name, type, location, status, id} = req.body

    const content = {
        name: name,
        type: type,
        location: location,
        status: status,
        id: id
    }

    const editedTask = await editTask(content)

    return sendDataResponse(res, 200, {
        task: editedTask
    })
}

export const deletingTask = async(req, res) => {
    const id = req.body.id

    const deletedTask = await deleteTask(id)

    return sendDataResponse(res, 200, {
        task: deletedTask
    })
}