import { brandsAdapter } from './brands.adapters';

const { selectIds, selectById } = brandsAdapter.getSelectors();

const brandsSelector = (selector) => (state) => selector(state.brands);

export const selectLoading = brandsSelector((state) => state.loading);

export const selectBrandsIds = brandsSelector((state) => selectIds(state.data));

export const selectBrandById = (id) => brandsSelector((state) => selectById(state.data, id));

export const selectActiveBrand = brandsSelector((state) => state.active);
