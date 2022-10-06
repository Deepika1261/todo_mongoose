const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/todo_routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


mongoose.connect("mongodb://localhost:27017/Customers", { useNewUrlParser: true, useUnifiedTopology: true });
const db1 = mongoose.connection;

db1.on("error", () => {
    console.log("Error occurred");
});
db1.once("open", function () {
    console.log("Connected to database Customers.");
});
db1.on("disconnected", function () {
    console.log("database is disconnected successfully");
});

//404 handler and pass to error handler
app.use((req, res, next) => {
    const err = new Error("not found");
    err.status = 404;
});

//Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT + "...");
});