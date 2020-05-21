import React, { Fragment } from 'react';

const showStudents = () => {
    return  ( 
    <Fragment>
        {" "}         
      <table class="table">
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


export default showStudents;