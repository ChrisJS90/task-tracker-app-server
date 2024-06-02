import { getAllUsers, getByEmail } from "../domain/user.js";
import { sendDataResponse, sendErrorResponse } from "../utils/responses.js"

export const getAll = async(req, res) => {
    const users = await getAllUsers();
    return sendDataResponse(res, 200, users)
}

export const getUserByEmail = async(req, res) => {
    console.log('request parameters', req.params)
    const email = String(req.params.email)
    const user = await getByEmail(email)
    console.log('email', email)
    console.log('user', user)
    return sendDataResponse(res, 200, user)
}