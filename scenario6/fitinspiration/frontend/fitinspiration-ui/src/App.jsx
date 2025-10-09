import React, { useEffect, useState } from 'react'

const App = () => {

  const [workouts, setWorkouts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/api/workouts?page=0&size=5")
    .then(res => res.json())
    .then(data => setWorkouts(data.content));
  }, []);

  return (
    <div className='p-4'>
      <h1 className="text-2xl font-bold mb-4">Workouts</h1>
      {workouts.map(w => (
        <div key={w.title} className='p-4 border mb-2 rounded shadow'>
          <h2 className="text-xl font-semibold">{w.title}</h2>
          <p>{w.description}</p>
          <p>Duration: {w.duration} mins | Difficulty: {w.difficultyLevel}</p>
        </div>
      ))}
    </div>
  );
}

export default App
