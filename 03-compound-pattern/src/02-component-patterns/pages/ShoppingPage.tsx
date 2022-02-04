import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components';

import '../styles/custom-styles.css';


const product = {
  id:'1',
  title:'Coffee Mug - Card',
  img:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

}

export const ShoppingPage = () => {
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
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title
            title="Hola Compound"
            className="text-white text-custom"
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-custom" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{
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
        </ProductCard>

      </div>
    </div>
  );
};
