const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserByQuery,
  getUserById,
  getOneUserByQuery,
  getUserCount,
  userEstimateCount,
  createUser,
  createMultipleUsers,
  deleteUserbyId,
  deleteFirstByQuery,
  deleteOneByQuery,
  deleteManyByQuery,
  updateMany,
  updateOne,
  updateFirst,
  updateById,
} = require("../controllers/userController");

// Find Routes
router.get("/", getAllUsers);
router.get("/getUserByQuery", getUserByQuery);
router.get("/getUserById/:id", getUserById);
router.get("/getOneUserByQuery", getOneUserByQuery);
router.get("/getUserCount", getUserCount);
router.get("/userEstimateCount", userEstimateCount);

// Create Routes
router.post("/", createUser);
router.post("/createmany", createMultipleUsers);

// Delete Routes
router.delete("/deleteUser/:id", deleteUserbyId);
router.delete("/deleteFirstByQuery", deleteFirstByQuery);
router.delete("/deleteOneByQuery", deleteOneByQuery);
router.delete("/deleteManyByQuery", deleteManyByQuery);

// Update Routes
router.put("/updateMany", updateMany);
router.put("/updateOne", updateOne);
router.put("/updateFirst", updateFirst);
router.put("/updateById/:id", updateById);

module.exports = router;
