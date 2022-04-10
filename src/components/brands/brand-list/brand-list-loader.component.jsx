import React from 'react';
import { StyleSheet, View } from 'react-native';

const BrandListLoader = () => (
  <View style={styles.brandListLoader}>
    <View style={styles.brandLoader} />
    <View style={styles.brandLoader} />
    <View style={styles.brandLoader} />
    <View style={styles.brandLoader} />
  </View>
);

const styles = StyleSheet.create({
  brandListLoader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  brandLoader: {
    width: 50,
    height: 50,
    backgroundColor: '#D0D0D0',
  },
});

export default BrandListLoader;
