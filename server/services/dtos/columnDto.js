const BoardDto = require("./boardDto");

module.exports = class columnDto {
    name;
    id;
    ref;
    board;
    user;

    constructor(model) {
        this.name = model.name;
        this.id = model._id.toString();
        this.ref = model.ref;

        if (model.board.ref) {
            this.board = new BoardDto(model.board);
        } else {
            this.board = model.board.toString();
        }

        this.user = model.user.toString();
    }

    static getCollection(columnCollection = []) {

        const dtoCollection = new Array(columnCollection.length);

        columnCollection.forEach((value, index) => dtoCollection[index] = new columnDto(value));

        return dtoCollection;
    }
}