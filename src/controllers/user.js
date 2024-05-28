import { getAllCharacters } from "../domain/user.js";
import { sendDataResponse, sendErrorResponse } from "../utils/responses.js"

export const getAll = async(req, res) => {
    const users = await getAllCharacters();
    return sendDataResponse(res, 200, users)
}