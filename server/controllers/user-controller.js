const userService = require("../services/user-service");
require("dotenv").config();
const ms = require("ms");

class UserController {

    async registration(req, res, next) {

        try {
            if (req.method === "POST") {
                const { email, password } = req.body;

                const data = await userService.registration(email, password);

                res.cookie("refreshToken", data.refreshToken, { maxAge: ms(process.env.REFRESH_TOKEN_VALID_TIME), httpOnly: true });
                res.cookie("accessToken", data.accessToken, { maxAge: ms(process.env.ACCESS_TOKEN_VALID_TIME), httpOnly: true });

                res.status(201).json({
                    ...data
                });
            } else {
                res.status(404).json({
                    error: "not found."
                });
            }
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }

    async login(req, res, next) {

        try {
            if (req.method === "POST") {
                const { email, password } = req.body;

                const data = await userService.login(email, password);

                res.cookie("refreshToken", data.refreshToken, { maxAge: ms(process.env.REFRESH_TOKEN_VALID_TIME), httpOnly: true });
                res.cookie("accessToken", data.accessToken, { maxAge: ms(process.env.ACCESS_TOKEN_VALID_TIME), httpOnly: true });

                res.status(200).json({
                    ...data
                });
            } else {
                res.status(404).json({
                    error: "not found."
                });
            }
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }

    async logout(req, res, next) {
        try {
            if (req.method === "POST") {
                const { refreshToken } = req.cookies;

                await userService.logout(refreshToken);

                res.clearCookie("refreshToken");
                res.clearCookie("accessToken");

                res.status(200).json({
                });
            } else {
                res.status(404).json({
                    error: "not found."
                });
            }
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }

    async activate(req, res, next) {
        try {
            if (req.method === "GET") {
                const { link } = req.params;

                const data = await userService.activate(link);

                res.status(200).json({
                    data
                });
            } else {
                res.status(404).json({
                    error: "not found."
                });
            }
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }

    async refresh(req, res, next) {
        try {
            if (req.method === "GET") {
                const { refreshToken } = req.cookies;

                const data = await userService.refresh(refreshToken);

                res.cookie("refreshToken", data.refreshToken, { maxAge: ms(process.env.REFRESH_TOKEN_VALID_TIME), httpOnly: true });
                res.cookie("accessToken", data.accessToken, { maxAge: ms(process.env.ACCESS_TOKEN_VALID_TIME), httpOnly: true });

                res.status(200).json({
                    ...data
                });

            } else {
                res.status(404).json({
                    error: "not found."
                });
            }
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }

}

module.exports = new UserController();