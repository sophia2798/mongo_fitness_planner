const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: "Enter a name for the exercise"
    },
    type: {
        type: String
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    },
});

const exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = exercise;