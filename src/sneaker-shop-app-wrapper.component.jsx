import React from 'react';
import { Provider } from 'react-redux';
import SneakersShopApp from './sneaker-shop-app.component';
import { store } from './store/store';
import { createSneakersServer } from '../server';

createSneakersServer();

const SneakersShopAppWrapper = () => {
  return (
    <Provider store={store}>
      <SneakersShopApp />
    </Provider>
  );
};

export default SneakersShopAppWrapper;
