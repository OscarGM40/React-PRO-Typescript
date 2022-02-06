import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?:number;
}

export const useProduct = ({ product, onChange, value=0
}:useProductArgs) => {
  
  const [ counter, setCounter ] = useState(value);
  /* comentar para control mediante ambos setter */
  const isControlled = useRef<boolean>(!!onChange);
  
  const increaseBy = (value: number) => {
    
    /* comentar para control mediante ambos setter */
     if (isControlled.current) {
      return onChange!({count:value,product});
    } 
    const newValue = Math.max(counter+value,0)
    setCounter(newValue);

    onChange && onChange({
      product,
      count: newValue
    });
  }

  useEffect(() => {;
    setCounter(value);    
  }, [value]);
  

  return {
    counter,
    increaseBy
  }

}