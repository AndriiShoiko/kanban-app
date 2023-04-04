const taskService = require("../services/task-service");

class TaskController {

    async allTasks(req, res, next) {

        try {

            const { user } = req;
            const query = req.query;

            const data = await taskService.allTasks(user, query);

            res.status(200).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async getTask(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;
            const query = req.query;

            const data = await taskService.getTask(user, ref, query);

            res.status(200).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async addTask(req, res, next) {

        try {

            const { user } = req;
            const body = req.body;

            const data = await taskService.addTask(user, body);

            res.status(201).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async deleteTask(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;

            const data = await taskService.deleteTask(user, ref);

            res.status(204).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async patchTask(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;
            const body = req.body;

            const data = await taskService.patchTask(user, ref, body);

            res.status(201).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

}

module.exports = new TaskController();