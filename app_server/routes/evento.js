const express = require('express');
const router = express.Router();
const evento = require('../controllers/evento.js');

router.get('/', evento.eventos);
router.get('/evento/:eventid', evento.getSingleEvent);
router.get('/evento/edit/:eventid', evento.renderForm);
router.get('/create/event-form', evento.renderFormCreate);
router.post('/create', evento.createEvent);
router.post('/evento/edit/:eventid', evento.editEvent);
router.post('/delete/:eventid', evento.deleteEvent);

module.exports = router;