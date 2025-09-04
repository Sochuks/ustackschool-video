import { useSelector, useDispatch } from 'react-redux';
// import { setCurrentVideo } from './store/slices/VideoSlice';
import VideoPlayer from './components/VideoPlayer';
import type { RootState, AppDispatch } from './store';

function App() {
 
  const dispatch = useDispatch();
  const currentVideoID = useSelector((state: RootState) => state.videos.currentVideoID )
  
  const selectedVideo = useSelector((state: RootState) => 
    state.videos.allVideos.find((video) => video.id === currentVideoID)
  );

  const videoId = selectedVideo
  ? selectedVideo.url.match(/v=([^&]+)/)?.[1] || selectedVideo.url.split('/').pop() || null
  : null; 
  return (
    <>
      {/* Body Container */}
      <div className='min-h-screen bg-gray-100 flex flex-col items-center py-8'>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-edtech-blue">
            UstackSchool Video Learner
          </h1>
        </header>
        <main className='w-full max-w-5xl space-y-8'>
          <VideoPlayer videoID={videoId} />
        </main>
      </div>
    </>
  )
}

export default App
