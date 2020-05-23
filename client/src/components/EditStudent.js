import React, { Fragment , useState } from 'react';

const EditStudent = ({student}) => {
  console.log(student)
  const [name, setName] = useState(student.name);


  const changeName = async e => {
    e.preventDefault(); 
    try {
      const body = { name };
      const response = await fetch(`http://localhost:5000/students/${student.student_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      }
      );

      window.location = "/";
      console.log(response);

    } catch (err) {
      console.error(err.message)
    }
  };


  return (
    <Fragment>
      <button
        type="button"
        className = "btn btn info"
        data-toggle="modal"
        data-target={`#id${student.student_id}`}>
        Edit
        </button>
      
      <div className="modal" id={`id${student.student_id}`} onClick={() => setName(student.name)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Student Information</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setName(student.name)}>&times;</button>
            </div>

            <div className="modal-body">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>

            <div className="modal-footer">
              <button type="button" data-dismiss="modal">Edit</button>
              <button
                type="button"
                data-dismiss="modal"
                onClick = {e => changeName(e)}>
                  Edit student information
              </button>
             
            
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditStudent;