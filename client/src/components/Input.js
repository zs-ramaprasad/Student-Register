import React, { Fragment, useState } from 'react';

const Input = () => {

    const [studentInformation, setStudentInformation] = useState("");

    const onSubmitForm = async (event) => {
        event.preventDefault(); 
      try {
          const body = { studentInformation };
          const response =  await fetch("http://localhost:5000/students", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
          });

          console.log(response);


         
      } catch (err) {
          console.error(err.message)
      }
    }

  return (
  <Fragment>
      <h3>Student List</h3>
      <form onSubmit={onSubmitForm} >
          <input type="text" value={studentInformation} 
          onChange={(event) => setStudentInformation(event.target.value)}>
              </input> 
          <button>Add Student</button>
      </form>
  </Fragment>
  );
}

export default Input;