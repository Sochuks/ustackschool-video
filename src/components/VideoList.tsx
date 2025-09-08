import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from "../store";
import { deleteVideo, setCurrentVideo } from "../store/slices/videoSlice";
import type { Video } from "../types";
import { memo } from 'react';


const VideoList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    // Get current Video ID & Videos from state
    const currentVideoID = useSelector((state: RootState) => state.videos.currentVideoID )
    const videos = useSelector((state: RootState) => state.videos.allVideos);

    // Handle watch button
    const handleWatch = (id: string) => {
        dispatch(setCurrentVideo(id));
    }

    // Handle delete button
    const handleDelete = (id: string) => {
        dispatch(deleteVideo(id));
    };

    return (
        <div className="w-full mx-auto space-y-4">
            <h3 className="subtitle font-semibold text-[var(--color-secondary)] mb-4">
                Video Library
            </h3>
            {videos.length === 0 && <p className='bg-[var(--color-background)] rounded-md text-black text-center'>No videos available.</p>}
            {videos.map((video: Video) => (
                <div key={video.id} className={`flex items-center justify-between p-2 rounded-t-md border-b border-[#4c4664] group hover:bg-gray-200 hover:cursor-pointer ${
            video.id === currentVideoID ? 'bg-gray-200' : ''
          }`}>
                    <div className='flex-1 space-y-2' >
                        <h4 className="text-lg text-black group-hover:text-[var(--color-primary)]">{video.title}</h4>
                        <p className='small text-gray-700 line-clamp-2'>{video.description}</p>
                    </div>


                    <div className="flex flex-col gap-2 ml-2">
                        <button
                            className="btn-primary flex items-center justify-between gap-1 px-1 pr-2 group-hover:bg-white"
                            onClick={() => handleWatch(video.id)}
                            aria-label={`Watch video: ${video.title}`}
                        >
                            <span className="shrink-0 rounded-full py-1.5 px-2 bg-white text-indigo-600 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span className="text-white pt-1 transition-colors group-hover:text-[var(--color-primary)]">
                                Watch
                            </span>
                        </button>
                        <button
                            className="btn-secondary group flex items-center justify-between gap-1 group-hover:bg-red-600"
                            onClick={() => handleDelete(video.id)}
                            aria-label={`Watch video: ${video.title}`}
                        >   
                            <span className="shrink-0 py-1.5 px-2 text-red-600 group-hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span className="text-red-600 pt-1 pr-1 transition-colors group-hover:text-white">
                                Delete
                            </span>
                        </button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default memo(VideoList)