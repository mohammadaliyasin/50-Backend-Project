const express = require('express')
const router = express.Router();

//Import All contacts controller functions
const contactController = require('../controller/contact_controller');

router.post('/',contactController.createContact);
router.get('/',contactController.getAllContacts);
router.get('/:id', contactController.getContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;