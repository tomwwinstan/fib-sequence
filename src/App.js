import './App.css';
import Header from "./main/components/Header";
import FibonacciSequence from "./main/components/FibonacciSequence";

function App() {

    return (
      <div className="App">
        <Header/>
        <div className="row">
          <FibonacciSequence />
        </div>
      </div>
  );
}

export default App;
