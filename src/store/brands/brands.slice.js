import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import sneakersApi from '../../http/sneakers.axios';
import { brandsAdapter } from './brands.adapters';

const initialState = {
  data: brandsAdapter.getInitialState(),
  loading: false,
  active: undefined,
};

export const loadBrands = createAsyncThunk('brands/load', async () => {
  const { data } = await sneakersApi.get(`/api/brands`);
  return data;
});

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadBrands.fulfilled, (state, action) => {
      brandsAdapter.addMany(state.data, action.payload.entities);
      state.loading = false;
    });
    builder.addMatcher(isAnyOf(loadBrands.rejected, loadBrands.pending), (state) => {
      state.loading = true;
    });
  },
});

export const { setActive } = brandsSlice.actions;

export default brandsSlice.reducer;
