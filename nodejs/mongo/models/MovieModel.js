const mongoose = require('mongoose');

  
  let MovieSchema = new mongoose.Schema({
    title: String,
    director: String
  });

  //6. 创建模型对象  对文档操作的封装对象    mongoose 会使用集合名称的复数, 创建集合
  let MovieModel = mongoose.model('movies', MovieSchema);



  module.exports = MovieModel