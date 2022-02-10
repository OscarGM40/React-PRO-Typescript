import React from 'react';
import { createContext, CSSProperties } from 'react';
import PropTypes from 'prop-types';

import { useProduct } from '../hooks/useProduct';
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface ProductCardProps {
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  product: Product;
  initialValues?: InitialValues;
}

;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, isMaxCountReached, reset } = useProduct({
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
        maxCount: initialValues?.maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          increaseBy,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          reset,
        })}

      </div>
    </Provider>
  );
};

ProductCard.propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.number,
  product: PropTypes.shape({
    id: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
  }).isRequired,
  initialValues: PropTypes.shape({
    count: PropTypes.number,
    maxCount: PropTypes.number,
  }),
};