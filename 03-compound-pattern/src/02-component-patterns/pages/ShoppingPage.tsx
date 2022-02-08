import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components";
import { products } from "../data/products";
// import { useShoppingCart } from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";

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
         className="bg-dark text-white"
         initialValues={{
           count:4,
           maxCount:10
          }}
         >
           {
             (args) => (
             <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-custom" />
              <ProductButtons className="custom-buttons" />
              <button onClick={ args.reset }>Reset</button>
              <button onClick={() => args.increaseBy(-2)}>-2</button>

              { !args.isMaxCountReached  && <button
                onClick={() => args.increaseBy(2) }
              >+2</button>}

              <span>{args.count} - {args.maxCount }</span>
              {/* {JSON.stringify(args, null, 2)} */}
             </>
             )
           }
      </ProductCard>
    </div>
  );
};
