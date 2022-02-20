const express = require('express');

const {getEvent, getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/events.js');

const router = express.Router();

router.get('/:id', getEvent);
router.get('/', getEvents);
router.post('/create', createEvent);
router.patch('/update/:id', updateEvent);
router.delete('/delete/:id', deleteEvent);

module.exports = router;