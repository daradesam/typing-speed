import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [alphabet, setAlphabet] = useState('A');
  const [time, setTime] = useState(0);
  const [input, setInput] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  function isGameOver(){
    if(input.length == 20){
      setIsFinished(true);
    }
  }

  useEffect(()=>{
    isGameOver();
  },[input])

  // useEffect(()=>{
  //   if
  // },[input])

  function timer(){
    setInterval(() => {
      setTime(time+1)
    }, 1000);
  }

  // timer();

  function generateRandAlphabet (e){
    const num = Math.floor(Math.random() * 25);
    const randAlpha = String.fromCharCode(num + 65);
    setAlphabet(randAlpha);
    setInput(e);
    if(e.length == 1){
      timer();
    }
  }

  return (
    <div className="App">
      <h1>Type The Alphabet</h1>
      <span>Typing game to see how fast you type. Timer starts when you do :)</span>
      <div className="alphabet-container">{alphabet}</div>
      <h3>Time: {time}s</h3>
      <h4>my best time: 0.00s</h4>
      <input placeholder='Enter alphabet to start the game' value={input} onChange={(e)=>generateRandAlphabet(e.target.value)}/>
    </div>
  );
}

export default App;
