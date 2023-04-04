module.exports = class UserDto {
    email;
    id;
    isActivated;
    role;
    ref;

    constructor(model) {
        this.email = model.email;
        this.id = model._id.toString();
        this.isActivated = model.isActivated;
        this.role = model.role;
        this.ref = model.ref;
    }
}