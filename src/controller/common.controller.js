import { PasswordModel } from "../model/password.model.js";
import { msg } from "../helper/messages.js";
import { responseStatus } from "../helper/response.js";
class Commontroller {
    generatePasswords = () => {
        return async (req, res) => {
            try {
                const randomPassword = Math.random().toString(36).substring(2, 10).toUpperCase();
                await PasswordModel.create({ password: randomPassword });
                return responseStatus(res, 200, msg.common.success, {});
            } catch (error) {
                res.status(500).json({
                    success: false,
                    error: error,
                    message: "Internal Server Error",
                });
            }
        };
    }

    generatePasswordfromUser = () => {
        return async (req, res) => {
            try {
                const { password } = req.body;

                if (!password || typeof password !== 'string' || password.length < 6 || password.length > 20) {
                    return res.status(400).json({
                        success: false,
                        message: 'Invalid password. It should be a string between 6 and 20 characters.'
                    });
                }

                await PasswordModel.create({ password });

                res.status(200).json({
                    success: true,
                    message: 'Secret Code generated successfully.',
                });

            } catch (error) {
                res.status(500).json({
                    success: false,
                    error: error,
                    message: "Internal Server Error",
                });
            }
        };
    }


    deleteGeneratedPassword = () => {
        return async (req, res) => {
            try {
                const { id } = req.query

                const deletePassword = await PasswordModel.findByIdAndDelete(id)

                if (deletePassword !== null) {
                    res.status(200).json({
                        success: true,
                        message: 'Secret Code Deleted successfully.',
                    })
                } else {
                    res.status(204).json({
                        success: false,
                        message: 'Secret Code not Found.',
                    })
                }

            } catch (error) {
                res.status(500).json({
                    success: false,
                    error: error,
                    message: "Internal Server Error",
                });
            }
        }
    }

    getGeneratePasswords = () => {
        return async (req, res) => {
            try {
                const generatedPasswords = await PasswordModel.find();

                if (generatedPasswords.length !== 0) {
                    res.status(200).json({
                        success: true,
                        message: 'Secret Code List Fetched successfully.',
                        list: generatedPasswords,
                    })
                } else {
                    res.status(200).json({
                        success: true,
                        message: 'Secret Code List is Empty.',
                        list: generatedPasswords,
                    })
                }

            } catch (error) {
                res.status(500).json({
                    success: false,
                    error: error,
                    message: "Internal Server Error",
                });
            }
        }
    }

}

export { Commontroller };
