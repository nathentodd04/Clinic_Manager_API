const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const { connect, connection } = require("mongoose");
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(routes);

connect("mongodb://localhost:27017/clinic_manager");

connection
    .once("open", () => {
        console.log("Database Connected");
    })
    .on("error", (error) => {
        console.log(error);
    });

app
    .listen(port, () => {
        console.log(`Server listening ${port}`);
    })
    .on("error", (error) => {
        console.log(error);
    })