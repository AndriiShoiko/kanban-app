const mongoose = require("mongoose");
const ColumnModel = require("../models/column-model");
const ColumnDto = require("./dtos/columnDto");
const ApiError = require("../exceptions/api-error");
const makeRef = require("./utils/index");

class ColumnService {

    async allColumns(user, query) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        const { getParentsData } = query;

        let data = null;

        if (getParentsData === "1") {
            data = await ColumnModel.find({ user: user.id }).populate("board");
        } else {
            data = await ColumnModel.find({ user: user.id });
        }

        if (data) {
            const columnsDto = ColumnDto.getCollection(data);
            return {
                data: columnsDto
            }
        } else {
            return {
                data: {}
            }
        }

    }

    async getColumn(user, ref, query) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        const { getParentsData } = query;

        let data = null;

        if (getParentsData === "1") {
            data = await ColumnModel.findOne({ user: user.id, ref }).populate("board");
        } else {
            data = await ColumnModel.findOne({ user: user.id, ref });
        }

        if (data) {
            const columnDto = new ColumnDto(data);
            return {
                data: { ...columnDto }
            }
        } else {
            return {
                data: {}
            }
        }

    }

    async addColumn(user, body) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        const { name, board } = body;

        if (!name) {
            throw ApiError.BadRequest("Column name can't be empty");
        }

        if (!board) {
            throw ApiError.BadRequest("Board can't be empty");
        }

        const ref = makeRef();

        const data = new ColumnModel({ user: user.id, board, name, ref });
        await data.save();

        const boardDto = new ColumnDto(data);

        return {
            data: { ...boardDto }
        }

    }

    async deleteColumn(user, ref) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        if (!ref) {
            throw ApiError.BadRequest("Column ref can't be empty");
        }

        const data = await ColumnModel.deleteOne({ user: user.id, ref });

        return {
            data: {}
        }

    }

    async patchColumn(user, ref, body) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        if (!ref) {
            throw ApiError.BadRequest("Column ref can't be empty");
        }

        const { name } = body;

        if (!name) {
            throw ApiError.BadRequest("Column name can't be empty");
        }

        const data = await ColumnModel.findOne({ user: user.id, ref });
        data.name = name;
        await data.save();

        const columnDto = new ColumnDto(data);

        return {
            data: { ...columnDto }
        }

    }

}

module.exports = new ColumnService();

