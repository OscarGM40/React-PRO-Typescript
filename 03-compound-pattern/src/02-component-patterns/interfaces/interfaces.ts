import { ReactElement } from "react";

export interface Product {
  id: number | string;
  title: string;
  img?: string;
}

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  increaseBy: (amount: number) => void;
}

export interface ProductCardHOCProps {
  ({children,product}: ProductCardProps):ReactElement,
  Title: ({ title }:{ title?: string }) => JSX.Element,
  Image:({ img }: { img?: string }) => JSX.Element,
  Buttons: () => JSX.Element
}
