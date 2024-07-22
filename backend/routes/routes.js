const express = require('express')
const router = express.Router();
const { getGstController } = require("../controllers/getGstController");
router.get('/',(req,res)=>{
    res.send("Hello")
})
router.get('/:gstn',getGstController);

module.exports = router;