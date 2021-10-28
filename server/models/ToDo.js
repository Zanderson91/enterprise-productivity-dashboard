const { Schema, model } = require("mongoose")

const toDoSchema = Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        eagerness: {
            type: String
        },
        isComplete: {
            type: String
        },
    }
);

const ToDo = model("ToDo", toDoSchema)

module.exports = ToDo;

