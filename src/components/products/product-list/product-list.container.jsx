import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './product-list.component';
import { selectLoading, selectProductsIds } from '../../../store/products/products.selectors';
import ProductListLoader from './product-list-loader.component';

const ProductListContainer = () => {
  const ids = useSelector(selectProductsIds);
  const loading = useSelector(selectLoading);

  return loading ? <ProductListLoader /> : <ProductList ids={ids} />;
};

export default React.memo(ProductListContainer);
