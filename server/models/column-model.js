const { Schema, model } = require("mongoose");

const boardColumnSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        ref: {
            type: String,
            required: true,
            unique: true,
        },
        board: {
            type: Schema.Types.ObjectId,
            ref: "Board",
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
);

module.exports = model("Column", boardColumnSchema);