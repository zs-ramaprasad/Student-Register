import React, { Fragment } from 'react';
import './App.css';
import Input from './components/Input';
import Listemployees from './components/Listemployees';


function App() {
  return ( <Fragment>
    <div className="container">
    <Input />
    <br />
    <br />
    <Listemployees />
    </div>
  </Fragment>
  );
}
       

export default App;
