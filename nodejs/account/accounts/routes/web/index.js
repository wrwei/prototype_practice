var express = require('express');
var router = express.Router();


const moment = require('moment')

const AccountModel = require('../../models/AccountModel');

//accounting lists
router.get('/account', function(req, res, next) {
  AccountModel.find().sort({time: -1}).exec().then((result)=>{
    res.render('list', {accounts: result, moment: moment})
  }).catch((err)=>{
    res.status(500).send('读取失败')
    return;
  })

});


//add record
router.get('/account/create', function(req, res, next) {
  res.render('create')
});

router.post('/account', (req, res) => {
  
  AccountModel.create({
    ...req.body, 
    time: moment(req.body.time).toDate()
  }).then((result)=>{
    res.render('success', {msg:'Record created', url:'/account'})
  }).catch((error)=>{
    res.status(500).send('插入失败')
    return;
  }).finally(()=>{

  })

})

//remove record

router.get('/account/:id', (req, res) => {
  //get id from params
  let id = req.params.id

  AccountModel.deleteOne({_id: id}).catch((err)=>{
    res.status(500).send('删除失败')
    return;
  }).then((result)=>{
    console.log(result)
    res.render('success', {msg:'Record deleted', url:'/account'})
  })

})

module.exports = router;
