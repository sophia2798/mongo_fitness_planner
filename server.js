// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const logger = require("morgan");

// INITIALIZE PORTS AND EXPRESS
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODO_URI || "mongodb://localhost/workout", {
    useNewUrlPaser: true,
    useFindAndModify: false
});

// ROUTES 
app.use(require("./controller/frontend_controller"));
app.use(require("./controller/api_controller"));

// INTIALIZE PORT
app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}!`)
});