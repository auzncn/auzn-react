import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions';


function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState('individual');
  const [goal, setGoal] = useState('strength power');
  const [muscles, setMuscles] = useState([]);

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, goal, muscles });
    setWorkout(newWorkout);
    window.location.href = "#workout";
  }

  return (
    <main className='flex flex-col bg-gradient-to-r from-slate-800 to-slate-950
     text-white min-h-screen text-sm sm:text-base'>
      <Hero />

      <Generator
        poison={poison}
        goal={goal}
        muscles={muscles}
        setPoison={setPoison}
        setGoal={setGoal}
        setMuscles={setMuscles}
        updateWorkout={updateWorkout} />

      {workout && (<Workout workout={workout} id={'workout'} />)}
    </main>
  )
}

export default App
