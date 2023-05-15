import './Global.scss'
import './App.scss';

import { createContext, useState, useMemo } from 'react'

import Monothongs from './components/Monothongs';
import Dipthongs from './components/Dipthongs';
import Consonants from './components/Consonants';
import ControlPanel from './components/ControlPanel';

export const DisplayContext = createContext({
  display: {
    vowels: false,
    monothong: false,
    dipthong: false,
    short: false,
    long: false,
    pairs: false,
    plosives: false,
    fricatives: false,
    affricates: false,
    nasals: false,
    approximants: false
  },
  setDisplay: () => {}
});

function App() {

  const [display, setDisplay] = useState({
    vowels: false,
    monothong: false,
    dipthong: false,
    short: false,
    long: false,
    pairs: false,
    plosives: false,
    fricatives: false,
    affricates: false,
    nasals: false,
    approximants: false
  })
  const value = { display, setDisplay }
  
  // const audio = new Audio(require(`./Audio/Phonemes/Recording.mp3`))

  // const playAudio = () => {
  //   audio.play();
  // }

  return (
    <div className="App">
      <DisplayContext.Provider value={value}>
        <h1>English IPA</h1>
        {/* <h2>Test 3</h2>
        <button onClick={playAudio}>Audio</button> */}
        
        <div className="container">
          <ControlPanel />
          <div className="chart">
            <div className="vowels" style={{borderColor: `${display.vowels ? "lightgreen" : "transparent"}`}}>
              <Monothongs />
              <Dipthongs />
            </div>
            <Consonants />
          </div>
        </div>
      </DisplayContext.Provider>
    </div>
  );
}

export default App;
