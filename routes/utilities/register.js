var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('utilities/register', { title: 'Lubuska sieć Innowacji' });
});

module.exports = router;