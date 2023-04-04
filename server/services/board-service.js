const BoardModel = require("../models/board-model");
const ColumnModel = require("../models/column-model");
const TaskModel = require("../models/task-model");

const BoardDto = require("./dtos/boardDto");
const ColumnDto = require("./dtos/columnDto");
const ApiError = require("../exceptions/api-error");
const makeRef = require("./utils/index");
const TaskDto = require("./dtos/taskDto");

class BoardService {

    async allBoards(user) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        const allBoards = await BoardModel.find({ user: user.id });

        if (allBoards) {
            const boardsDto = BoardDto.getCollection(allBoards);
            return {
                data: boardsDto
            }
        } else {
            return {
                data: {}
            }
        }

    }

    async getBoard(user, ref) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        const board = await BoardModel.findOne({ user: user.id, ref });

        if (board) {
            const boardDto = new BoardDto(board);
            return {
                data: { ...boardDto }
            }
        } else {
            return {
                data: {}
            }
        }

    }

    async addBoard(user, name) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        if (!name) {
            throw ApiError.BadRequest("Board title can't be empty");
        }

        const ref = makeRef();

        const newBoard = new BoardModel({ user: user.id, name, ref });
        await newBoard.save();

        const boardDto = new BoardDto(newBoard);

        return {
            data: { ...boardDto }
        }

    }

    async deleteBoard(user, ref) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        if (!ref) {
            throw ApiError.BadRequest("Boards ref can't be empty");
        }

        const board = await BoardModel.deleteOne({ user: user.id, ref });

        return {
            data: {}
        }

    }

    async patchBoard(user, ref, name) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        if (!ref) {
            throw ApiError.BadRequest("Boards ref can't be empty");
        }

        if (!name) {
            throw ApiError.BadRequest("Boards name can't be empty");
        }

        const findBoard = await BoardModel.findOne({ user: user.id, ref });
        findBoard.name = name;
        await findBoard.save();

        const boardDto = new BoardDto(findBoard);

        return {
            data: { ...boardDto }
        }

    }

    async getColumnsForBoard(user, ref) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        if (!ref) {
            throw ApiError.BadRequest("Boards ref can't be empty");
        }

        const board = await BoardModel.findOne({ user: user.id, ref });
        if (!board) {
            return { data: {} }
        }

        let boardDto = new BoardDto(board);
        const columns = await ColumnModel.find({ user: user.id, board: boardDto.id });
        if (!columns) {
            boardDto.columns = [];
            return {
                data: boardDto
            }
        }

        boardDto.columns = ColumnDto.getCollection(columns);

        return {
            data: boardDto
        }
    }

    async getColumnsAndTasksForBoard(user, ref) {

        if (!user) {
            throw ApiError.UnauthorizedError();
        }

        if (!ref) {
            throw ApiError.BadRequest("Boards ref can't be empty");
        }

        const board = await BoardModel.findOne({ user: user.id, ref });
        if (!board) {
            return { data: {} }
        }
        let boardDto = new BoardDto(board);


        const columns = await ColumnModel.find({ user: user.id, board: boardDto.id });
        const tasks = await TaskModel.find({ user: user.id });

        if (!columns) {
            boardDto.columns = [];
            return {
                data: boardDto
            }
        }

        const columnsDto = ColumnDto.getCollection(columns);
        const tasksDto = TaskDto.getCollection(tasks);

        const columnsAndTasksDto = columnsDto.map((column) => {
            const findTasks = tasksDto.filter(task => task.column === column.id);
            column.tasks = findTasks;
            return column;
        });

        boardDto.columns = columnsAndTasksDto;

        return {
            data: boardDto
        }
    }

}

module.exports = new BoardService();

