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
    monothongs: false,
    dipthongs: false,
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
  mode: {sound: true, keyboard: false},
  text: ""
})

function App() {

  const [display, setDisplay] = useState({
    vowels: false,
    monothongs: false,
    dipthongs: false,
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
    mode: {sound: true, keyboard: false},
    text: ""
  })
  const modeValue = { mode, setMode }

  return (
    <div className="App">
      <ModeContext.Provider value={modeValue}>
      <DisplayContext.Provider value={displayValue}>
        <h1>Phonemic Chart (British English)</h1>
        {/* <h2>Test 3</h2>
        <button onClick={playAudio}>Audio</button> */}
        
        <div className="container">
          <div className="chartContainer">
            <ControlPanel />
            <div className={`vowels ${display.vowels ? "vowelsLine" : ""}`}>
              <Monothongs />
              <Dipthongs />
            </div>
            <Consonants />
            <div className="keyboardContainer">
              <ModeSelector />
              {
                mode.mode.keyboard ? <Keyboard /> : null
              }
            </div>
          </div>

          
          
        </div>
      </DisplayContext.Provider>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
