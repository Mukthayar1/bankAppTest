import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './userReducer';
import homeReducer from './homeReducer';

const Reducer = combineReducers({ userReducer, homeReducer });

export type RootState = ReturnType<typeof Reducer>;

export default Reducer;