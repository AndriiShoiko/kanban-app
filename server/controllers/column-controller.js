const columnService = require("../services/column-service");

class ColumnController {

    async allColumns(req, res, next) {

        try {

            const { user } = req;
            const query = req.query;

            const data = await columnService.allColumns(user, query);

            res.status(200).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async getColumn(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;
            const query = req.query;

            const data = await columnService.getColumn(user, ref, query);

            res.status(200).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async addColumn(req, res, next) {

        try {

            const { user } = req;
            const body = req.body;

            const data = await columnService.addColumn(user, body);

            res.status(201).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async deleteColumn(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;

            const data = await columnService.deleteColumn(user, ref);

            res.status(204).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async patchColumn(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;
            const body = req.body;

            const data = await columnService.patchColumn(user, ref, body);

            res.status(201).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

}

module.exports = new ColumnController();