var express = require('express');
var router = express.Router();

const contactsController = require("../controllers/contactsController")

router.get('/', contactsController.getAllContacts);


module.exports = router;