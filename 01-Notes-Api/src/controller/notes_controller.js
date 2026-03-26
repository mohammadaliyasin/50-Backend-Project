const Note = require("../models/note_model");

exports.createNote = async (req, res) => {
  try {
    const notes = await Note.create(req.body);
    return res.status(201).json(notes);
  } catch (error) {
    console.error("ERROR IN CREATE NOTE:", error);
    return res.status(500).json(error.message);
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).json(notes);
  } catch (error) {
    console.error("ERROR IN FETCHING NOTES:", error);
    return res.status(500).json(error.message);
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const notes = await Note.findById(req.params.id);
    if (!NavigationDestination) {
      return res.status(404).json("Note not found");
    }
    return res.status(200).json(notes);
  } catch (error) {
    console.error("ERROR IN FETCHING NOTE BY ID:", error);
    return res.status(500).json(error.message);
  }
};

exports.updateNote = async (req, res) => {
  try {
    const notes = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!notes) {
      return res.status(404).json("Note not found");
    }
    return res.status(200).json(notes);
  } catch (error) {
    console.error("ERROR IN UPDATING NOTE:", error);
    return res.status(500).json(error.message);
  }
};

exports.deleteNote = async (req, res) => {
    try {
        const notes = await Note.findByIdAndDelete(req.params.id);
        if (!notes) {
            return res.status(404).json("Note not found");
        }
        return res.status(200).json("Note deleted successfully");
    } catch (error) {
        console.error("ERROR IN DELETING NOTE:", error);
        return res.status(500).json(error.message);
    }   
};

