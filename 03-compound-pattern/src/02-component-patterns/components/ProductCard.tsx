import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";

import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

/* puedo imprimir los estilos para asegurarme que están referenciados correctamente */
// console.log(styles);

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct(0);

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}

        {/* <ProductImage img={product.img}/> */}
        {/* <img src={product.img || NoImage} alt={product.title} className={ styles.productImg}/> */}

        {/* <ProductTitle title={product.title}/> */}
        {/* <span className={ styles.productDescription}>{product.title}</span> */}

        {/* <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
        {/*         <div className={ styles.buttonsContainer}>
          <button 
          className={ styles.buttonMinus }
          onClick={ () => increaseBy(-1) } >-</button>
          
          <div className={ styles.countLabel}> {counter} </div>
          
          <button 
          className={ styles.buttonAdd }
          onClick={ () => increaseBy(+1) } >+</button>
        </div> */}
      </div>
    </Provider>
  );
};

