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

  app.get("/students", async(req, res) => {
    try {
      const getAllStudents = await pool.query("SELECT * FROM students");
      res.json(getAllStudents.rows);
  
    } catch (err) {
      console.error(err.message)
    }
  });

  app.get("/students/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const student = await pool.query("SELECT * FROM students WHERE student_id = $1", [id]
      );
  
      res.json(student.rows[0]);
  
    console.log(req.params)
    } catch (err) {
      console.error(err.message)
    }
    
  });

  app.put("/students/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { student_name } = req.body;
      const editStudent = await pool.query("UPDATE students SET student_name = $1 WHERE student_id = $2",
      [student_name, id]);
  
      res.json("You successfully updated the student record")
    } catch (err) {
      console.error(err.message)
    }
    });

    app.delete("/students/:id", async (req, res) => {
        try {
          const { id } = req.params;
          const deleteStudent = await pool.query("DELETE FROM students WHERE student_id = $1", 
          [id]);
      
          res.json("You succesfully deleted the student record")
        } catch (err) {
          console.log(err.message);
        }
      });

app.listen(5000, function() {
    console.log("Listening for requests on Port 5000")
});