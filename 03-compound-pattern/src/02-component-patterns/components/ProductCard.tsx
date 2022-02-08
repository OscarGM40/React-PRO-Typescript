import { createContext, CSSProperties, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export interface ProductCardProps {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className,style,onChange,value,initialValues }: ProductCardProps) => {

  const { counter, increaseBy,isMaxCountReached, reset } = useProduct({
    product,
    onChange,
    value,
    initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialValues?.maxCount
      }}
    >
      <div 
        className={`${styles.productCard} ${className}`}
        style={style}
        >
        { children({
          count: counter,
          increaseBy,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          reset,
        }) }

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

