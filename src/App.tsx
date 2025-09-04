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
          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Video Column */}
            <div className="h-32 rounded bg-gray-300 lg:col-span-2">
              <VideoPlayer videoID={videoId} />
            </div>
            
            {/* Video List */}
            <div className="h-32 rounded bg-gray-300"></div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
