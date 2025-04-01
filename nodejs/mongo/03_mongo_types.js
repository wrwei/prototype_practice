const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.once('open', ()=>{
    console.log('connection successful')
    let bookSchema = new mongoose.Schema({
        name: String, 
        author: String, 
        price: Number,
        is_hot: Boolean,
        tags: Array,
        pub_time: Date
    })

    let bookModel = mongoose.model('books', bookSchema)

    bookModel.create({
        name: '西游记',
        author: 'wuchengen',
        price: 19.9, 
        is_hot: true,
        tags: ['fantasy', 'society'],
        pub_time: new Date()
    }).then(function (models) {
        console.log(models)
        mongoose.disconnect()
    })

    
    // mongoose.disconnect()
})

mongoose.connection.on('error', ()=>{
    console.log('connection error')
})

mongoose.connection.on('close', ()=>{
    console.log('connection closed')
})
