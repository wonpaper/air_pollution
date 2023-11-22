const express           = require('express');
const router            = express.Router();

//localhost:8080/air
router.get('/', function(req, res) {
    res.status(200).json({data: "Air Router"})
});


//localhost:8080/air/test
router.get('/test', function(req, res) {
    res.status(200).json({data: "Air Router / test"})
});

module.exports = router;