// @ts-nocheck
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';

import { product2 } from '../data/products';

describe('Pruebas en ProductImage', () => {
  it('debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductImage img="https://imagen.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
    // console.log(wrapper.toJSON());
  });

  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
    // console.log(wrapper.toJSON());
  });
});
