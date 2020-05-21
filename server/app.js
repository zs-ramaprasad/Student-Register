const express = require("express");
const app = express();
const cosrs = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


app.listen(5000, function() {
    console.log("Listening for requests on Port 5000")
});