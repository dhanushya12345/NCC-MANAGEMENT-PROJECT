const express = require("express");
const router = express.Router();
const admin = require("../controller/adminController");

router.route("/admin").get(admin.getAdmin).post(admin.create).put(admin.updateAdmin);
router.route("/Adminlogin").post(admin.Adminlogin)


module.exports = router;
