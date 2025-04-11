var express = require('express');
const UserModel = require('../../models/UserModel')

const md5 = require('md5')

var router = express.Router();
router.get('/reg', (req, res) => {


    res.render('auth/reg')
})

router.post('/reg', (req, res) => {
    UserModel.create({...req.body, password : md5(req.body.password)}).catch((err)=>{
        res.status(500).send('registration failed')
        return
    }).then((result)=>{
        res.render('success', {msg: 'Registration Complete', url: '/login'})
    })

})

module.exports = router;
