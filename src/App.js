
import './App.css';
import { useEffect, useState } from "react";
import VolumeSlider from './VolumeSlider.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import initKeyboard from './initKeyboard.js';
import { Card, CardContent, Typography ,Stack} from '@mui/material';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

const drumPads = [
    {
      letter: 'Q',
      keycode: 81,
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      descriptions: 'Open-HH'
    },
    {
      letter: 'W',
      keycode: 87,
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      descriptions: 'Closed-HH'
    },
    {
      letter: 'E',
      keycode: 69,
      id: 'Kick-and-Hat',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      descriptions: 'Kick-and-Hat'
    },
    {
      letter: 'A',
      keycode: 65,
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
      descriptions: 'Punchy-Kick'
    },
    {
      letter: 'S',
      keycode: 83,
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      descriptions: 'Kick'
    },
    {
      letter: 'D',
      keycode: 68,
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', 
      descriptions: 'Snare'
    },
    {
      letter: 'Z',
      keycode: 90,
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
      descriptions: 'Side-Stick'
    },
    {
      letter: 'X',
      keycode: 88,
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      descriptions: 'Clap'
    },
    {
      letter: 'C',
      keycode: 67,
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
      descriptions: 'Shaker'
    },
  ];


let audioElements = [];

function App() {
  const [displayDescription, setDisplayDescription] = useState('');
  const [volume, setVolume] = useState(1);
  const [activeKey, setActiveKey] = useState('')

  useEffect(() => {
    initKeyboard(playSound, setDisplayDescription);
    audioElements = Array.from(document.getElementsByClassName('clip'));
  }, []);

  useEffect(() => {
    audioElements.forEach(element => {
      element.volume = volume
    });
  }, [volume])


  const playSound = (id, setterCallback) => {
    const audioElement = document.getElementById(id);
    if (!audioElement) return;

    audioElement.currentTime = 0;
    audioElement.play();

    const parentElement = audioElement.parentElement;
    if (parentElement) {
      parentElement.style.backgroundColor = "#800080";
      parentElement.style.color = "white";
      parentElement.style.fontSize = "3rem";

      setTimeout(() => {
      parentElement.style.backgroundColor = "";
      parentElement.style.color = "";
      parentElement.style.fontSize = "";
      }, 100);
    }

    const drumPad = drumPads.find(drumPad => drumPad.letter === id);
    setterCallback(drumPad ? drumPad.descriptions : '');
    };

  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30vh' }}>
      <Card sx={{ backgroundColor: '#b987d6' , border: '2px solidrgb(76, 32, 81)', padding: 3}}>
        <CardContent>
          <Grid container direction="row" spacing={5}>
            <Grid item xs={8}>
              <Box>
                <div id="display">{activeKey}</div>
                <div id="drum-pads">
                  {drumPads.map((drumPad) =>
                  (<div
                    key={drumPad.id}
                    onClick={() => {
                      playSound(drumPad.letter, setDisplayDescription)
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
              </Box>
            </Grid>

            <Grid item xs={4}>
            <Box sx={{ width: 200 }}>
                  <Stack direction="row" sx={{ alignItems: 'center' }}>
                    <AudiotrackIcon/>
                    <Typography sx={{ color: "black", fontWeight: '1.5rem', textAlign: 'center', fontSize: '24px', margin:2 }}>Drum Drumm</Typography>
                    <AudiotrackIcon />
                  </Stack>
                </Box>
              
              <Box sx={{ p: 2, border: '1px dashed #9036d1' }}>
                <Typography sx={{ color: "white", fontStyle: 'italic', textAlign: 'center', fontSize: '20px' }} >{displayDescription}</Typography>
              </Box>
              <VolumeSlider volumeSetter={setVolume} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
