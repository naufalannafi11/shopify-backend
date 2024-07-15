const express = require("express");
const router = express.Router();

const {
  getAddresses,
  getAddressesByUserId,
  createAddresses,
  updateAddresses,
  deleteAddresses,
} = require("../controller/addressController");

router.get("/", getAddresses);
router.get("/:id", getAddressesByUserId);
router.post("/", createAddresses);
router.put("/:id", updateAddresses);
router.delete("/:id", deleteAddresses);

module.exports = router;
