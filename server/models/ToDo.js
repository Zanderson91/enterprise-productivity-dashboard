const { Schema, model } = require("mongoose")

const toDoSchema = Schema(
    {
        text: {
            type: String,
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

