import React, { Fragment, useEffect, useState } from 'react';
import EditStudent from './EditStudent';

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

  const deleteStudent = async (id) => {
    try {
      const deleteStudent = await fetch(`http://localhost:5000/students/${id}`, {
        method: "DELETE"
      });

      setStudents(students.filter(student => student.student_id !== id)) 
      console.log(deleteStudent);
    } catch (err) {
      console.errror(err.message) 
    }
  }
    
  useEffect(() => {
    getStudents();
  }, []);

    return  ( 
    <Fragment>        
      <table className="table mt-6 text-center">
        <thead>
          <tr>
            <th>Student</th>
            <th>Edit Student Information</th>
            <th>Delete Student Information</th>
          </tr>
        </thead> 
        <tbody>
          {students.map((student) => (
          <tr key={student.student_id}>
            <td>{student.name}</td>
            <td>
              <EditStudent student={student} />
            </td>
            <td>
              <button className="btn btn-light" onClick={() => deleteStudent(student.student_id)}>Delete Student</button> 
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
    );
};


export default ListStudents;