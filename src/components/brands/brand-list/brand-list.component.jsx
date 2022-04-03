import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, View } from 'react-native';
import BrandContainer from '../brand.container';
import BrandListLoader from './brand-list-loader.component';

const BrandList = ({ ids, active }) => {
  return (
    <View style={styles.brands}>
      <ScrollView horizontal={true}>
        {ids.map((id) => {
          return (
            <View key={id}>
              <BrandContainer id={id} active={active} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

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
