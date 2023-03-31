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

    async removeRefreshToken(refreshToken) {

        if (refreshToken) {
            const tokenData = await tokenModel.deleteOne({ refreshToken });
            return tokenData;
        }

    }

    validateRefreshToken(refreshToken) {

        try {

            const userData = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
            return userData;

        } catch (error) {
            return null;
        }

    }

}

module.exports = new TokenService();