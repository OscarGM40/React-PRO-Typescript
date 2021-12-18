import { useState } from "react";

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const incrementar = (number:number = 1) => {
    setCounter( counter + number );
  };

  return (
    <div className="mt-5">
      <h2>1 - Hook useState in TypeScript</h2>
      <hr />
      <h3>Counter</h3>
      <span>Valor: { counter }</span>
      <br />
      <button 
        className="btn btn-outline-primary mt-2"
        onClick={() => incrementar() }
        >+1
      </button>
      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => incrementar(2) }
        >+2
      </button>
      <button
        className="btn btn-outline-danger mt-2"
        onClick={() => setCounter(0) }
        >Reset
      </button>
      
    </div>
  )
}

export default Counter
