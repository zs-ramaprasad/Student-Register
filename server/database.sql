CREATE DATABASE register;

CREATE TABLE students(
  student_id SERIAL PRIMARY KEY,
  student_name VARCHAR(50),
  student_email VARCHAR(100),
  degree_course VARCHAR(100)
);