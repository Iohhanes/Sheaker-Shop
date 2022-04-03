import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, View } from 'react-native';
import ProductContainer from '../product.container';

const ProductList = ({ ids }) => {
  return (
    <View style={styles.productsContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.products}>
          {ids.map((id) => {
            return (
              <View key={id}>
                <ProductContainer id={id} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

ProductList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const styles = StyleSheet.create({
  productsContainer: {
    flex: 6,
  },
  products: {
    marginHorizontal: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductList;
