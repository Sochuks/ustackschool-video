import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {Video} from "../../types";

interface VideosState {
    allVideos: Video[];
    currentVideoID: string | null;
}

// Save video to local storage
const saveVideos = (videos: Video[]) => {
  localStorage.setItem('videos', JSON.stringify(videos));
};

const initialState: VideosState = {
    allVideos: [
        {
            id: 'test-video-1',
            title: 'The first Whack video',
            url: 'https://www.youtube.com/watch?v=kq6IhAZVNh8', // Rick Astley - Never Gonna Give You Up
            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
        },
          {
            id: 'live-stream-guide-1',
            title: 'How to Live Stream on YouTube (The COMPLETE 2025 Guide)',
            url: 'https://www.youtube.com/watch?v=Rdta45g_hg8',
            thumbnail: 'https://img.youtube.com/vi/Rdta45g_hg8/0.jpg',
        },
        {
            id: 'live-stream-beginners-2',
            title: 'How To LIVE STREAM On YouTube - UPDATED Beginners ...',
            url: 'https://www.youtube.com/watch?v=x9ZZS1v11Sc',
            thumbnail: 'https://img.youtube.com/vi/x9ZZS1v11Sc/0.jpg',
        },
        {
            id: 'live-stream-tutorial-3',
            title: 'How to LIVESTREAM on YouTube - UPDATED Beginners ...',
            url: 'https://www.youtube.com/watch?v=BSz5a5ryc-k',
            thumbnail: 'https://img.youtube.com/vi/BSz5a5ryc-k/0.jpg',
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
                state.currentVideoID = state.allVideos[0]?.id ?? null;
            }
        },

        setCurrentVideo: (state, action:PayloadAction<string>)=>{
            state.currentVideoID = action.payload;
        },
    }
});

export const {addVideo, deleteVideo, setCurrentVideo} = videoSlice.actions;
export default videoSlice.reducer;