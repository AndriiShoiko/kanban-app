const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const validator = require("validator");

const UserModel = require("../models/user-model");
const TokenModel = require("../models/token-model");

const makeUserRef = require("./utils");
const UserDto = require("./dtos/userDto");
const tokenService = require("./token-service");

class UserService {

    async registration(email, password) {

        if (!validator.isEmail(email)) {
            throw new Error("Email isn't valid");
        }

        if (!password) {
            throw new Error("Password don't be empty");
        }

        const session = await mongoose.startSession();

        try {

            const hashPass = await bcrypt.hash(password, 2);
            const activationLink = uuid.v4();
            const userRef = makeUserRef();

            session.startTransaction();

            const candidate = await UserModel.findOne({ email }).session(session);
            if (candidate) {
                throw new Error(`User with this email ${email} already exists`);
            }

            const user = new UserModel({ email, password: hashPass, activationLink, userRef });
            await user.save({ session });

            const userDto = new UserDto(user);
            const refreshToken = tokenService.generateRefreshToken({ ...userDto });
            const accessToken = tokenService.generateAccessToken({ ...userDto });

            let tokenData = await TokenModel.findOne({ user: userDto.id }).session(session);
            if (tokenData) {
                tokenData.refreshToken = refreshToken;
            } else {
                tokenData = new TokenModel({ user: userDto.id, refreshToken });
            }

            await tokenData.save({ session });

            await session.commitTransaction();

            return {
                refreshToken,
                accessToken,
                user: userDto
            }

        } catch (error) {

            await session.abortTransaction();
            console.error(error.message);

            throw new Error(error);

        } finally {
            await session.endSession();
        }

    }

    async login(email, password) {

        if (!validator.isEmail(email)) {
            throw new Error("Email isn't valid");
        }

        if (!password) {
            throw new Error("Password don't be empty");
        }

        const session = await mongoose.startSession();

        try {

            session.startTransaction();

            const findUser = await UserModel.findOne({ email }).session(session);
            if (!findUser) {
                throw new Error(`User with email ${email} not found`);
            }

            const isPassEquals = await bcrypt.compare(password, findUser.password);
            if (!isPassEquals) {
                throw new Error(`Password isn't correct.`);
            }

            const userDto = new UserDto(findUser);
            const refreshToken = tokenService.generateRefreshToken({ ...userDto });
            const accessToken = tokenService.generateAccessToken({ ...userDto });

            let tokenData = await TokenModel.findOne({ user: userDto.id }).session(session);
            if (tokenData) {
                tokenData.refreshToken = refreshToken;
            } else {
                tokenData = new TokenModel({ user: userDto.id, refreshToken });
            }

            await tokenData.save({ session });

            await session.commitTransaction();

            return {
                refreshToken,
                accessToken,
                user: userDto
            }

        } catch (error) {

            await session.abortTransaction();
            console.error(error.message);

            throw new Error(error);

        } finally {
            await session.endSession();
        }

    }

    async logout(refreshToken) {

        await tokenService.removeRefreshToken(refreshToken);

    }

    async refresh(token) {

        if (!token) {
            throw new Error("Token isn't valid");
        }

        const userData = tokenService.validateRefreshToken(token);
        if (!userData) {
            throw new Error("Token isn't valid");
        }

        const findUser = await UserModel.findOne({ email: userData.email });
        if (!findUser) {
            throw new Error("Token isn't valid");
        }

        const userDto = new UserDto(findUser);
        const refreshToken = tokenService.generateRefreshToken({ ...userDto });
        const accessToken = tokenService.generateAccessToken({ ...userDto });

        let tokenData = await TokenModel.findOne({ user: userDto.id });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
        } else {
            tokenData = new TokenModel({ user: userDto.id, refreshToken });
        }
        await tokenData.save();

        return {
            refreshToken,
            accessToken,
            user: userDto
        }

    }

    async activate(activationLink) {

        if (!activationLink) {
            throw new Error("Activation link isn't valid");
        }

        const findUser = await UserModel.findOne({ activationLink });
        if (!findUser) {
            throw new Error("Activation link isn't valid");
        }

        findUser.isActivated = true;
        await findUser.save();

        const userDto = new UserDto(findUser);

        return {
            ...userDto
        }

    }

}

module.exports = new UserService();