// DEPENDENCIES
const router = require("express").Router();
const db = require("../models/");
const mongojs = require("mongojs");

router.post("/api/workout", ({ body }, res) => {
    db.workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// router.post("/api/:workoutID/exercise", ({body},res) => {
//     // const exerciseInformation = {
//     //     name: req.body.name,
//     //     duration: req.body.duration,
//     //     weight: req.body.weight,
//     //     type: req.body.type,
//     //     reps: req.body.reqs,
//     //     sets: req.body.sets,
//     //     distance: req.body.distance
//     // };
//     db.exercise.create(body)
//     .then(({_id})) => db.workout.findOneAndUpdate({}, {$push:{exercises:_id}}, {new:true})
//     .then(dbWorkout => {
//         res.json(dbWorkout)
//     })
//     .catch(err => {
//         res.json(err);
//     })
// });

router.post("/submit/:id", (req, res) => {
    const exerciseInformation = {
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        type: req.body.type,
        reps: req.body.reps,
        sets: req.body.sets,
        distance: req.body.distance
    };
    db.exercise.create(exerciseInformation)
      .then(({ _id }) => db.workout.findOneAndUpdate({_id: mongojs.ObjectId(req.params.id)}, { $push: { exercises: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
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