// @ts-nocheck
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';

import { product2 } from '../data/products';
/* renderer me proporciona el método act,importante */
const { act } = renderer;

describe('Pruebas en ProductCard', () => {
  it('debe de mostrar el componente correctamente,pasandole el product y los children', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <h1>Product card</h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product card</h1>
            <h2>{count}</h2>
            <button onClick={() => increaseBy(2)}></button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();
    // console.log(tree);
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
      console.log(wrapper.toJSON().children[1].children[0]);
    });
    
    tree = wrapper.toJSON();
    /* da fallo por alguna razón */
    expect((tree as any).children[1].children[0]).toBe("0");
  });
});
