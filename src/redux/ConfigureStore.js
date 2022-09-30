import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/DoctorListReducer';
import register from './user/RegisterLoginSlice';

function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem('store', serializedStore);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem('store');
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    doctors: doctorReducer,

    user: register,
  },
  persistedState,
});
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
