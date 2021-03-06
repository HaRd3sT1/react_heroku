import { createReducer } from 'redux-act';

import {
  ONCHANGE
} from '../actions/dashboard';
const initialState = {};

const dashobard = createReducer(
  {
    [ONCHANGE]: (state, payload) => {
        return ({ 
            ...state,
            ...payload
        })
    }
  },
  initialState
);

export default dashobard
