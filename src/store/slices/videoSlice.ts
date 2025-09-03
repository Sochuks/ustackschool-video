import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {Video} from "../../types";

interface VideosState {
    allVideos: Video[];
    currentVideoID: string | null;
}

const initialState: VideosState = {
    allVideos: [],
    currentVideoID: null,
};

const videoSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        addVideo: (state, action: PayloadAction<Omit<Video, 'id'>>)=>{
            const newVideo: Video = {
                id: Date.now().toString(),
                ...action.payload,
            }
            state.allVideos.push(newVideo);
        },
    }
});

export const {addVideo} = videoSlice.actions;
export default videoSlice.reducer;