import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductImage, ProductTitle } from '../.';
import { ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: 'coffee-mug.png',
};



const App = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {args => (
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
};

ReactDOM.render(<App />, document.getElementById('root'));
