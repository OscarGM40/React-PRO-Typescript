import { ProductButtons, ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components';

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
       <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title="Hola Compound"/>
          <ProductCard.Buttons />
        </ProductCard> 

         <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
