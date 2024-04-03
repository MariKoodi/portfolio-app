
import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo.js';
import EducationalBackground from './components/EducationalBackground.js';
import WorkExperience from './components/WorkExperience.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div>
      <PersonalInfo />
      <EducationalBackground />
      <WorkExperience />
      <Projects />
    </div>
  );
}

export default App;
