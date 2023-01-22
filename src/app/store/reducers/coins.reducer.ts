import { createReducer, on } from '@ngrx/store';
import { GetCoinsRes } from 'src/app/shared/services/api.service';
import { getCoinsAction, getCoinsActionSuccess } from '../actions/coins.actions';

export const initialState: GetCoinsRes = {} as GetCoinsRes;

export const coinsReducer = createReducer(
  initialState,
  on(getCoinsAction, (state) => state),
  on(getCoinsActionSuccess, (state, data: any) => {
    return {
      ...state,
      ...data.payload
    }
  }),
);
