const path = require('path');
const express = require("express");

const router = express.Router();

// router.use('/add-product', (req, res, next) => { // Will handle thid from file
//1     res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>")
// });

router.get('/add-product', (req, res, next) => {
    console.log("in get add-product")
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    console.log("in post add-product")
    console.log("req.body", req.body.title);
    res.redirect('/admin/pp-route')
});

router.use('/pp-route', (req, res, next) => {
    res.send("<h1>In PP Route</h1>");
})

module.exports = router;