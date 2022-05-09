import React from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar/Navbar';
import History from './components/History/History';
import Course from './components/Course/Course';
import Education from './components/Education/Education';
// import course from './components/course/course';
// import education from './components/education/education';
// import history from './components/history/history';

const App=()=> {
  return (
    <div className='App'>
      <Navbar />
      <History />
      <Course />
      <Education />
    </div>
    );
}

export default App;
