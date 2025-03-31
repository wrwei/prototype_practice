const fs = require('fs')

const express = require('express')
const path = require('path')
const app = express()


function recordMiddleware(req, res, next) {
    let {url, ip} = req
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`)
    next()
}

app.use(recordMiddleware)

app.get('/home', (req, res) => {
    res.send('frontend index')
}) 

app.get('/admin', (req, res) => {
    res.send('backend front page')
}) 

app.all('*', (req, res) =>{
    res.send('<h1>404 not found</h1>')
})

app.listen(3000, () => {
    console.log('server started, listening to port 3000')
})