const express = require("express");
const router = express.Router();
const { registerController , loginController , logoutController } = require("../controllers/auth.controllers.js")
const  testController  = require("../controllers/testController")


router.post('/register',registerController)
router.post('/login',loginController)
router.post('/logout',logoutController)
router.get('/test',testController)

module.exports=router