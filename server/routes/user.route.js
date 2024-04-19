const express = require("express");
const router = express.Router();
const { getAllUsersController, getAllInvestorController, getUserByIdController, updateUserDetailsController, deleteUserController } = require("../controllers/user.controller");

router.get('/users', getAllUsersController);
router.get('/users/:userId', getUserByIdController);
router.get('/investors', getAllInvestorController);
router.put('/update/:userId', updateUserDetailsController); 
router.delete('/delete/:userId', deleteUserController);

module.exports = router;
