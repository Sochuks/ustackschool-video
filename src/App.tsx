import { useSelector} from 'react-redux';
// import { setCurrentVideo } from './store/slices/VideoSlice';
import VideoPlayer from './components/VideoPlayer';
import type { RootState } from './store';
import VideoList from './components/VideoList';
import AddVideoForm from './components/AddVideoForm';
import NavBar from './components/NavBar';

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
      <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-300 flex flex-col py-8 px-4 sm:px-6 lg:px-8'>
        <header className="mb-8 border-b border-b-gray-300">
          <NavBar />
        </header>
        <main className='w-full max-w-6xl mx-auto space-y-8 lg:px-2'>
          {/* Title */}
          <div className=''>
            <h3 className="font-bold text-[var(--color-secondary)]">
              UstackSchool Video PlayList
            </h3>
            <p>Select video from playlist or link <a href="/#AddVideoForm" className='text-[var(--color-primary)] hover:text-indigo-900'>Add Video</a> to List</p>
          </div>
          
          {/* Alert to show error */}
          {videoId === null && currentVideoID !== null && (
          <p className="text-red-500 text-center text-sm sm:text-base animate-pulse">
            Invalid YouTube URL for selected video
          </p>
          )}
          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Video Column */}
            <div className="rounded-md lg:col-span-2">
              <VideoPlayer 
                  videoID={videoId}
                  title={selectedVideo?.title}
                  description={selectedVideo?.description}
               />
            </div>

            {/* Video List */}
            <div className="rounded-md p-4 bg-[var(--color-background)]">
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
