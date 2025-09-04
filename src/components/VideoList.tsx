import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from "../store";
import { deleteVideo, setCurrentVideo } from "../store/slices/VideoSlice";
import type { Video } from "../types";


const VideoList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const videos = useSelector((state: RootState) => state.videos.allVideos);

    // Handle watch button
    const handleWatch = (id: string) => {
        dispatch(setCurrentVideo(id));
    }

    // Handle delete button
    const handleDelete = (id: string)=>{
        dispatch(deleteVideo(id));
    };

  return (
    <div className="w-full mx-auto space-y-4">
        <h2 className="text-xl font-semibold text-edtech-blue mb-4">
            Video Library
        </h2>
        {videos.map((video: Video) => (
            <div className="flex items-center justify-between border-b hover:bg-gray-100">
                <h3 className="text-xl text-blue-500">{video.title}</h3>

                <div className="flex ">
                    <button
                        onClick={() => handleWatch(video.id)}
                        className="bg-edtech-blue text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
                        aria-label={`Watch video: ${video.title}`}
                    >
                        Watch
                    </button>
                    <button
                        onClick={() => handleDelete(video.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                        aria-label={`Delete video: ${video.title}`}
                    >
                        Delete
                    </button>
                </div>
            </div>
        ))}

    </div>
  )
}

export default VideoList