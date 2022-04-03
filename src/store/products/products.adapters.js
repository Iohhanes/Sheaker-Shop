import { createEntityAdapter } from '@reduxjs/toolkit';

export const productsAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});
