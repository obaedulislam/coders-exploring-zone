import { useState } from 'react';
import './App.css';
import AllCourses from './components/AllCourses/AllCourses';
import Footer from './components/Footer/Footer';
import QuesAns from './components/QuesAns/QuesAns';
import UserDetails from './components/UserDetails/UserDetails';


function App() {
  const [timeOfSession, setTimeOfSession] = useState(0);

  const handleSeesionTime = (time) => {
    const newTime = time + timeOfSession;
    setTimeOfSession(newTime);

  }

  return (
    <div className="App grid grid-cols-12 h-full overflow-hidden">
      <AllCourses  handleSeesionTime={handleSeesionTime}></AllCourses>
      <UserDetails timeOfSession={timeOfSession}></UserDetails>
      <QuesAns></QuesAns>
      <Footer></Footer>
    </div>
  );
}

export default App;