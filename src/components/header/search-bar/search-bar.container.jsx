import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import { useDebounceEffect } from 'ahooks';
import SearchBar from './search-bar.component';
import sneakersApi from '../../../http/sneakers.axios';

const DEFAULT_SUGGESTIONS_MAX_COUNT = 7;
const DEFAULT_SEARCH_DELAY = 400;

const SearchBarContainer = ({ onClose, closeButtonTitle }) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChangeSearchValue = useCallback(
    (value) => {
      setSearchValue(value);
    },
    [setSearchValue]
  );

  useDebounceEffect(
    () => {
      if (searchValue?.length) {
        sneakersApi
          .get(
            `/api/products/search?searchValue=${searchValue.toLowerCase()}&range=${DEFAULT_SUGGESTIONS_MAX_COUNT}`
          )
          .then((result) => {
            setSuggestions(result.data);
          });
      } else {
        setSuggestions([]);
      }
    },
    [searchValue, setSuggestions],
    { wait: DEFAULT_SEARCH_DELAY }
  );

  const handleBlur = useCallback(() => {
    Keyboard.dismiss();
    setShowSuggestions(false);
  }, [setShowSuggestions]);

  const handleFocus = useCallback(() => {
    setShowSuggestions(true);
  }, [setShowSuggestions]);

  return (
    <SearchBar
      showSuggestions={showSuggestions && suggestions.length > 0}
      searchValue={searchValue}
      onChangeSearchValue={handleChangeSearchValue}
      onBlur={handleBlur}
      onFocus={handleFocus}
      suggestions={suggestions}
      onClose={onClose}
      closeButtonTitle={closeButtonTitle}
    />
  );
};

SearchBarContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
  closeButtonTitle: PropTypes.string.isRequired,
};

export default React.memo(SearchBarContainer);
