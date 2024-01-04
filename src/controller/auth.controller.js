import { UserModel } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { msg } from "../helper/messages.js";
import { responseStatus } from "../helper/response.js";

class AuthController {
    signup = () => {
        return async (req, res) => {
            try {
                const { email, password, name } = req.body;
                const userDate = { email, password, name };
                if (!(email || password || name)) {
                    return responseStatus(res, 204, msg.common.somethingWentWrong, {});
                }
                const emailExist = await UserModel.findOne({ email: email });
                if (emailExist) {
                    res.status(300).json({
                        success: false,
                        message: `${email} is Already exist`,
                    });
                } else {
                    let userData = UserModel({
                        name: userDate.name,
                        email: userDate.email,
                        password: await bcrypt.hash(req.body.password, 10),
                    });

                    userData.save();
                    userData.toObject();
                    delete userData.password;
                    res.status(200).json({
                        success: true,
                        token: jwt.sign(userData.toObject(), process.env.JWT_SECRET, {
                            expiresIn: "20d",
                        }),
                    });
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: "Something Went Wrong.",
                    error: error.message,
                });
            }
        };
    };
    login = () => {
        return async (req, res) => {
            try {
                const { email, password } = req.body;
                if (!(email && password)) {
                    res.status(300).json({
                        success: false,
                        message: "Enter your email address and password",
                    });
                }
                let userResponse = await UserModel.findOne({ email });
                if (!userResponse) {
                    return res.status(300).json({
                        success: false,
                        message: "Account is not found!!",
                    });
                }
                const validPassword = await bcrypt.compare(
                    req.body.password,
                    userResponse.password
                );

                if (validPassword) {
                    let user = userResponse.toJSON();
                    delete user.password;
                    delete user.youtubeToken;
                    res.status(200).json({
                        success: true,
                        message: "Login successful",
                        token: jwt.sign(user, process.env.JWT_SECRET),
                    });
                } else {
                    res.status(401).json({
                        success: false,
                        message: "Wrong password",
                    });
                }
            } catch (error) {
                res.status(404).json({
                    success: false,
                    message: "Something Went Wrong. Some Internal Server Error.",
                    error: error,
                });
            }
        };
    };
    decodeToken = () => {
        return async (req, res) => {
            try {
                const token = req.headers.authorization?.split(" ")[1];
                console.log(token)
                if (!token) {
                    return res.status(401).json({
                        success: false,
                        message: "Authorization token missing.",
                    });
                }

                jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
                    if (error) {
                        return res.status(401).json({
                            success: false,
                            message: "Invalid or expired token.",
                        });
                    }

                    try {
                        const userId = decoded._id;
                        const user = await UserModel.findById(userId);

                        if (user) {
                            res.status(200).json({
                                success: true,
                                data: user,
                            });
                        } else {
                            res.status(404).json({
                                success: false,
                                message: "User not found.",
                            });
                        }
                    } catch (error) {
                        res.status(500).json({
                            success: false,
                            message: "Error fetching user data",
                            error,
                        });
                    }
                });
            } catch (error) {
                console.log(error);
                res.status(400).json({
                    success: false,
                    message: "Something Went Wrong.",
                    error: error.message,
                });
            }
        };
    };
    updateUser = () => {
        return async (req, res) => {
            try {
                const userId = req.params.id;
                const updateUser = req.body;

                if (!userId) {
                    return res.status(400).json({
                        success: false,
                        message: "Please provide user id.",
                    });
                }

                if (!updateUser) {
                    return res.status(400).json({
                        success: false,
                        message: "Please provide data to update.",
                    });
                }

                const user = await UserModel.findByIdAndUpdate(userId, updateUser, {
                    new: true,
                    runValidators: true,
                });

                if (user) {
                    res.status(200).json({
                        success: true,
                        message: "User updated successfully.",
                        data: user,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: "User not found.",
                    });
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: "Something Went Wrong.",
                    error: error.message,
                });
            }
        };
    };
    deleteUser = () => {
        return async (req, res) => {
            try {
                const userId = req.params.id;

                if (!userId) {
                    return res.status(400).json({
                        success: false,
                        message: "Please provide user id.",
                    });
                }

                const user = await UserModel.findByIdAndDelete(userId);

                if (user) {
                    res.status(200).json({
                        success: true,
                        message: "User deleted successfully.",
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: "User not found.",
                    });
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: "Something Went Wrong.",
                    error: error.message,
                });
            }
        };
    };
    getAllUsers = () => {
        return async (req, res) => {
            try {
                const users = await UserModel.find({});

                if (users.length > 0) {
                    res.status(200).json({
                        success: true,
                        message: "All users data retrieved successfully.",
                        data: users,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: "No users found.",
                    });
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: "Something Went Wrong.",
                    error: error.message,
                });
            }
        };
    };
    getUserById = () => {
        return async (req, res) => {
            try {
                const userId = req.params.id;

                if (!userId) {
                    return res.status(400).json({
                        success: false,
                        message: "Please provide user id.",
                    });
                }

                const user = await UserModel.findById(userId);

                if (user) {
                    res.status(200).json({
                        success: true,
                        message: "User data retrieved successfully.",
                        data: user,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: "User not found.",
                    });
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: "Something Went Wrong.",
                    error: error.message,
                });
            }
        };
    };
}

export { AuthController };
