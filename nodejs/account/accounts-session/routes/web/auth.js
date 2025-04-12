var express = require('express');
const UserModel = require('../../models/UserModel')

const md5 = require('md5')

var router = express.Router();

router.get('/reg', (req, res) => {
    res.render('auth/reg')
})

router.post('/reg', (req, res) => {
    UserModel.create({ ...req.body, password: md5(req.body.password) }).catch((err) => {
        res.status(500).send('registration failed')
        return
    }).then((result) => {
        res.render('success', { msg: 'Registration Complete', url: '/login' })
    })

})

router.get('/login', (req, res) => {
    //render html
    res.render('auth/login')
})

router.post('/login', (req, res) => {
    let { username, password } = req.body
    UserModel.findOne({ username: username, password: md5(password) }).catch((err) => {
        res.status(500).send('login failed')
        return
    }).then((result) => {
        if (result === null) {
            res.status(500).send('login failed')
            return
        }
        console.log(result)
        req.session.username = result.username
        req.session._id = result._id
        res.render('success', { msg: 'Login sucessful', url: '/account' })
    })

})

router.post('/logout', (req, res) => {

    req.session.destroy(() => {
        res.render('success', {msg: 'logout successful', url:'/login'})
    })
})

module.exports = router;
