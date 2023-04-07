import { configureStore } from '@reduxjs/toolkit';

import favouritesReducer from 'store/redux/favourites';

export const store = configureStore({ reducer: { favouriteMeals: favouritesReducer } });
