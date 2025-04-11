const express = require('express')

const session = require('express-session')
const MongoStore = require('connect-mongo')

const app = express()

app.use(session({
    name: 'sid',
    secret: 'willmethod',
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili'
    }),
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 5
    },
}))

app.get('/', (req, ret) => {
    ret.send('home')
})

app.get('/login', (req, ret) => {
    //username=admin&password=admin
    if(req.query.username === 'admin' && req.query.password === 'admin') {
        req.session.username = 'admin'
        req.session.uid = '258aefccc'

        ret.send('login successful') 
    } else {
        ret.send('login failed')
    }
})

app.get('/cart', (req, res) => {
    if(req.session.username) {
        res.send('Welcome to your cart')
    }else {
        res.send('You are not logged in')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(()=>{
        res.send('You are logged out')
    })
})

app.listen(3000)