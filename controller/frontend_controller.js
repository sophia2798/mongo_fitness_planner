// DEPENDENCIES
const router = require("express").Router();
const db = require("../models");
const mongojs = require("mongojs");

// ROUTES
router.get("/", (req,res) => {
    res.status(200).sendFile("index.html")
});

router.get("/workout", (req,res) => {
    db.workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
});

router.get("/exercise", (req,res) => {
    db.exercise.find({})
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.json(err);
    })
});

router.get("/populated", (req,res) => {
    db.workout.find({})
    .populate("exercises")
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    });
});

router.get("/populated/:workoutID", (req,res) => {
    db.workout.findOne({
        _id: mongojs.ObjectId(req.params.workoutID)
    })
    .populate("exercises")
    .then(oneWorkout => {
        res.json(oneWorkout)
    })
    .catch(err => {
        res.json(err)
    })
});


module.exports = router;