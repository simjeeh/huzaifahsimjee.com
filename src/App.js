import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Profile from './Profile/Profile.js';
import Experience from './Experience/Experience.js';
import Projects from './Projects/Projects.js';
import Skills from './Skills/Skills.js';

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <Profile />
      <br></br>
      <hr style={{width:"80%"}}  id="experience"/>
        <br></br>
        <br></br>
      <Experience />
      <br></br>
      <hr style={{width:"80%"}} id="projects"/>
        <br></br>
        <br></br>
      <Projects />
      <br></br>
      <hr style={{width:"80%"}} id="skills"/>
        <br></br>
        <br></br>
      <Skills />
    </div>
  );
}

export default App;
