var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('demo/demo', { title: 'Lubuska sieć Innowacji - demo' });
});

router.get('/aktualnosci', function(req, res, next) {
    res.render('demo/demo_news', { title: 'Lubuska sieć Innowacji - demo' });
});

router.get('/wlasne', function(req, res, next) {
    res.render('demo/demo_wlasne', { title: 'Lubuska sieć Innowacji - demo' });
});

router.get('/wlasne/edytuj', function(req, res, next) {
    res.render('demo/demo_edytuj', { title: 'Lubuska sieć Innowacji - demo' });
});

router.get('/dodaj', function(req, res, next) {
    res.render('demo/demo_dodaj', { title: 'Lubuska sieć Innowacji - demo' });
});

router.get('/LSI', function(req, res, next) {
    res.render('demo/demo_LSI', { title: 'Lubuska sieć Innowacji - demo' });
});

router.get('/LSI/proj1', function(req, res, next) {
    res.render('demo/demo_LSIproj1', { title: 'Lubuska sieć Innowacji - demo' });
});

router.get('/PUE', function(req, res, next) {
    res.render('demo/demo_PUE', { title: 'Lubuska sieć Innowacji - demo' });
});

router.get('/PUE/prog1', function(req, res, next) {
    res.render('demo/demo_PUEprog1', { title: 'Lubuska sieć Innowacji - demo' });
});

module.exports = router;
