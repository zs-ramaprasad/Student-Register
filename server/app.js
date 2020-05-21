const express = require("express");
const app = express();
const cosrs = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/students", async (req, res) => {
    try {
        console.log(req.body);
        const { student_name } = req.body;
        const { student_email } = req.body;
        const { degree_course } = req.body;
        const newStudent = await pool.query(
          "INSERT INTO students (student_name) VALUES($1)  RETURNING *", 
          [student_name]
        );
      
        res.json(newStudent.rows[0]);
  
    } catch (err) {
      console.error(err.message);
    }
  });




app.listen(5000, function() {
    console.log("Listening for requests on Port 5000")
});