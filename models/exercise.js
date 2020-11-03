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
        type: String
    },
    weight: {
        type: String
    },
    reps: {
        type: String
    },
    sets: {
        type: String
    },
    distance: {
        type: String
    },
});

const exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = exercise;