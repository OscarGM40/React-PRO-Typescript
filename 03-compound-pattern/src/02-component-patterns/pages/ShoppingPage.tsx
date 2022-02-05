import { useState } from "react";
import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components";
import { Product } from "../interfaces/interfaces";

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

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // console.log("onProductCountChange", { count, product });

    /* recuerda que no puedo hacer esto pues muto el useState*/
    // NOTA:la única forma de mutar debe ser mediante el setter
    //  shoppingCart[product.id] = { ...product, count };

    /* la solucion es bien fácil,y es creando una copia */
    const newShoppingCart = { ...shoppingCart };

    newShoppingCart[product.id] = { ...product, count };
    if (count === 0) {
      delete newShoppingCart[product.id];
    }
    setShoppingCart(newShoppingCart);
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
            onChange={(e) => onProductCountChange(e)}
            value={shoppingCart[product.id]?.count}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-custom" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-cart">
          {Object.values(shoppingCart).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark"
              style={{ width: "120px" }}
              onChange={(e) => onProductCountChange(e) }
              value={product.count}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          ))}
        </div>

        <div>
          <code>{JSON.stringify(shoppingCart, null, 5)}</code>
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
