const express = require('express')
const router = express.Router();
const { getGstController } = require("../controllers/getGstController");

router.get('/:gstn',getGstController);

module.exports = router;