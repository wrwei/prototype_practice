const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.on('open', ()=>{
    console.log('connection successful')
})

mongoose.connection.on('error', ()=>{
    console.log('connection error')
})

mongoose.connection.on('close', ()=>{
    console.log('connection closed')
})

//close mongodb connection

setTimeout(()=>{
    mongoose.disconnect()
}, 2000)