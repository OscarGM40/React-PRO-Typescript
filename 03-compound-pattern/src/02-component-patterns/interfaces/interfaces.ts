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
  maxCount?: number;
}

export interface ProductCardHOCProps {
  (props: ProductCardProps):ReactElement,
  Buttons: (props:ProductButtonsProps) => JSX.Element
  Image:( props : ProductImageProps) => JSX.Element,
  Title: (props: ProductTitleProps) => JSX.Element,
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;

}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached:boolean;
  maxCount?: number;
  product: Product;
  
  increaseBy: ( value: number ) => void;
  reset: () => void;
}



