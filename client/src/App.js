import React, { Fragment } from 'react';
import './App.css';
import Input from './components/Input';
import ListStudents from './components/ListStudents';


function App() {
  return ( <Fragment>
    <div className="container">
    <Input />
    <br />
    <br />
    <ListStudents />
    </div>
  </Fragment>
  );
}
       

export default App;
