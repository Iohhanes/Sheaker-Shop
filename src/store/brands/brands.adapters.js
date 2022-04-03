import { createEntityAdapter } from '@reduxjs/toolkit';

export const brandsAdapter = createEntityAdapter({
  selectId: (brand) => brand.id,
});
