const boardService = require("../services/board-service");

class BoardController {

    async allBoards(req, res, next) {

        try {

            const { user } = req;

            const data = await boardService.allBoards(user);

            res.status(200).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async getBoard(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;

            const data = await boardService.getBoard(user, ref);

            res.status(200).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async addBoard(req, res, next) {

        try {

            const { user } = req;
            const { name } = req.body;

            const data = await boardService.addBoard(user, name);

            res.status(201).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }

    async deleteBoard(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;

            const data = await boardService.deleteBoard(user, ref);

            res.status(204).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }    

    async patchBoard(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;
            const { name } = req.body;

            const data = await boardService.patchBoard(user, ref, name);

            res.status(201).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    } 
    
    async getColumnsForBoard(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;

            const data = await boardService.getColumnsForBoard(user, ref);

            res.status(200).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }    

    async getColumnsAndTasksForBoard(req, res, next) {

        try {

            const { user } = req;
            const { ref } = req.params;

            const data = await boardService.getColumnsAndTasksForBoard(user, ref);

            res.status(200).json({
                ...data
            });
        } catch (error) {
            next(error);
        }

    }    

}

module.exports = new BoardController();