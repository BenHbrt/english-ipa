import './Global.scss'
import './App.scss';

import { createContext, useState } from 'react'

import Monothongs from './components/Monothongs';
import Dipthongs from './components/Dipthongs';
import Consonants from './components/Consonants';
import ControlPanel from './components/ControlPanel';
import ModeSelector from './components/ModeSelector';
import Keyboard from './components/Keyboard';

export const DisplayContext = createContext({
  display: {
    vowels: false,
    monothong: false,
    dipthong: false,
    short: false,
    long: false,
    consonants: false,
    pairs: false,
    plosives: false,
    fricatives: false,
    affricates: false,
    nasals: false,
    approximants: false
  },
  setDisplay: () => {}
});

export const ModeContext = createContext({
  mode: "sound",
  text: ""
})

function App() {

  const [display, setDisplay] = useState({
    vowels: false,
    monothong: false,
    dipthong: false,
    short: false,
    long: false,
    consonants: false,
    pairs: false,
    plosives: false,
    fricatives: false,
    affricates: false,
    nasals: false,
    approximants: false
  })
  const displayValue = { display, setDisplay }

  const [mode, setMode] = useState({
    mode: "sound",
    text: ""
  })
  const modeValue = { mode, setMode }
  
  // const audio = new Audio(require(`./Audio/Phonemes/Recording.mp3`))

  // const playAudio = () => {
  //   audio.play();
  // }

  return (
    <div className="App">
      <ModeContext.Provider value={modeValue}>
      <DisplayContext.Provider value={displayValue}>
        <h1>English IPA</h1>
        {/* <h2>Test 3</h2>
        <button onClick={playAudio}>Audio</button> */}
        
        <div className="container">
          <ControlPanel />
          <div className="chartContainer">
            <div className="chart">
              <div className={`vowels ${display.vowels ? "vowelsLine" : ""}`}>
                <Monothongs />
                <Dipthongs />
              </div>
              <Consonants />
            </div>
            {
              mode.mode === "keyboard" ? <Keyboard /> : null
            }
          </div>
          <ModeSelector />
          <button onClick={() => console.log(mode)}>Mode</button>
        </div>
      </DisplayContext.Provider>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
