require("dotenv").config();
const jwt = require("jsonwebtoken");
const tokenModel = require("../models/token-model");


class TokenService {

    generateRefreshToken(payload) {

        const refreshToken = jwt.sign(payload,
            process.env.REFRESH_TOKEN,
            { expiresIn: process.env.REFRESH_TOKEN_VALID_TIME });

        return refreshToken;

    }

    generateAccessToken(payload) {

        const accessToken = jwt.sign(payload,
            process.env.ACCESS_TOKEN,
            { expiresIn: process.env.ACCESS_TOKEN_VALID_TIME });

        return accessToken;

    }

    async removeRefreshToken(token) {

        if (token) {
            const tokenData = await tokenModel.deleteOne({ token });
            return tokenData;
        }

    }

    validateRefreshToken(token) {

        try {

            const userData = jwt.verify(token, process.env.REFRESH_TOKEN);
            return userData;

        } catch (error) {
            return null;
        }

    }

    validateAccessToken(token) {

        try {

            const userData = jwt.verify(token, process.env.ACCESS_TOKEN);
            return userData;

        } catch (error) {
            return null;
        }

    }

}

module.exports = new TokenService();