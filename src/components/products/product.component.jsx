import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, Text, View } from 'react-native';

const Product = ({ title, image, price }) => {
  return (
    <View style={styles.product}>
      <View style={styles.productImageContainer}>
        <Image style={styles.productImage} source={image} />
      </View>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>{price + ' $'}</Text>
    </View>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  product: {
    marginBottom: 10,
  },
  productImageContainer: {
    backgroundColor: '#D0D0D0',
    marginBottom: 5,
    borderRadius: 7,
  },
  productImage: {
    width: 100,
    height: 100,
    margin: 25,
  },
  productTitle: {
    fontWeight: '700',
  },
  productPrice: {
    color: '#D0D0D0',
  },
});

export default Product;
