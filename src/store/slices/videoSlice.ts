import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {Video} from "../../types";

interface VideosState {
    allVideos: Video[];
    currentVideoID: string | null;
}

// // Save video to local storage
// const saveVideos = (videos: Video[]) => {
//   localStorage.setItem('videos', JSON.stringify(videos));
// };

const initialState: VideosState = {
    allVideos: [
        {
            id: 'test-video-1',
            title: 'You Need to Be Bored.',
            url: 'https://www.youtube.com/watch?v=orQKfIXMiA8',
            description: 'Boredom isnt a bug—its a feature. Harvard professor Arthur C. Brooks explains why boredom unlocks creativity, activates a powerful brain network, and might even protect you from depression. Learn how the mind wanders—and why thats a very good thing.',
        },
          {
            id: 'test-video-2',
            title: 'The Best Way to Give a Presentation',
            url: 'https://youtu.be/1sOgYNgq88E',
            description: 'This is episode 4 of the animated series, “Public Speaking 101.” Ideas change everything —  and since language lets us share our ideas, learning how to use it well gives speakers the power to inspire people and even change how they think. This 11-episode course will teach you how to identify, develop, and share your best ideas, while mastering essential communication skills along the way.',
        },
        {
            id: 'test-video-3',
            title: 'Sam Altmans Method for Clear Thinking',
            url: 'https://youtu.be/tDmjz6HB-yw',
            description: 'As one of todays most successful entrepreneurs, Sam champions the tremendous value of writing: how it clarifies your thinking, expands your ideas, and levels-up your life in every sense, both personally and professionally. Plus, he has a love for the creative. (Have you ever met someone who can recite Percy Bysshe Shelley poems from memory? Well, Sam can.)',
        },
        {
            id: 'test-video-4',
            title: 'How to Livestream on YouTube',
            url: 'https://www.youtube.com/watch?v=BSz5a5ryc-k',
            description: 'Here is how to live stream on YouTube! We will cover the easiest way to go live and work up to more advanced live stream software so you can become a YouTube live streaming PRO. ',
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