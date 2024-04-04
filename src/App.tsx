import React, { useEffect, useState } from 'react';
import Steps from './components/Steps';
import Rules from './components/Rules';
import Score from './components/Score';
import "./App.css"

function App() {
  
  const [score, setScore] = useState<number>(() => Number(localStorage.getItem('score')) || 0);

  useEffect(() => {
      localStorage.setItem('score', String(score));
  }, [score]);

  return ( 
    <div className="rpsApp">
      <Score score={score}/>
      <Steps score={score} setScore={setScore}/>
      <Rules/>
    </div>
  );
}

export default App;
