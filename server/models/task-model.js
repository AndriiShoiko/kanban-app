const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: false,
            trim: true,
        },
        boardColumn: {
            type: Schema.Types.ObjectId,
            ref: "BoardColumn",
            required: true,
        },
        ref: {
            type: String,
            required: true,
            unique: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
);

module.exports = model("Task", TaskSchema);