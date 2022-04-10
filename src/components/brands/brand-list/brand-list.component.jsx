import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, View } from 'react-native';
import BrandContainer from '../brand.container';

const BrandList = ({ ids, active }) => (
  <View style={styles.brands}>
    <ScrollView horizontal>
      {ids.map((id) => (
        <View key={id}>
          <BrandContainer id={id} active={active} />
        </View>
      ))}
    </ScrollView>
  </View>
);

BrandList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string,
};

const styles = StyleSheet.create({
  brands: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BrandList;
