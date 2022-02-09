import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components";
import { products } from "../data/products";

const product = products[0];

// EStructura de la data que usaremos
//  { '1': { ...product1, count:10},
//  { '2': { ...product2, count:3} }
export const ShoppingPage = () => {
  
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard 
         key={product.id}
         product={product}
         initialValues={{
           count:4,
           maxCount:10
          }}
         >
           {
             (args) => (
             <>
              <ProductImage  />
              <ProductTitle  />
              <ProductButtons  />
              <button onClick={ args.reset }>Reset</button>
              <button onClick={() => args.increaseBy(-2)}>-2</button>

              { !args.isMaxCountReached  && <button
                onClick={() => args.increaseBy(2) }
              >+2</button>}

              <span>{args.count} - {args.maxCount }</span>
             </>
             )
           }
      </ProductCard>
    </div>
  );
};
