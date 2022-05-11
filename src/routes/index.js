const { Router } = require("express");
const patients = require("./patients");
const appointments = require("./appointment");
const doctors = require("./doctors");
const accounts = require("./accounts");

const router = Router();

router.use("/patient", patients);
router.use("/appointment", appointments);
router.use("/doctor", doctors);
router.use("/account", accounts);

module.exports = router;