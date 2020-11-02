const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: "Enter a name for the workout"
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const workout = mongoose.model("Workout", workoutSchema);

// EXPORT SCHEMAS
module.exports = workout;