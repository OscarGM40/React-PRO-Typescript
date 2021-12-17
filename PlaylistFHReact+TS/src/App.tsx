import "./app.css";
import Counter from "./components/Counter";
import TimerPadre from "./components/TimerPadre";
import Usuario from "./components/Usuario";

function App() {
  return (
    <div>
      <h1>React + TypeScript</h1>
      <hr />
      <Counter />

      <Usuario />
        
        <h2>use Effect - use Ref</h2>
        <hr />
        <TimerPadre />
        
    </div>
  );
}

export default App;
