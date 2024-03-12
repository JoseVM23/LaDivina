const express = require('express');
const router = express.Router();
const evento = require('../controllers/evento.js');

router.get('/:id', evento.getEvent);
router.post('/purchase', evento.purchaseTickets);

module.exports = router;