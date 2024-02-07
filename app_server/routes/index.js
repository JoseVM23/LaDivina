const express = require('express');
const router = express.Router();
const mainCtrl = require('../controllers/main.js');

/* GET home page. */
router.get('/', mainCtrl.index);


module.exports = router;
