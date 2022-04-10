import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Brand from './brand.component';
import { selectBrandById } from '../../store/brands/brands.selectors';
import { setActive } from '../../store/brands/brands.slice';
import { loadProductsByBrand } from '../../store/products/products.slice';

const BrandContainer = ({ id, active }) => {
  const dispatch = useDispatch();

  const brand = useSelector(selectBrandById(id));

  const handlePress = useCallback(() => {
    dispatch(setActive(id));
    dispatch(loadProductsByBrand(id));
  }, [dispatch, id]);

  return <Brand onPress={handlePress} icon={brand.icon} selected={active === id} />;
};

BrandContainer.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.string,
};

export default React.memo(BrandContainer);
