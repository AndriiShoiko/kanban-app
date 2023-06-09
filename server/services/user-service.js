const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const validator = require("validator");

const UserModel = require("../models/user-model");
const TokenModel = require("../models/token-model");

const makeRef = require("./utils");
const UserDto = require("./dtos/userDto");
const tokenService = require("./token-service");

const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(email, password) {
    if (!validator.isEmail(email)) {
      throw ApiError.BadRequest("Email isn't valid");
    }

    if (!password) {
      throw ApiError.BadRequest("Password don't be empty");
    }

    const session = await mongoose.startSession();

    try {
      const hashPass = await bcrypt.hash(password, 2);
      const activationLink = uuid.v4();
      const ref = makeRef();

      session.startTransaction();

      const candidate = await UserModel.findOne({ email }).session(session);
      if (candidate) {
        throw `User with this email ${email} already exists`;
      }

      const user = new UserModel({
        email,
        password: hashPass,
        activationLink,
        ref,
      });
      await user.save({ session });

      const userDto = new UserDto(user);
      const refreshToken = tokenService.generateRefreshToken({ ...userDto });
      const accessToken = tokenService.generateAccessToken({ ...userDto });

      let tokenData = await TokenModel.findOne({ user: userDto.id }).session(
        session
      );
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
        user: userDto,
      };
    } catch (error) {
      await session.abortTransaction();

      throw ApiError.BadRequest(error);
    } finally {
      await session.endSession();
    }
  }

  async login(email, password) {
    if (!validator.isEmail(email)) {
      throw ApiError.BadRequest("Email isn't valid");
    }

    if (!password) {
      throw ApiError.BadRequest("Password don't be empty");
    }

    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      const findUser = await UserModel.findOne({ email }).session(session);
      if (!findUser) {
        throw `User with email ${email} not found`;
      }

      const isPassEquals = await bcrypt.compare(password, findUser.password);
      if (!isPassEquals) {
        throw `Password isn't correct.`;
      }

      const userDto = new UserDto(findUser);
      const refreshToken = tokenService.generateRefreshToken({ ...userDto });
      const accessToken = tokenService.generateAccessToken({ ...userDto });

      let tokenData = await TokenModel.findOne({ user: userDto.id }).session(
        session
      );
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
        user: userDto,
      };
    } catch (error) {
      await session.abortTransaction();

      throw ApiError.BadRequest(error);
    } finally {
      await session.endSession();
    }
  }

  async logout(refreshToken) {
    await tokenService.removeRefreshToken(refreshToken);
  }

  async refresh(token) {
    if (!token) {
      throw ApiError.BadRequest("Token isn't valid");
    }

    const userData = tokenService.validateRefreshToken(token);
    if (!userData) {
      throw ApiError.BadRequest("Token isn't valid");
    }

    const findUser = await UserModel.findOne({ email: userData.email });
    if (!findUser) {
      throw ApiError.BadRequest("Token isn't valid");
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
      user: userDto,
    };
  }

  async checkToken(token) {
    if (!token) {
      throw ApiError.BadRequest("Token can't be empty");
    }

    const userData = tokenService.validateAccessToken(token);

    return {
      ...userData,
    };
  }

  async logout(refreshToken) {
    await tokenService.removeRefreshToken(refreshToken);
  }

  async refresh(token) {
    if (!token) {
      throw ApiError.BadRequest("Token isn't valid");
    }

    const userData = tokenService.validateRefreshToken(token);
    if (!userData) {
      throw ApiError.BadRequest("Token isn't valid");
    }

    const findUser = await UserModel.findOne({ email: userData.email });
    if (!findUser) {
      throw ApiError.BadRequest("Token isn't valid");
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
      user: userDto,
    };
  }
}

module.exports = new UserService();
