/* Compound Components Pattern modulariza todo en pequeños componentes */

import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import NoImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  return <img src={img || product.img || NoImage} alt="Image" className={styles.productImg} />;
};
