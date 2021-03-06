import { createAction } from 'redux-act';
import {defaultColors} from "../../Settings"

export const ONCHANGE = createAction('ONCHANGE');


const defaultColorsSet = (mode) => {
  let root = document.documentElement;
  defaultColors.forEach(doc=>{
    root.style.setProperty(doc.name, doc.value);
  })
}


export const onChange = (name, value) => {
    return async (dispatch, getState) => {
        dispatch(ONCHANGE({[name]:value}));
    };
};

export const searchData = (perPage) => {
    return async (dispatch, getState) => {
    };
};

export { defaultColorsSet };
