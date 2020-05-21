import React, { Fragment, useEffect, useState } from 'react';

const ListStudents = () => {
  const [students, setStudents] = useState([]);

  const getStudents = async() => {
    try {

      const response = await fetch("http://localhost:5000/students");
      const jsonData = await response.json();

      setStudents(jsonData);
      console.log(jsonData)
    } catch (err) {
      console.error(err.message);
    }
  };
    
  useEffect(() => {
    getStudents();
  }, []);

    return  ( 
    <Fragment>        
      <table className="table">
        <thead>
          <tr>
            <th>Student Information</th>
            <th>Edit Student Information</th>
            <th>Delete Student Information</th>
          </tr>
        </thead> 
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
    );
};


export default ListStudents;