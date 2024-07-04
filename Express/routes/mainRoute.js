const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    console.log("In the Second MiddleWare");
    res.send("<h1>Hello from Backend</h1>");
});

module.exports = router;