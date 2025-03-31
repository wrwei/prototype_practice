const express = require('express')

const app = express()


app.get('/home', (req, res) => {
    res.send('frontend index')
}) 

app.get('/admin', (req, res) => {
    res.send('backend front page')
}) 

app.get('/setting', (req, res) => {
    res.send('setting landing page')
}) 

app.all('*', (req, res) =>{
    res.send('<h1>404 not found</h1>')
})

app.listen(3000, () => {
    console.log('server started, listening to port 3000')
})