import { getAllTasks } from "../domain/task.js";
import { sendDataResponse, sendErrorResponse } from "../utils/responses.js"

export const getAll = async(req, res) => {
    const users = await getAllTasks();
    return sendDataResponse(res, 200, users)
}

