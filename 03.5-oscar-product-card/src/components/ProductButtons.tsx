import React from 'react'
import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import PropTypes from 'prop-types';

export interface ProductButtonsProps {
  className?: string;
  style?: React.CSSProperties;
}
export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  // fijate como comprobar que no sea undefined con !!variable
  const isMaxReached = useCallback(() => {
    /* mejor que ni evalue la condicion si no hay un maxCount */
    return !!maxCount && counter === maxCount;
  }, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button
        className={`${styles.buttonAdd}   ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};

ProductButtons.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};