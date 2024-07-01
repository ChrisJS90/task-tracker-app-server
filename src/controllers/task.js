import { getAllTasks, addTask } from "../domain/task.js";
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