import React from 'react';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import PropTypes from 'prop-types';

export interface ProductTitleProps {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({
  title,
  className,
  style,
}: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};

ProductTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
}