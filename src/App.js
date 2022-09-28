import { useState } from 'react';
import './App.css';
import AllCourses from './components/AllCourses/AllCourses';
import UserDetails from './components/UserDetails/UserDetails';

function App() {


  return (
    <div className="App grid grid-cols-12 h-full ">
      <AllCourses  ></AllCourses>
      <UserDetails ></UserDetails>
    </div>
  );
}

export default App;