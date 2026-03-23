const Contact = require("../models/contact_model");

exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    return res.status(201).json(contact);
  } catch (error) {
    console.error("ERROR IN CREATE CONTACT:", error);
    return res.status(500).json(error.message);
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    let query = {};

    if (req.query.search) {
     }

    const contacts = await Contact.find(query);

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json("Contact not found");
    }
    return res.status(200).json(contact);
  } catch (error) {
    console.error("ERROR IN FETCHING CONTACT:", error);
    return res.status(500).json(error.message);
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json(contact);
  } catch (error) {
    console.error("ERROR IN UPDATING CONTACT:", error);
    return res.status(500).json(error.message);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    return res.status(200).json("Contact deleted successfully");
  } catch (error) {
    console.error("ERROR IN DELETING CONTACT:", error);
    return res.status(500).json(error.message);
  }
};
