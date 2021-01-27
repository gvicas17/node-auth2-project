const jwt = require('jsonwebtoken')
const{jwtSecret} = require('../../config/secrets')


module.exports = (req, res, next) => {
    const token = req.headers.autherorization
    if(token){
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if(err){
                res.status(401).json('want valid token')
            }else{
                req.decodedJwt = decoded
                next()
            }
        })
    }else{
        res.status(401).json('needs token')
    }
}