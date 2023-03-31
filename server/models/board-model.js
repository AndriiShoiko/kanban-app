const { Schema, model } = require("mongoose");

const boardSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
);

module.exports = mongoose.model("Board", boardSchema);