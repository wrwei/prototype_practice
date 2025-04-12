
/**
 * @param {*} success connection success
 * @param {*} error connection error
 */

const {DBHOST, DBPORT, DBNAME} = require('./config')

module.exports = function (success, error) {
    if(typeof error !== 'function') {
        error = ()=>{
            console.log('connection failed')
        }
    }
    const mongoose = require('mongoose')

    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    mongoose.connection.once('open', () => {
        success()
    })

    mongoose.connection.on('error', () => {
        error()
    })

    mongoose.connection.on('close', () => {
        console.log('connection closed')
    })

}