import React, { Fragment, useState } from 'react';


const Input = ({ setStudentsChange }) => {

    const [studentInformation, setStudentInformation] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault(); 
      try {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json")
          const body = { studentInformation };
          const response =  await fetch("http://localhost:5000/students", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
          });

          window.location = "/";

    
         
      } catch (error) {
          console.error(error.message)
      }
    };

  return (
  <Fragment>
      {" "}
      <h3>Student List</h3>
      <form onSubmit={onSubmitForm}>
          <input type="text" placeholder="Enter student information" value={studentInformation} 
          onChange={(e) => setStudentInformation(e.target.value)}>
          </input>
          <button>Add Student</button>
      </form>
  </Fragment>
  );
};

export default Input;