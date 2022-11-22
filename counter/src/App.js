import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting/Greeting";
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter value={1} counter={2} />
      <Counter value={4} counter={1}/>
      <Greeting name = "Euralio" />
    </div>
  );
}

export default App;
