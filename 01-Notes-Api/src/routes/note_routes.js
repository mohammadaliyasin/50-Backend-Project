const express = require('express')
const router = express.Router();

//Import All Notes
const notesController = require('../controller/notes_controller');

router.post('/',notesController.createNote);
router.get('/',notesController.getAllNotes);
router.get('/:id', notesController.getNoteById);
router.put('/:id', notesController.updateNote);
router.delete('/:id', notesController.deleteNote);

module.exports = router;

