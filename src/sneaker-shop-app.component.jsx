import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import BrandListContainer from './components/brands/brand-list/brand-list.container';
import { loadBrands, setActive } from './store/brands/brands.slice';
import { useDispatch } from 'react-redux';
import ProductListContainer from './components/products/product-list/product-list.container';
import { loadProductsByBrand } from './store/products/products.slice';
import HeaderContainer from './components/header/header.container';

const SneakersShopApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBrands()).then((result) => {
      if (result.payload?.ids && result.payload.ids.length) {
        const firstId = result.payload?.ids[0];
        dispatch(setActive(firstId));
        dispatch(loadProductsByBrand(firstId));
      }
    });
  }, []);

  return (
    <View style={styles.body}>
      <HeaderContainer />
      <BrandListContainer />
      <ProductListContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SneakersShopApp;
