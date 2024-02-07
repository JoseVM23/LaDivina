const express = require('express');
const router = express.Router();
const mainCtrl = require('../controllers/main.js');

/* GET users listing. */
router.get('/',mainCtrl.usuarios);


module.exports = router;
