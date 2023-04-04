const columnDto = require("./columnDto");

module.exports = class TaskDto {
    name;
    description;
    column;
    id;
    ref;
    user;

    constructor(model) {
        this.name = model.name;
        this.id = model._id.toString();
        this.ref = model.ref;
        this.user = model.user.toString();
        this.description = model.description;

        if (model.column.ref) {
            this.column = new columnDto(model.column);
        } else {
            this.column = model.column.toString();
        }
    }

    static getCollection(taskCollection = []) {

        const dtoCollection = new Array(taskCollection.length);

        taskCollection.forEach((value, index) => dtoCollection[index] = new TaskDto(value));

        return dtoCollection;
    }
}