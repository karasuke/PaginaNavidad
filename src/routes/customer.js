const express = require('express');
const router = express.Router();


const customerController = require('../controllers/customerController');

router.get('/', customerController.index);

router.get('/catalog/', customerController.renderCatalog);

router.get('/contact/', customerController.renderContact);   

router.post('/add', customerController.save);


module.exports = router;


