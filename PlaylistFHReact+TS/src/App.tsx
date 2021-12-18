import "./app.css";
import ContadorReducer from "./components/ContadorReducer";
import Counter from "./components/Counter";
import TimerPadre from "./components/TimerPadre";
import Usuario from "./components/Usuario";

function App() {
  return (
    <div>
      <h1 className="text-center">React + TypeScript</h1>
      <Counter />
      <Usuario />
      <br /><br />

      <h2>2- Hooks useEffect & useRef</h2>
      <hr />
      <TimerPadre />
      <br /><br />
      
      <h2>3 - Hook useReducer</h2>
      <hr />
      <ContadorReducer />
    </div>
  );
}

export default App;
