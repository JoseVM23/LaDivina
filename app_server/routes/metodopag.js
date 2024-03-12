const express = require('express');
const router = express.Router();
const metodopag = require('../controllers/metodopag.js');

router.get('/', metodopag.getEvent);
router.post('/buy-tickets', metodopag.postBuyTickets);

module.exports = router;