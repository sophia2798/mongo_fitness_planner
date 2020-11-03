function makeButtons() {
    $("#button-wrapper").empty();
    $.ajax({
        url: "/workout",
        method: "GET"
    }).then(allWorkouts => {
        for (var i=0; i<allWorkouts.length; i++) {
            $("#button-wrapper").append(`
                <button class="btn workoutBtn btn-info" data-toggle="modal" data-target="#exampleModalCenter" id=${allWorkouts[i]._id}>${allWorkouts[i].name}</button>
            `)
        };
        $(".workoutBtn").click(function(event) {
            event.preventDefault();
            // console.log(this.id);
            $.ajax({
                url:`/populated/${this.id}`,
                method: "GET"
            }).then(selectedWorkout => {
                $("#exampleModalLongTitle").text(selectedWorkout.name);
                $("#hidden-id").text(selectedWorkout._id)
                $.ajax({
                    url: `/populated/${selectedWorkout._id}`,
                    method: "GET"
                }).then(oneWorkout => {
                    $(".cardio-section").empty();
                    $(".weights-section").empty();
                    // console.log(oneWorkout.exercises);
                    for (var i=0;i<oneWorkout.exercises.length;i++) {
                        if (oneWorkout.exercises[i].type === "cardio") {
                            $(".cardio-section").append(`
                            <div class="exercise-entry" style="padding:1rem">
                            <p style="margin:0">Name: ${oneWorkout.exercises[i].name}</p>
                            <p style="margin:0">Duration: ${oneWorkout.exercises[i].duration}</p>
                            <p style="margin:0">Distance: ${oneWorkout.exercises[i].distance}</p>
                            </div>
                        `)
                        }
                        else if (oneWorkout.exercises[i].type === "weights") {
                            $(".weights-section").append(`
                            <div class="exercise-entry" style="padding:1rem">
                            <p style="margin:0">Name: ${oneWorkout.exercises[i].name}</p>
                            <p style="margin:0">Weights: ${oneWorkout.exercises[i].weight}</p>
                            <p style="margin:0">Reps: ${oneWorkout.exercises[i].reps}</p>
                            <p style="margin:0">Sets: ${oneWorkout.exercises[i].sets}</p>
                            </div>
                        `)
                        }
                    }
                    $("#exampleModalCenter").modal('show');
                })
                // submitExercise(selectedWorkout._id);
            })
        });
    })
};

$("#submit-exercise").click(function(event) {
    event.preventDefault();
    // console.log("submit");
    // $("#exampleModalCenter").modal("hide");
    let selectID = $("#hidden-id").text();
    // let selectID = $("#exampleModalLongTitle").text();
    console.log(selectID);
    const cardioInfo = {
        name: $("#exercise-name").val().trim(),
        duration: $("#cardio-duration").val().trim(),
        distance: $("#cardio-distance").val().trim(),
        weight: $("#weight").val().trim(),
        reps: $("#reps").val().trim(),
        sets: $("#sets").val().trim(),
        type: $("#submit-exercise").val()
    };
    $.ajax({
        url: `/submit/${selectID}`,
        data: cardioInfo,
        method: "POST"
    }).then(newExercise => {
        console.log(newExercise)
    })
    $("#exampleModalCenter").modal("hide");
    $("#exampleModal").modal("show");
});


$(document).ready(() => {
    makeButtons();
    $("#exercise-form1")[0].reset();
    $("#exercise-form2")[0].reset();
    $("#cardio-select").click(event => {
        event.preventDefault();
        $(".cardio").show();
        $("#submit-exercise").show();
        $(".weights").hide();
        $("#submit-exercise").attr("value","cardio");
    })
    $("#weight-select").click(event => {
        event.preventDefault();
        $(".cardio").hide();
        $("#submit-exercise").show();
        $(".weights").show();
        $("#submit-exercise").attr("value","weights");
    })
});

$("#submit-workout").click(event => {
    event.preventDefault();
    if ($("#workout-name").val().trim() === "") {
        alert("Must input a name for your workout!")
    } else {
        $.ajax({
            url: "/api/workout",
            data: {name: $("#workout-name").val().trim()},
            method: "POST"
        }).then(result => {
            console.log(result);
            makeButtons();
        })
    }
    $("#workout-form")[0].reset();
});