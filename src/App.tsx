import { useSelector} from 'react-redux';
// import { setCurrentVideo } from './store/slices/VideoSlice';
import VideoPlayer from './components/VideoPlayer';
import type { RootState } from './store';
import VideoList from './components/VideoList';
import AddVideoForm from './components/AddVideoForm';

function App() {
  // Get current Video ID from state
  const currentVideoID = useSelector((state: RootState) => state.videos.currentVideoID )
  
  // Get Selected Video
  const selectedVideo = useSelector((state: RootState) => 
    state.videos.allVideos.find((video) => video.id === currentVideoID)
  );

  // Get Youtube Video ID
  const getYouTubeVideoID = (url: string): string | null =>{
    // Match common YouTube URL formats
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  const videoId = selectedVideo ? getYouTubeVideoID(selectedVideo.url) : null; 
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
          {/* Alert to show error */}
          {videoId === null && currentVideoID !== null && (
            <p>Invalid Yotube URL for seleted video</p>
          )}
          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Video Column */}
            <div className="rounded bg-gray-300 lg:col-span-2">
              <VideoPlayer videoID={videoId} />
            </div>

            {/* Video List */}
            <div className="rounded bg-gray-300">
              <VideoList />
            </div>
          </div>

          {/* Form */}
          <AddVideoForm />
        </main>
      </div>
    </>
  )
}

export default App
