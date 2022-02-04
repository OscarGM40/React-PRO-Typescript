import { ReactElement } from "react";
import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductCardProps } from "../components/ProductCard";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";

export interface Product {
  id: number | string;
  img?: string;
  title: string;
}



export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (amount: number) => void;
}

export interface ProductCardHOCProps {
  (props: ProductCardProps):ReactElement,
  Buttons: (props:ProductButtonsProps) => JSX.Element
  Image:( props : ProductImageProps) => JSX.Element,
  Title: (props: ProductTitleProps) => JSX.Element,
}
