const TaskModel = require("../models/task-model");
const TaskDto = require("./dtos/taskDto");
const ApiError = require("../exceptions/api-error");
const makeRef = require("./utils/index");

class TaskService {

    async allTasks(user, query) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        const { getParentsData } = query;

        let data = null;

        if (getParentsData === "1") {
            data = await TaskModel.find({ user: user.id }).populate({ path: "column", populate: { path: "board" } });
        } else {
            data = await TaskModel.find({ user: user.id });
        }

        if (data) {
            const taskDto = TaskDto.getCollection(data);
            return {
                data: taskDto
            }
        } else {
            return {
                data: {}
            }
        }

    }

    async getTask(user, ref, query) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        const { getParentsData } = query;

        let data = null;

        if (getParentsData === "1") {
            data = await TaskModel.findOne({ user: user.id, ref }).populate({ path: "column", populate: { path: "board" } });
        } else {
            data = await TaskModel.findOne({ user: user.id, ref });
        }

        if (data) {
            const taskDto = new TaskDto(data);
            return {
                data: { ...taskDto }
            }
        } else {
            return {
                data: {}
            }
        }

    }

    async addTask(user, body) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        const { name, description, column } = body;

        if (!name) {
            throw ApiError.BadRequest("Task name can't be empty");
        }

        if (!description) {
            throw ApiError.BadRequest("Task description can't be empty");
        }

        if (!column) {
            throw ApiError.BadRequest("Task column (status) can't be empty");
        }

        const ref = makeRef();

        const data = new TaskModel({ user: user.id, ref, name, description, column });
        await data.save();

        const taskDto = new TaskDto(data);

        return {
            data: { ...taskDto }
        }

    }

    async deleteTask(user, ref) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        if (!ref) {
            throw ApiError.BadRequest("Task ref can't be empty");
        }

        const data = await TaskModel.deleteOne({ user: user.id, ref });

        return {
            data: {}
        }

    }

    async patchTask(user, ref, body) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        if (!ref) {
            throw ApiError.BadRequest("Task ref can't be empty");
        }

        const { name, description, column } = body;

        if (!name) {
            throw ApiError.BadRequest("Task name can't be empty");
        }

        if (!column) {
            throw ApiError.BadRequest("Task column (status) can't be empty");
        }

        const data = await TaskModel.findOne({ user: user.id, ref });
        data.name = name;
        data.description = description;
        data.column = column;
        await data.save();

        const taskDto = new TaskDto(data);

        return {
            data: { ...taskDto }
        }

    }

}

module.exports = new TaskService();

