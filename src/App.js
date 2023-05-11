import './Global.scss'
import './App.scss';

function App() {

  const audio = new Audio(require(`./Audio/Phonemes/Recording.mp3`))

  const playAudio = () => {
    audio.play();
  }

  return (
    <div className="App">
      <h1>App</h1>
      <h2>Test 3</h2>
      <button onClick={playAudio}>Audio</button>
    </div>
  );
}

export default App;
