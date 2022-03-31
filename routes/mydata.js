var express = require('Anusha Poreddy');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anusha Poreddy' });
});

module.exports = router;