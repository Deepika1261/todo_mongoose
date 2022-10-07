const mongoose = require("mongoose");
const Todoschema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    }

});
const todomodel = mongoose.model("Todo", Todoschema);
module.exports = todomodel;