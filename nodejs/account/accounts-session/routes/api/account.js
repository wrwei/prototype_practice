var express = require('express');
var router = express.Router();


const moment = require('moment')

const AccountModel = require('../../models/AccountModel');

router.get('/account', function (req, res, next) {
    AccountModel.find().sort({ time: -1 }).exec().then((result) => {
        res.json({
            code: '0000',
            msg: '读取成功',
            data: result
        })
    }).catch((err) => {
        res.json({
            code: '1001',
            msg: '读取失败',
            data: null
        })
        return;
    })

});


router.post('/account', (req, res) => {

    AccountModel.create({
        ...req.body,
        time: moment(req.body.time).toDate()
    }).then((result) => {
        res.json({
            code: '0000',
            msg: '创建成功',
            data: result
        })
    }).catch((error) => {
        res.json({
            code: '1002',
            msg: '创建失败',
            data: null
        })
        return;
    }).finally(() => {

    })

})

//remove record

router.delete('/account/:id', (req, res) => {
    //get id from params
    let id = req.params.id

    AccountModel.deleteOne({ _id: id }).catch((err) => {
        res.json({
            code: '1003',
            msg: '删除失败',
            data: null
        })
        return;
    }).then((result) => {
        res.json({
            code: '0000',
            msg: '删除成功',
            data: result
        })
    })

})

router.get('/account/:id', (req, res) => {
    //get id from params
    let id = req.params.id

    AccountModel.findOne({ _id: id }).catch((err) => {
        res.json({
            code: '1004',
            msg: '查询失败',
            data: null
        })
        return;
    }).then((result) => {
        res.json({
            code: '0000',
            msg: '查询成功',
            data: result
        })
    })

})

router.patch('/account/:id', (req, res) => {
    //get id from params
    let id = req.params.id
 
    AccountModel.updateOne({ _id: id }, req.body).catch((err) => {
        res.json({
            code: '1005',
            msg: '更新失败',
            data: null
        })
        return; 
    }).then((result) => {
        AccountModel.findById({_id: id }).then((ret)=>{
            res.json({
                code: '0000',
                msg: '更新成功',
                data: ret
            })
        })
        
    })

}) 

module.exports = router;
