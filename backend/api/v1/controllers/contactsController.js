const contactsService = require('../services/contactsService');

const getAllContacts = async (req, res) => {

    const allContacts = await contactsService.getAllContacts();

    res.status(200).json(allContacts);
}

module.exports = {
    getAllContacts,
}