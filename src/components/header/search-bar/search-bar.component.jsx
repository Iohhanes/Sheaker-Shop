import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Pressable, Text, Image, FlatList, StyleSheet } from 'react-native';

const searchIcon = require('../../../../assets/icons/search-icon.png');
const clearIcon = require('../../../../assets/icons/clear-icon.png');

const SearchBar = ({
  showSuggestions = false,
  searchValue,
  onChangeSearchValue = () => {},
  onBlur = () => {},
  onFocus = () => {},
  suggestions,
  onClose = () => {},
  closeButtonTitle,
}) => {
  const suggestionsViewRef = useRef();

  const handleClearSearchInput = useCallback(() => {
    onChangeSearchValue('');
  }, [onChangeSearchValue]);

  const handleLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    suggestionsViewRef.current?.setNativeProps({ width, top: height });
  }, []);

  const rednerFlatListItem = ({ item }) => (
    <View style={styles.suggestionsItemContainer}>
      <Image style={styles.searchIcon} source={searchIcon} />
      <Text style={styles.searchText}>{item.title}</Text>
      <View style={styles.searchIcon} />
    </View>
  );

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarInputContainer}>
        <View
          style={[styles.searchBar, showSuggestions && styles.searchBarWithSuggestions]}
          onLayout={handleLayout}
        >
          <Image style={styles.searchIcon} source={searchIcon} />
          <TextInput
            style={[styles.searchText, showSuggestions && styles.searchTextWithBorder]}
            placeholder="Search"
            autoFocus
            onBlur={onBlur}
            onFocus={onFocus}
            value={searchValue}
            onChangeText={onChangeSearchValue}
          />
          <Pressable onPress={handleClearSearchInput}>
            <Image style={styles.clearIcon} source={clearIcon} />
          </Pressable>
        </View>
        {showSuggestions && (
          <View ref={suggestionsViewRef} style={styles.suggestionsContainer}>
            <FlatList
              data={suggestions}
              renderItem={rednerFlatListItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>
      <View>
        <Pressable onPress={onClose}>
          <Text style={styles.closeButtonTitle}>{closeButtonTitle}</Text>
        </Pressable>
      </View>
    </View>
  );
};

SearchBar.propTypes = {
  showSuggestions: PropTypes.bool,
  searchValue: PropTypes.string,
  onChangeSearchValue: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  onClose: PropTypes.func,
  closeButtonTitle: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
  },
  searchBarInputContainer: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#D0D0D0',
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: 10,
  },
  searchBarWithSuggestions: {
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    borderBottomWidth: 0,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchText: {
    fontSize: 25,
    width: '80%',
  },
  searchTextWithBorder: {
    borderBottomWidth: 1,
  },
  clearIcon: {
    width: 20,
    height: 20,
  },
  closeButtonTitle: {
    fontSize: 25,
  },
  suggestionsContainer: {
    marginRight: 10,
    backgroundColor: '#D0D0D0',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    borderWidth: 1,
    borderTopWidth: 0,
    position: 'absolute',
  },
  suggestionsItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default SearchBar;
