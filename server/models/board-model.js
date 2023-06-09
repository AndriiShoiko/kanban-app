const { Schema, model } = require("mongoose");

const boardSchema = new Schema(
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
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
);

module.exports = model("Board", boardSchema);