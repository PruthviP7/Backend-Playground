const path = require('path');

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("In the MiddleWare");
    // res.send("<h1>Hello from Express</h1>");
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));  // Join is used to give the reference to current path
});

module.exports = router;