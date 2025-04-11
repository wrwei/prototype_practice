const db = require('./db/db')
const mongoose = require('mongoose');
const BookModel = require('./models/BookModel')
const MovieModel = require('./models/MovieModel')

db(() => {
    MovieModel.create({title:"让子弹飞", director: "姜文"})
    .then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    }).finally(()=>{
        mongoose.disconnect()
    })
})
