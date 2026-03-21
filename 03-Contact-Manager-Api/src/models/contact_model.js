const Contact = require('../models/contact_model');

exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    return res.status(201).json(contact);
  } catch (error) {
    console.error("ERROR IN CREATE CONTACT:", error);
    return res.status(500).json(error.message);
  }
};


