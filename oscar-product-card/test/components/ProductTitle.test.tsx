// @ts-nocheck
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';

import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';

describe('Pruebas en ProductTitle', () => {
  it('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    /* no usaremos enzyme,sino react-test-renderer */
    const wrapper = renderer.create(<ProductTitle title="Custom Title" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    
    const wrapper = renderer.create(
    <ProductCard product={product1} >
      { () => (
        <ProductTitle />
      
        )
      }
    </ProductCard>
      );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
