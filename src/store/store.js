import { configureStore } from '@reduxjs/toolkit';
import brandsReducer from './brands/brands.slice';
import productsReducer from './products/products.slice';

export const createStore = () =>
  configureStore({
    reducer: { brands: brandsReducer, products: productsReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export const store = createStore();
