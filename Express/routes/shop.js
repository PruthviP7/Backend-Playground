const path = require('path');
const express = require("express");
const router = express.Router();
const rootDir = require('../utils/path')

router.get("/", (req, res, next) => {
    console.log("In the MiddleWare");
    // res.send("<h1>Hello from Express</h1>");
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));  // Join is used to give the reference to current path
});

module.exports = router;