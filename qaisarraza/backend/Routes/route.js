const express = require('express');
const router = express.Router();
const postRequest = require("../Controllers/controller")

router.post('/contactus', postRequest);

module.exports = router;