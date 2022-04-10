import React, { useCallback, useState } from 'react';
import Header from './header.component';

const HeaderContainer = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleOpenSearhBar = useCallback(() => {
    setShowSearchBar(true);
  }, [setShowSearchBar]);

  const handleCloseSearhBar = useCallback(() => {
    setShowSearchBar(false);
  }, [setShowSearchBar]);

  return (
    <Header
      showSearchBar={showSearchBar}
      onOpenSearchBar={handleOpenSearhBar}
      onCloseSearchBar={handleCloseSearhBar}
    />
  );
};

export default HeaderContainer;
