import { useState } from 'react';
import './App.css';
import AllCourses from './components/AllCourses/AllCourses';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const [timeOfSession, setTimeOfSession] = useState(0);

  const handleSeesionTime = (time) => {
    
    const newTime = time + timeOfSession;
    setTimeOfSession(newTime);

  }

  return (
    <div className="App grid grid-cols-12 h-full ">
      <AllCourses  handleSeesionTime={handleSeesionTime}></AllCourses>
      <UserDetails timeOfSession={timeOfSession}></UserDetails>
    </div>
  );
}

export default App;