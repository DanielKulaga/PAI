const auctionsService = require('../services/auctionsService');

const getAllContactss = async (req, res) => {

    const allContacts = await auctionsService.getAllContacts();

    res.status(200).json(allAuctions);
}

module.exports = {
    getAllContacts,
}