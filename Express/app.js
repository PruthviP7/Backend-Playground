const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const adminRoutes = require('./routes/admin');
const mainRoutes = require('./routes/mainRoute');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', (req, res, next) => {   // MiddleWare for example
//     console.log("In the First MiddleWare");
//     next();
// });

// app.use('/another-route', (req, res, next) => {
//     console.log("In Another ROute");
//     res.send("<h1>In Another Route</h1>");
// });

// app.use('/add-product', (req, res, next) => {  // will move this into routes
//     res.send("<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>")
// });

// app.use('/product', (req, res, next) => {     // will move this into routes
//     console.log("req.body" , req.body.title);
//     res.redirect('/pp-route')
// });

// app.use('/pp-route', (req, res, next) => {   // will move this into routes
//     res.send("<h1>In PP Route</h1>");
// })

app.use(mainRoutes);
app.use(adminRoutes);

const server = http.createServer(app);

server.listen(3000);