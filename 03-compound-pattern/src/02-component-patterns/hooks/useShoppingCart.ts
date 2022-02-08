import { useState } from "react";
import { Product } from "../interfaces/interfaces";

interface ProductInCart extends Product {
  count: number;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart; }>({});
  
  const onProductCountChange = ({ count, product, }: { count: number; product: Product; }) => {

    setShoppingCart((prevShoppingCart) => {
      /* si el producto por el id existe lo almaceno,sino lo creo */
      const productInCart: ProductInCart = prevShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prevShoppingCart,
          [product.id]: productInCart,
        };
      }
      /* borrar el producto */
      const { [product.id]: toDelete, ...newShoppingCart } = prevShoppingCart;
      return newShoppingCart;
    });
  };

  /* forma con doble control<- comentar el primer setter */
  /*     setShoppingCart((prevShoppingCart) => {
        if(count === 0) {
          const { [product.id]: toDelete, ...newShoppingCart } = prevShoppingCart;
          return newShoppingCart;
        }
        return {
          ...prevShoppingCart,
          [product.id]: { ...product, count },
        };
      }); */

  return {
    shoppingCart,
    onProductCountChange,
  };

}