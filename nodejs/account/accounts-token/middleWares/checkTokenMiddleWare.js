const jwt = require('jsonwebtoken')

const { secret } = require('../config/config')
let checkTokenMiddleWare = (req, res, next) => {
    let token = req.get('token')
    if (!token) {
        res.json({
            code: '2003',
            msg: 'token missing',
            data: null
        })
        return
    }

    jwt.verify(token, secret, (err, data) => {
        if (err) {
            return res.json({
                code: '2004',
                msg: 'token verification failed',
                data: null
            })
        }
        req.user = data;
        next()
    })
}

module.exports = checkTokenMiddleWare