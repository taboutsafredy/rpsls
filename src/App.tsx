import "./App.css"
import React, { useEffect, useState } from 'react';
import Steps from './components/Steps';
import Rules from './components/Rules';
import Score from './components/Score';

function App() {
  
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
      localStorage.setItem('score', String(score));
  }, [score]);

  return ( 
    <div className="app">
      <Score score={score}/>
      <Steps setScore={setScore}/>
      <Rules/>
    </div>
  );
}

export default App;
