import React from 'react';
import BrandList from './brand-list.component';
import { useSelector } from 'react-redux';
import {
  selectActiveBrand,
  selectBrandsIds,
  selectLoading,
} from '../../../store/brands/brands.selectors';
import BrandListLoader from './brand-list-loader.component';

const BrandListContainer = () => {
  const ids = useSelector(selectBrandsIds);
  const active = useSelector(selectActiveBrand);
  const loading = useSelector(selectLoading);

  return loading ? <BrandListLoader /> : <BrandList ids={ids} active={active} />;
};

export default BrandListContainer;
