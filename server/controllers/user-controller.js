const { registration } = require("../services/user-service");
require("dotenv").config();
const ms = require("ms");

class UserController {

    async registration(req, res, next) {

        try {
            if (req.method === "POST") {
                const { email, password } = req.body;

                const data = await registration(email, password);

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

        res.json(["Login"]);
    }

    async logout(req, res, next) {

    }

    async activate(req, res, next) {

    }

    async refresh(req, res, next) {

    }

}

module.exports = new UserController();