import jwt from 'jsonwebtoken'
import env from 'node:process'

const secret = process.env.secret

export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token == null) return res.status(401).json({message: 'Token not provided'})

    jwt.verify(token, secret, (err, user) => {
        if(err) return res.status(403).json({message: 'Token is not valid' });
        req.user = user;
        next()
    })
}