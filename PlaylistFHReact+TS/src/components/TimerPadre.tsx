import React from "react"
import TimerHijo from "./TimerHijo"



const TimerPadre = () => {

  const [ milisegundos,setMilisegundos ] = React.useState(0);


  
  return (
    <>
     <span> Milisegundos {1000}</span> 
     <br />
     <button className="btn btn-outline-success"
     onClick={ () => setMilisegundos(1000)}
     >
       1000
     </button>
     <button className="btn btn-outline-success"
     onClick={ () => setMilisegundos(2000)}
     >
       2000
     </button>
     <TimerHijo milisegundos={milisegundos}/>
    </>
  )
}

export default TimerPadre
