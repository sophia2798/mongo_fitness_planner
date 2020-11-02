// DEPENDENCIES
const router = require("express").Router();
const db = require("../models/");

router.post("/api/workout", ({ body }, res) => {
    db.workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/:workoutID/exercise", ({body},res) => {
    // const exerciseInformation = {
    //     name: req.body.name,
    //     duration: req.body.duration,
    //     weight: req.body.weight,
    //     type: req.body.type,
    //     reps: req.body.reqs,
    //     sets: req.body.sets,
    //     distance: req.body.distance
    // };
    db.exercise.create(body)
    .then(({_id}) => {
        db.workout.findOneAndUpdate({_id: mongojs.ObjectID(req.params.workoutID)},{$push:{ exercises: _id}},{new:true})
    })
    .then(newExercise => {
        res.json(newExercise)
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.get("/api/workout", (req,res) => {
    db.workout.find({}, (err,data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    })
});

module.exports = router;