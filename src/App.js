
import './App.css';
import {  useEffect, useState } from "react";

function App() {

  const [activeKey, setActiveKey] = useState('')

  useEffect(()=> {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase())
    });
  },[])

  const drumPads = [
    {
      letter: 'Q',
      keycode: 81,
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      letter: 'W',
      keycode: 87,
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
    {
      letter: 'E',
      keycode: 69,
      id: 'Kick-and-Hat',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      letter: 'A',
      keycode: 65,
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      letter: 'S',
      keycode: 83,
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      letter: 'D',
      keycode: 68,
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    },
    {
      letter: 'Z',
      keycode: 90,
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      letter: 'X',
      keycode: 88,
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      letter: 'C',
      keycode: 67,
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    console.log(audio);
    audio.play();
    setActiveKey(selector)
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div id="drum-pads">
          {drumPads.map((drumPad) =>
          (<div 
          key={drumPad.id}
          onClick={() => {
            playSound(drumPad.letter)
          }} 
          className='drum-pad' 
          id={drumPad.id}
          >
            {drumPad.letter}
            <audio
              className='clip'
              id={drumPad.letter}
              src={drumPad.url}
            ></audio>
          </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
