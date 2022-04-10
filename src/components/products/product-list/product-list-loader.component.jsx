import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

const ProductListLoader = () => (
  <View style={styles.productListLoader}>
    <ActivityIndicator size="large" color="#D0D0D0" />
  </View>
);

const styles = StyleSheet.create({
  productListLoader: {
    flex: 6,
    justifyContent: 'center',
  },
});

export default ProductListLoader;
