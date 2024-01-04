// all the getting data from the model will happen here
const { default: mongoose } = require("mongoose");
const User = require("../models/userModel");

// Find All users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error in Getting Users", error);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};

// Find with query
const getUserByQuery = async (req, res) => {
  try {
    const { name, email, mobile, gender } = req.query;
    const query = {};
    if (name) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    if (mobile) {
      query.mobile = mobile;
    }
    if (gender) {
      query.gender = gender;
    }
    const userData = await User.find(query);
    if (userData.length === 0) {
      return res.status(404).json({ message: "No Such User Found!" });
    }
    res
      .status(200)
      .json({ message: "Data Fetched Successfully!!", data: userData });
  } catch (error) {
    res.status(404).json({
      message: "Error in Finding User by query",
      error: error,
    });
  }
};

// Find user by Id
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).json({ message: "Invalid User Id" });
    }
    const userData = await User.findById(userId);
    if (userData.length === 0) {
      return res.status(404).json({ message: "User not Found" });
    }
    res
      .status(200)
      .json({ message: "User Fetched Successfully", data: userData });
  } catch (error) {
    res.status(500).json({ message: "Error in fetching by Id", error: error });
  }
};

// Find One with query
const getOneUserByQuery = async (req, res) => {
  try {
    const { name, email, mobile, gender } = req.query;
    const query = {};
    if (name) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    if (mobile) {
      query.mobile = mobile;
    }
    if (gender) {
      query.gender = gender;
    }
    const userData = await User.findOne(query);
    if (userData.length === 0) {
      return res.status(404).json({ message: "No Such User Found!" });
    }
    res
      .status(200)
      .json({ message: "Data Fetched Successfully!!", data: userData });
  } catch (error) {
    res.status(404).json({
      message: "Error in Finding User by query",
      error: error,
    });
  }
};

// Get the Count by query
const getUserCount = async (req, res) => {
  try {
    const { name, email, mobile, gender } = req.query;
    const query = {};
    if (name) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    if (mobile) {
      query.mobile = mobile;
    }
    if (gender) {
      query.gender = gender;
    }
    const userCount = await User.countDocuments(query);

    if (!userCount) {
      return res.status(404).json({ message: "No User Found!" });
    }
    res
      .status(200)
      .json({ message: "Count Fetched Successfully!!", data: userCount });
  } catch (error) {
    res.status(404).json({
      message: "Error in Finding User Count by query",
      error: error,
    });
  }
};

// Estimte count of documents in a Collection
const userEstimateCount = async (req, res) => {
  try {
    const userCount = await User.estimatedDocumentCount();
    if (!userCount) {
      res.status(404).json({ message: "No Document Found!" });
    }
    res
      .status(200)
      .json({ message: "Count Fetched Successfully!", count: userCount });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Create new user - save()
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res
      .status(200)
      .json({ success: "User Created Successfully!!", result: result });
  } catch (error) {
    console.error("Error in Creating", error);
    res.status(500).json({ error: "Intermal Server Error!!" });
  }
};

// Create multiple users - create()
const createMultipleUsers = async (req, res) => {
  try {
    // const newUsers = new User(req.body);
    const result = await User.create(req.body);
    res
      .status(200)
      .json({ message: "Users Created Successfully!", result: result });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error in Creating Multiple Users", error: error });
  }
};

// Delete user by Id Param
const deleteUserbyId = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).json({ error: "Invalid User ID!!" });
    }
    await User.findByIdAndDelete(userId);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.error("Error in Deleting User by ID", error);
    res.status(404).json({ error: "Error in Deleting User by ID" });
  }
};

// Delete the first user from query: it returns the deleted document, if no doc is deleted then it returns null
const deleteFirstByQuery = async (req, res) => {
  try {
    const { name, email, mobile, gender } = req.query;
    const query = {};
    if (name) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    if (mobile) {
      query.mobile = mobile;
    }
    if (gender) {
      query.gender = gender;
    }

    const result = await User.findOneAndDelete(query);
    res
      .status(200)
      .json({ message: "User Deleted Successfully!", data: result });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: "Error in Deleting First by Query", error: error });
  }
};

// Delete one with query: it returns an object with info about the operations and the number of objects deleted, if no doc is deleted it returns {n:0}
const deleteOneByQuery = async (req, res) => {
  try {
    const { name, email, mobile, gender } = req.query;
    const query = {};
    if (name) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    if (mobile) {
      query.mobile = mobile;
    }
    if (gender) {
      query.gender = gender;
    }

    const result = await User.deleteOne(query);
    res
      .status(200)
      .json({ message: "User Deleted Successfully!", data: result });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: "Error in Deleting One by Query", error: error });
  }
};

// Delete Many By Query
const deleteManyByQuery = async (req, res) => {
  try {
    const { name, email, mobile, gender } = req.query;
    const query = {};
    if (name) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    if (mobile) {
      query.mobile = mobile;
    }
    if (gender) {
      query.gender = gender;
    }

    const result = await User.deleteMany(query);
    res
      .status(200)
      .json({ message: "User Deleted Successfully!", data: result });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: "Error in Deleting Many by Query", error: error });
  }
};

// Update Many with Query
const updateMany = async (req, res) => {
  try {
    const { name, email, mobile, gender } = req.query;
    const query = {};
    if (name) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    if (mobile) {
      query.mobile = mobile;
    }
    if (gender) {
      query.gender = gender;
    }

    const result = await User.updateMany(query, req.body);
    res
      .status(200)
      .json({ message: "User Updated Successfully!", data: result });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: "Error in Updating Many by Query", error: error });
  }
};

// Update One with Query
const updateOne = async (req, res) => {
  try {
    const { name, email, mobile, gender } = req.query;
    const query = {};
    if (name) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    if (mobile) {
      query.mobile = mobile;
    }
    if (gender) {
      query.gender = gender;
    }

    const result = await User.updateOne(query, req.body);
    res
      .status(200)
      .json({ message: "User Updated Successfully!", data: result });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: "Error in Updating Many by Query", error: error });
  }
};

// Find and Update the First using Query
const updateFirst = async (req, res) => {
  try {
    const { name, email, mobile, gender } = req.query;
    const query = {};
    if (name) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    if (mobile) {
      query.mobile = mobile;
    }
    if (gender) {
      query.gender = gender;
    }

    const result = await User.findOneAndUpdate(query, req.body, { new: true });
    res
      .status(200)
      .json({ message: "User Updated Successfully!", data: result });
  } catch (error) {
    console.error(error);
    res
      .status(404)
      .json({ message: "Error in Updating Many by Query", error: error });
  }
};

// Find and Update Using id
const updateById = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(404).json({ message: "Invalid User ID" });
    }
    const result = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });

    res.status(200).json({ message: "Update Successfully!", data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
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
};
