import React from 'react';
import './App.css';



import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Dashboard from './Component/Dashboard';
import { Card } from '@material-ui/core';
import Dashboardcard from './Component/Dashboardcard';
import Navbar from './Component/Navbar';
import Stat from './Component/Stat';
import Teacher from './Component/Teacher';
import Result from './Component/Result';

function App() {
  return (
    <div className="App">
      
     <Dashboard/>
     <Signup/>
     <Signin/> 
     <Dashboardcard/>
     <Navbar/>
     <Stat/>
     <Teacher/>
     <Result/>
     
    </div>
  );
}

export default App;