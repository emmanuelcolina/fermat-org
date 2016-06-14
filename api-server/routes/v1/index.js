/*global require*/
var express = require('express');
var router = express.Router();
// split up route handling
var repo = require('./repo');
var net = require('./net');
var auth = require('./auth');
var user = require('./user');
var svgpng = require('./svg');
// list route namespaces
router.use('/repo', repo);
router.use('/net', net);
router.use('/auth', auth);
router.use('/user', user);
router.use('/svg', svgpng);
// etc.
module.exports = router;