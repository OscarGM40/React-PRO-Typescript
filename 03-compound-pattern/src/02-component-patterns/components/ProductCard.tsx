import { createContext, CSSProperties, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";
import { onChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";



/* puedo imprimir los estilos para asegurarme que están referenciados correctamente */
// console.log(styles);

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args:onChangeArgs) => void;
}

export const ProductCard = ({ children, product, className,style,onChange }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct({
    product,
    onChange,
    initialValue:0,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div 
        className={`${styles.productCard} ${className}`}
        style={style}
        >
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

