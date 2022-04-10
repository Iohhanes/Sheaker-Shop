import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import SearchBarContainer from './search-bar/search-bar.container';

const searchIcon = require('../../../assets/icons/search-icon.png');

const Header = ({ showSearchBar, onOpenSearchBar, onCloseSearchBar }) => (
  <View style={styles.headerContainer}>
    {showSearchBar ? (
      <View style={styles.headerSearchBarContainer}>
        <SearchBarContainer onClose={onCloseSearchBar} closeButtonTitle="Back" />
      </View>
    ) : (
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Sneaker Shop</Text>
        <Pressable onPress={onOpenSearchBar}>
          <Image style={styles.searchIcon} source={searchIcon} />
        </Pressable>
      </View>
    )}
  </View>
);

Header.propTypes = {
  showSearchBar: PropTypes.bool.isRequired,
  onOpenSearchBar: PropTypes.func.isRequired,
  onCloseSearchBar: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
    zIndex: 1,
  },
  headerSearchBarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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
