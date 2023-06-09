module.exports = class boardDto {
    name;
    id;
    ref;
    user;

    constructor(model) {
        this.name = model.name;
        this.id = model._id.toString();
        this.ref = model.ref;
        this.user = model.user.toString();
    }

    static getCollection(boardCollection = []) {

        const dtoCollection = new Array(boardCollection.length);

        boardCollection.forEach((value, index) => dtoCollection[index] = new boardDto(value));

        return dtoCollection;
    }
}