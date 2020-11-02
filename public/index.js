function makeButtons() {
    $("#button-wrapper").empty();
    $.ajax({
        url: "/workout",
        method: "GET"
    }).then(allWorkouts => {
        for (var i=0; i<allWorkouts.length; i++) {
            $("#button-wrapper").append(`
                <button class="btn workoutBtn" data-toggle="modal" data-target="#exampleModalCenter" id=${allWorkouts[i]._id}>${allWorkouts[i].name}</button>
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
                $("#exampleModalCenter").modal('show');
                // submitExercise(selectedWorkout._id);
            })
        });
    })
};

$("#submit-exercise").click(function(event) {
    event.preventDefault();
    console.log("submit");
    // $("#exampleModalCenter").modal("hide");
    let selectID = $("#hidden-id").text();
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
        url: `/api/${selectID}/exercise`,
        data: cardioInfo,
        method: "POST"
    }).then(newExercise => {
        console.log(newExercise)
    })
});


$(document).ready(() => {
    makeButtons();
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
});
