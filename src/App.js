import './Global.scss'
import './App.scss';

function App() {

  const audio = new Audio(require(`./Audio/Phonemes/PhAI.m4a`))

  const playAudio = () => {
    audio.play();
  }

  return (
    <div className="App">
      <h1>App</h1>
      <h2>Test 2</h2>
      <button onClick={playAudio}>Audio</button>
    </div>
  );
}

export default App;
