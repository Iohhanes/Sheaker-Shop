import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View, Pressable } from 'react-native';

const Brand = ({ icon, selected, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.brand}>
        <Image style={selected ? styles.selectedBrand : styles.brandIcon} source={icon} />
      </View>
    </Pressable>
  );
};

Brand.propTypes = {
  icon: PropTypes.number.isRequired,
  active: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  selectedBrand: {
    height: 75,
    width: 75,
  },
  brand: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 12,
  },
  brandIcon: {
    width: 50,
    height: 50,
  },
});

export default Brand;
