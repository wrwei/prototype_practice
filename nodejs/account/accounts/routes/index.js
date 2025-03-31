var express = require('express');
var router = express.Router();

const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')

const db = lowdb(adapter)

//import shortid
const shortid = require('shortid')


//accounting lists
router.get('/account', function(req, res, next) {
  let accounts = db.get('accounts').value()
  res.render('list', {accounts: accounts})
});


//add record
router.get('/account/create', function(req, res, next) {
  res.render('create')
});

router.post('/account', (req, res) => {
  //get req data
  let id = shortid.generate()

  // below includes generated id
  db.get('accounts').push({id:id, ...req.body}).write()
  res.render('success', {msg:'Record created', url:'/account'})
})

//remove record

router.get('/account/:id', (req, res) => {
  //get id from params
  let id = req.params.id

  db.get('accounts').remove({id:id}).write()

  res.render('success', {msg:'Record deleted', url:'/account'})
})

module.exports = router;
