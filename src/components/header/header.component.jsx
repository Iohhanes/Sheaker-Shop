import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Sneaker Shop</Text>
      <Image style={styles.searchIcon} source={require('../../../assets/icons/search-icon.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: 32,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
});

export default Header;
