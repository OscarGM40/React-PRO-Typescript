import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  initialValue:number
}

export const useProduct = ({
  product,
  onChange,
  initialValue
}:useProductArgs) => {
  
  const [ counter, setCounter ] = useState(initialValue);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter+value,0)
    setCounter(newValue);

    onChange && onChange({
      product,
      count: newValue
    });
  }

  return {
    counter,
    increaseBy
  }

}