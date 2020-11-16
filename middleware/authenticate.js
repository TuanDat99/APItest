const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.spit(' ')[1]
        const decode = jwt.verify(token,'AzQ,PI)0(')

        req.user = decode
        next()
    }
    catch(error) {
        res.json({
            message: 'Authenticate Failed!'
        })
    }
}
module.exports = authenticate
