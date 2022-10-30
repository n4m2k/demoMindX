
import userReducer from '../Auth/userSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
    user: userReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;