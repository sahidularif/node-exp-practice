const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const adminRouter = require('./lib/adminRouter')
app.use(express.text()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/admin', adminRouter);

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
