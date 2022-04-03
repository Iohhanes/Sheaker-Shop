import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import sneakersApi from '../../http/sneakers.axios';
import { productsAdapter } from './products.adapters';

const initialState = {
  current: productsAdapter.getInitialState(),
  loading: false,
};

export const loadProductsByBrand = createAsyncThunk('products/loadByBrand', async (id) => {
  const { data } = await sneakersApi.get(`/api/products?brand=${id}`);
  return data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProductsByBrand.fulfilled, (state, action) => {
      productsAdapter.setAll(state.current, action.payload.entities);
      state.loading = false;
    });
    builder.addMatcher(
      isAnyOf(loadProductsByBrand.rejected, loadProductsByBrand.pending),
      (state) => {
        state.loading = true;
      }
    );
  },
});

export default productsSlice.reducer;
