const express = require("express");
const router = express.Router();
const user = require("../controller/userController");
const admin = require("../controller/adminController");

router.route("/user").get().post(user.create).put(user.updateUser).delete();
router.route("/login").post(user.login);
router.route("/Adminlogin").post(admin.Adminlogin)
router.route("/getUser/:role").get(user.getUser);
router.route('/user/:id').get(user.getOneUser)
router.route('/updateUser').put(user.updateUser)

module.exports = router;
