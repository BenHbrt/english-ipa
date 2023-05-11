import './Global.scss'
import './App.scss';

function App() {

  const playAudio = (name) => {
    new Audio(require(`./Audio/Phonemes/PhAI.m4a`)).play();
  }

  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={playAudio}>Audio</button>
    </div>
  );
}

export default App;
