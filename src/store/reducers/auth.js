import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  signup: {
    loaded: false,
    success: false,
  },
  login: {
    loaded: false,
    success: false,
    message: null,
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    registerRequest(state) {
      state.signup.loaded = false;
      state.signup.success = false;
    },
    registerSuccess(state) {
      state.signup.loaded = true;
      state.signup.success = true;
    },
    registerFailure(state) {
      (state.signup.loaded = true), (state.signup.success = false);
    },
    loginRequest(state) {
      state.login.loaded = false;
      state.login.success = false;
    },
    loginSuccess(state) {
      state.login.loaded = true;
      state.login.success = true;
    },
    loginFailure(state, action) {
      state.login.loaded = true;
      state.login.success = false;
      state.login.message = action.payload;
    },
  },
});
export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} = authSlice.actions;
export default authSlice.reducer;
