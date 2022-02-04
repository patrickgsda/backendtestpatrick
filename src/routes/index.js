const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Backend Test Patrick",
        version: "1.0.0"
    });
});

module.exports = router;