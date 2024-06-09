import { getAllUsers, getByEmail } from "../domain/user.js";
import { sendDataResponse, sendErrorResponse } from "../utils/responses.js"
import bcrypt from 'bcrypt'
import jwt from'jsonwebtoken'
import env from 'node:process'

const secret = process.env.SECRET


export const getAll = async(req, res) => {
    const users = await getAllUsers();
    return sendDataResponse(res, 200, users)
}

export const newUser = async(req, res) => {
    
}

export const login = async(req, res) => {
    console.log('request body', req.body)
    const email = String(req.body.email)
    const password = String(req.body.password)
    console.log(password)
    const user = await getByEmail(email)

    console.log('user', user)

    console.log('secret', secret)

    if(user){
        bcrypt.compare(password, user.password, function(err, result){
            console.log('compare result', result)
            console.log('request password', password)
            console.log('user password from db', user.password)
            if(result){
                
                const token = jwt.sign({email}, secret, {expiresIn: "14d"})
                res.send({token})
            
            } else {
                console.log('Caught no password')
                res.status(401).send('Invalid username or password')
            }
        })
    } else res.status(401).send('Invalid username or password')

}