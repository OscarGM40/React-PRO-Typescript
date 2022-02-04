import { useState } from "react";
import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components";
import { onChangeArgs, Product } from "../interfaces/interfaces";

import "../styles/custom-styles.css";

const product1 = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  // el state luce asi: { '1': { ...product1, count:10}, '2': { ...product1, count:10} }
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({count,product}:{count:number,product:Product}) => {
    console.log("onProductCountChange", {count,product});
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={ (evento) => onProductCountChange(evento)}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-custom" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-cart">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark"
              style={{ width: "120px" }}
              onChange={() => onProductCountChange()}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))}
        </div>

        {/* forma sin control de propiedades secciones 5 y 6 */}
        {/*   <ProductCard product={product1} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title
            title="Hola Compound"
            className="text-white text-custom"
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product2} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-custom" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product1} style={{
          backgroundColor: "#70D1f8",
        }} >
          <ProductImage style={{
            backgroundColor: "#05374b",
            padding: "10px",
            width: "calc(100% - 20px)",
            borderRadius: "10px",
          }}/>
          <ProductTitle  style={{
            letterSpacing: "3px",
            fontStyle: "italic",
            color: "#ecb4b4",
          }}/>
          <ProductButtons />
        </ProductCard> */}
      </div>
    </div>
  );
};
