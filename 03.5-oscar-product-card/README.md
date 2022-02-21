# Oscar-Product-Card
___
Este es un paquete para pruebas de despliegues a NPM usando TsDx

### ***Author:*** Oscar Gonzalez

#### Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'oscar-product-card-react-ts';
```

```
      <ProductCard 
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
```