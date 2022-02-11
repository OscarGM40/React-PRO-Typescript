import './App.css';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "oscar-product-card-react-ts";

const product = {
  id: "1",
  title: "Coffee Mug - Sin Imagen",
  img: './coffee-mug.png',
};

function App() {
  return (
    <div className="App">
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {(args) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            <button onClick={args.reset}>Reset</button>
            <button onClick={() => args.increaseBy(-2)}>-2</button>

            {!args.isMaxCountReached && (
              <button onClick={() => args.increaseBy(2)}>+2</button>
            )}

            <span>
              {args.count} - {args.maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default App;
