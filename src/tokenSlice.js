import { createSlice } from '@reduxjs/toolkit';

const tryAtob = (str) => {
  try {
    return atob(str);
  } catch (e) {
    return null;
  }
}

const tryParse = (str) => {
  if (!str) {
    return null;
  }

  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}

const reduceCallback = (a, e, i) => {
  switch (i) {
    case 0:
      return Object.assign(a, { header: e })
    case 1:
      return Object.assign(a, { payload: e })
    default:
      return a;
  }
}

const toStateObj = (token) => {
  return token.split(".").slice(0, 2)
    .map(tryAtob)
    .map(tryParse)
    .reduce(reduceCallback, { token, heade: null, payload: null });
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '',
    header: null,
    payload: null,
  },
  reducers: {
    decode: (state, action) => {
      Object.assign(state, toStateObj(action.payload));
    },
  },
});

export const { decode } = tokenSlice.actions;

export default tokenSlice.reducer;