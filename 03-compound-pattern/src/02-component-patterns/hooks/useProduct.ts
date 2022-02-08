import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?:number;
  initialValues?:InitialValues;
}

export const useProduct = ({ 
  product,
  onChange,
  value=0,
  initialValues
}:useProductArgs) => {
  
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef<boolean>(false);
  
  const increaseBy = (value: number) => {
    
    // const newValue = Math.max(counter+value,0)
     const newValue = initialValues?.maxCount 
      ? Math.max(Math.min(counter + value, initialValues.maxCount),0) 
      : Math.max(counter+value,0)
     
    setCounter(newValue);

    onChange && onChange({
      product,
      count: newValue
    });
  }

  const reset = () => {
    setCounter(initialValues?.count || value);
  }    

  /* NOTA:un useRef no hace falta mandarlo como dependencia en un efecto */
/*    useEffect(() => { 
    if( !isMounted.current) { 
      return;}
    setCounter(value);    
  }, [value]); 
  
   useEffect(() => {
    isMounted.current=true;
  }, []); */

  useEffect(() => {
    setCounter(initialValues?.count || value);
  }, [value]); 

  return {
    counter,
    isMaxCountReached: !!initialValues?.maxCount && counter >= initialValues.maxCount,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  }

}