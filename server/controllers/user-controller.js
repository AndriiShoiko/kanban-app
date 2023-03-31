const ApiError = require("../exceptions/api-error");
const userService = require("../services/user-service");
require("dotenv").config();
const ms = require("ms");

class UserController {

    async registration(req, res, next) {

        try {
            const { email, password } = req.body;

            const data = await userService.registration(email, password);

            res.cookie("refreshToken", data.refreshToken, { maxAge: ms(process.env.REFRESH_TOKEN_VALID_TIME), httpOnly: true });
            res.cookie("accessToken", data.accessToken, { maxAge: ms(process.env.ACCESS_TOKEN_VALID_TIME), httpOnly: true });

            res.status(201).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async login(req, res, next) {

        try {
            const { email, password } = req.body;

            const data = await userService.login(email, password);

            res.cookie("refreshToken", data.refreshToken, { maxAge: ms(process.env.REFRESH_TOKEN_VALID_TIME), httpOnly: true });
            res.cookie("accessToken", data.accessToken, { maxAge: ms(process.env.ACCESS_TOKEN_VALID_TIME), httpOnly: true });

            res.status(200).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;

            await userService.logout(refreshToken);

            res.clearCookie("refreshToken");
            res.clearCookie("accessToken");

            res.status(200).json({
            });
        } catch (error) {
            next(error);
        }
    }

    async activate(req, res, next) {
        try {
            const { link } = req.params;

            const data = await userService.activate(link);

            res.status(200).json({
                data
            });
        } catch (error) {
            next(error);
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;

            const data = await userService.refresh(refreshToken);

            res.cookie("refreshToken", data.refreshToken, { maxAge: ms(process.env.REFRESH_TOKEN_VALID_TIME), httpOnly: true });
            res.cookie("accessToken", data.accessToken, { maxAge: ms(process.env.ACCESS_TOKEN_VALID_TIME), httpOnly: true });

            res.status(200).json({
                ...data
            });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new UserController();