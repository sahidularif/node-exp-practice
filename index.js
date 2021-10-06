const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const adminRoute = express.Router();
const {handleReqRes} = require('./lib/handler')
app.use(express.text()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/about', handleReqRes);
// subdomain 
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.ip);
    // console.log(req.url);
    res.send('We are in admin dashboard!');
});
app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
    console.log(req.params.name);
    res.end('Welcome to user page') 
});
app.get('/', (req, res) => {
    console.log(req.path);
    res.end('Welcome to home page')
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.end('Welcome to home page')
});

app.listen(3000, () => {
    console.log('Welcome to server!');
})
