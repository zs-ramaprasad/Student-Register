import React, { Fragment, useState } from 'react';


const Input = () => {

    const [name, setName] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault(); 
      try {
          
          const body = { name };
          const response = await fetch("http://172.31.82.247:5000/employees", {
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
      <br />
      <h2 align="center">employee Register</h2>
      <br></br>
      <form align="center" onSubmit={onSubmitForm}>
          <input type="text" placeholder="Enter employee name" value={name} 
          onChange={(e) => setName(e.target.value)}>
          </input>
          <button>Add employee</button>
      </form>
  </Fragment>
  );
};

export default Input;
