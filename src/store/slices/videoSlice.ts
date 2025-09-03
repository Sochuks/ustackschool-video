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
        deleteVideo: (state, action: PayloadAction<string>) =>{
            state.allVideos.filter(video => video.id !== action.payload);
            if(state.currentVideoID === action.payload){
                state.currentVideoID = null;
            }
        },

        setCurrentVideo: (state, action:PayloadAction<string>)=>{
            state.currentVideoID = action.payload;
        },
    }
});

export const {addVideo, deleteVideo, setCurrentVideo} = videoSlice.actions;
export default videoSlice.reducer;