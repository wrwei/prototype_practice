const jwt = require('jsonwebtoken')

//generate token

// let token = jwt.sign({
//     username: 'will'
// }, 'sawg', {
//     expiresIn: 60
// })


// console.log(token)

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndpbGwiLCJpYXQiOjE3NDQ0NTg1NTksImV4cCI6MTc0NDQ1ODYxOX0.im6ObDa2m9F6wgMxazunf442nOxX3ub2COYsAjQ6AVc'

jwt.verify(token, 'sawg', (err, data) =>{
    if(err) {
        console.log('verification failed')
        return
    }
    console.log(data)
})

