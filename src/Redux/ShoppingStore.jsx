import { configureStore } from '@reduxjs/toolkit'
import ShoppingSlice from './ShoppingSlice';

export default configureStore({
  reducer: {
    shopping: ShoppingSlice,
  },
});