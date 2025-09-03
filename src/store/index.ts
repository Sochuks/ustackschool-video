import { configureStore } from "@reduxjs/toolkit";
import videosReducer from './slices/VideoSlice';

// Create redux store to combine reducers
const store = configureStore({
    reducer:{
        videos: videosReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;