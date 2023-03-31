const tokenService = require("../services/token-service");
const ApiError = require("../exceptions/api-error");

module.exports = function (req, res, next) {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return next(ApiError.UnauthorizedError());
        }

        const acessToken = authHeader.split(' ')[1];
        if (!acessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = tokenService.validateAccessToken(acessToken);
        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }

        req.user = userData;

        next();

    } catch (error) {
        next(error);
    }
}