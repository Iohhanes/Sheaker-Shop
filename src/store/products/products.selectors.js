import { productsAdapter } from './products.adapters';

const { selectIds, selectById } = productsAdapter.getSelectors();

const productsSelector = (selector) => (state) => selector(state.products);

export const selectLoading = productsSelector((state) => state.loading);

export const selectProductsIds = productsSelector((state) => selectIds(state.current));
export const selectProductById = (id) => productsSelector((state) => selectById(state.current, id));
