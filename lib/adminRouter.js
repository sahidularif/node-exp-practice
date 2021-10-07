const express = require('express');
const adminRouter = express.Router()


const log = (req, res, next)=>{
    console.log('Catching all route under admin router');
    res.send('Catching all route under admin router')
}

adminRouter.get('/', (req, res)=>{
    res.send('Admin dashboard')
})

adminRouter.param('user', (req, res, next, id)=>{
    req.user = id  === '1' ? 'Admin' : 'User';
    console.log('This is admin/user page!');
    next();
})
adminRouter.get('/:user', (req, res, next)=>{
    console.log('This also matches');
    next()
})
adminRouter.get('/:user', (req, res)=>{
    res.send(`Hello ${req.user}`)
})
adminRouter.get('/login', (req, res)=>{
    res.send('Admin login page')
})
module.exports = adminRouter;