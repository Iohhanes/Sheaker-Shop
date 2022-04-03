import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectProductById } from '../../store/products/products.selectors';
import Product from './product.component';

const ProductContainer = ({ id }) => {
  const product = useSelector(selectProductById(id));

  return <Product title={product.title} image={product.image} price={product.price} />;
};

ProductContainer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default React.memo(ProductContainer);
