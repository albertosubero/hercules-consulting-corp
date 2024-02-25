const express = require("express")
const router = express.Router()
const sendEmailController = require("./sendemail.controller")


router.post("/send", sendEmailController.sendEmail)


module.exports = router