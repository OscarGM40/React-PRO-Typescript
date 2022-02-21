/* Compound Components Pattern modulariza todo en pequeños componentes */
import React from 'react'
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import NoImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import PropTypes from 'prop-types';

export interface ProductImageProps {
  img?: string;
  className?:string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img = "", className,style}:ProductImageProps) => {
  const { product } = useContext(ProductContext);

  return <img src={img || product?.img || NoImage} alt="Image" className={`${styles.productImg} ${className}`} style={style}  />;
};

ProductImage.propTypes = {
  img: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};