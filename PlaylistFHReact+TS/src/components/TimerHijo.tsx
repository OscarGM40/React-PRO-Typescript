

import React, { useEffect, useMemo, useRef } from 'react'


type TimerHijoArgs = {
  milisegundos: number;
  segundos?:number;
}

const TimerHijo = ( { milisegundos}:TimerHijoArgs ) => {

  const [ segundos, setSegundos ] = React.useState(0)

  const intervalRef = useRef<NodeJS.Timeout>();

  useMemo( () => console.log(milisegundos), [milisegundos])
  
  useEffect( () => {
    // console.log('useEffect')
 
    intervalRef.current = setInterval( () => 
      setSegundos(s => s + 1),milisegundos)
 
    return () => {
      intervalRef.current && clearInterval(intervalRef.current)
    }

  }, [milisegundos])
  
  return (
    <>
     <h4>Timer: <small>{segundos}</small> </h4> 
    </>
  )
}

export default TimerHijo
