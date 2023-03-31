class BoardController {

    async getBoards(req, res, next) {

        try {
            res.json(["Board 1", "Board 2"]);
        } catch (error) {

        }

    }

}

module.exports = new BoardController();