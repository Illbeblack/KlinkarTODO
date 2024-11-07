import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type IRootState = ReturnType<typeof rootReducer>;

export interface IStore {
  id: string;
  title: any;
  desc: any;
}
