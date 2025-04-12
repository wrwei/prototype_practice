var express = require('express');
const UserModel = require('../../models/UserModel')

const md5 = require('md5')
const jwt = require('jsonwebtoken')

var router = express.Router();
const {secret} = require('../../config/config')


router.post('/login', (req, res) => {
    let { username, password } = req.body
    UserModel.findOne({ username: username, password: md5(password) }).catch((err) => {
        res.json({
            code: '2001',
            msg: 'Database read error',
            data: null
        })
        return
    }).then((result) => {
        if (result === null) {
            res.json({
                code: '2001',
                msg: 'Username of Password incorrect',
                data: null
            })
            return
        }

        let token = jwt.sign({
            username: result.username,
            _id : result._id
        }, secret, {
            expiresIn: 60*60*24*7
        })

        res.json({
            code: '0000',
            msg: 'login successful',
            data: token
        })
    })

})

router.post('/logout', (req, res) => {

    req.session.destroy(() => {
        res.render('success', {msg: 'logout successful', url:'/login'})
    })
})

module.exports = router;
