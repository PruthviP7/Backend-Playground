const express = require("express");

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>")
});

router.use('/product', (req, res, next) => {
    console.log("req.body", req.body.title);
    res.redirect('/pp-route')
});

router.use('/pp-route', (req, res, next) => {
    res.send("<h1>In PP Route</h1>");
})

module.exports = router;