import './Global.scss'
import './App.scss';

import { createContext, useState, useEffect } from 'react'

import Monothongs from './components/Monothongs';
import Dipthongs from './components/Dipthongs';
import Consonants from './components/Consonants';
import ControlPanel from './components/ControlPanel';
import ModeSelector from './components/ModeSelector';
import Keyboard from './components/Keyboard';

const html = document.querySelector("html")

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
  text: "",
  description: ""
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
    mode: {sound: true, keyboard: false, search: false},
    text: "",
    description: ""
  })
  const modeValue = { mode, setMode }

  const [mousePos, setMousePos] = useState({x: 0, y: 0})

  if (mode.mode.search) {
    if (!html.classList.contains("search")) {
      html.classList.toggle("search")
    }
  } else {
    if (html.classList.contains("search")) {
      html.classList.toggle("search")
    }
  }

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({x: event.clientX, y: event.clientY})
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="App">
      <ModeContext.Provider value={modeValue}>
      <DisplayContext.Provider value={displayValue}>
        <h1>Phonemic Chart (British English)</h1>
        {mode.description ?
        <div className="description" style={{top: mousePos.y - 15, left: mousePos.x + 10}}>
          {mode.description}
        </div>
        : null
        }
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
