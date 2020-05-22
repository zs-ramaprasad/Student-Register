import React, { Fragment } from "react";

const EditStudent = () => {

  return (
    <Fragment>
      <button
        type="button"
        className = "btn btn info"
        data-toggle="modal"
        data-target="#myModal"
      >
        Edit
      </button>

      <div
        className="modal"
        id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Student Information</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
              <input type="text"></input>
            </div>

            <div className="modal-footer">
              <button type="button" data-dismiss="modal">Edit</button>
              <button
                type="button"
                data-dismiss="modal">
                  Close
              </button>
             
            
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditStudent;