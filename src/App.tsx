import "./App.css"
import React, { useEffect, useState } from 'react';
import Steps from './components/Steps';
import Rules from './components/Rules';
import Score from './components/Score';
import WebApp from "@twa-dev/sdk";

function App() {
  
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
      localStorage.setItem('score', String(score));
  }, [score]);

  return ( 
    <div className="app">
      <Score score={score}/>
      <Steps score={score} setScore={setScore}/>
      <Rules/>
    </div>
  );
}

export default App;
