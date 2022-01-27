import "./App.css";
import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterWithHook from "./bases/CounterWithHook";

function App() {
  return (
    <>
      <Counter initialValue={ 15 }/>
      <CounterBy initialValue={ 15 }/>
      <CounterEffect />
      <CounterWithHook />
    </>
  );
}

export default App;
