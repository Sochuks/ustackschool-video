import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {Video} from "../../types";

interface VideosState {
    allVideos: Video[];
    currentVideoID: string | null;
}

const initialState: VideosState = {
    allVideos: [
        {
            id: 'test-video-1',
            title: 'The first Whack video',
            url: 'https://www.youtube.com/watch?v=kq6IhAZVNh8', // Rick Astley - Never Gonna Give You Up
            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
            durationSec: 212,
            views: 1000000000,
            createdAt: new Date().toISOString(),
        },
          {
            id: 'live-stream-guide-1',
            title: 'How to Live Stream on YouTube (The COMPLETE 2025 Guide)',
            url: 'https://www.youtube.com/watch?v=Rdta45g_hg8',
            thumbnail: 'https://img.youtube.com/vi/Rdta45g_hg8/0.jpg',
            durationSec: 1980, // Approx. 33 minutes
            views: 125000, // Estimated based on recent popularity
            createdAt: new Date('2025-09-02T10:00:00Z').toISOString(),
        },
        {
            id: 'live-stream-beginners-2',
            title: 'How To LIVE STREAM On YouTube - UPDATED Beginners ...',
            url: 'https://www.youtube.com/watch?v=x9ZZS1v11Sc',
            thumbnail: 'https://img.youtube.com/vi/x9ZZS1v11Sc/0.jpg',
            durationSec: 720, // Approx. 12 minutes
            views: 98000,
            createdAt: new Date('2024-02-29T08:00:00Z').toISOString(),
        },
        {
            id: 'live-stream-tutorial-3',
            title: 'How to LIVESTREAM on YouTube - UPDATED Beginners ...',
            url: 'https://www.youtube.com/watch?v=BSz5a5ryc-k',
            thumbnail: 'https://img.youtube.com/vi/BSz5a5ryc-k/0.jpg',
            durationSec: 900, // Approx. 15 minutes
            views: 210000,
            createdAt: new Date('2022-08-21T15:00:00Z').toISOString(),
        }


    ],
    currentVideoID: 'test-video-1',
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
           state.allVideos = state.allVideos.filter(video => video.id !== action.payload);
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