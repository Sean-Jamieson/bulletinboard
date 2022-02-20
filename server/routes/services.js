const express = require('express');

const {getService, getServices, createService, updateService, deleteService} = require('../controllers/services.js');

const router = express.Router();

router.get('/:id', getService);
router.get('/', getServices);
router.post('/create', createService);
router.patch('/update/:id', updateService);
router.delete('/delete/:id', deleteService);

module.exports = router;