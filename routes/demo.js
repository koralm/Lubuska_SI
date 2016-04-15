var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('demo/demo', { title: 'Lubuska sieć Innowacji - demo' });
});

router.get('/dodaj', function(req, res, next) {
    res.render('demo/d_dodaj', { title: 'Lubuska sieć Innowacji - demo' });
});

module.exports = router;
