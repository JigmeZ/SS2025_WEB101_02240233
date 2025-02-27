import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: "Mr Shinchan",
      role: "Frontend Developer",
      avatar: "shinchan.jpeg",
      skills: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      id: 2,
      name: "Mrs Mona Lisa",
      role: "UX Designer",
      avatar: "Mr mona lisa.jpg",
      skills: ["Figma", "Wireframing", "Prototyping"]
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Profile</h1>
      </header>
      <div className="profiile-container">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            avatar={profile.avatar}
            skills={profile.skills}
          />
        ))}
      </div>
    </div>
  )
}

export default App;