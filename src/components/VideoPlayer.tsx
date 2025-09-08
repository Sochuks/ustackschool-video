import YouTube, {type YouTubeProps} from "react-youtube";
import { memo, useState, useEffect } from 'react';


interface VideoPlayerProps {
    videoID: string | null;
    title?: string;
    description?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({videoID, title, description}) => {
    const [loading, setLoading] = useState<boolean>(videoID !== null);
      const [error, setError] = useState<string | null>(null);

    //  // Debug logs
    // console.log('VideoPlayer: videoID=', videoID);

    // react-youtube player options
    const options: YouTubeProps['opts'] = {
        height:'100%',
        width: '100%',
        playerVars: {
        autoplay: 0, 
        },
    };

    const onReady: YouTubeProps['onReady'] = (event)=>{
        console.log('Video Player is Ready!', event.target);
        setLoading(false);
        setError(null)
    };

    const onStateChange: YouTubeProps['onStateChange'] = (event) =>{
        // Player states: -1 (unstarted), 3 (buffering), 1 (playing), etc.
        if (event.data === 1 || event.data === 2) {
            // Playing or Paused
            if (loading) {
                setLoading(false);
                setError(null);
        }
        } else if (event.data === 3 && !loading) {
        // Buffering (only set loading if not already loading)
        setLoading(true);
        }
    };
    
    const onError: YouTubeProps['onError'] = (event) => {
    setLoading(false);
    const errorMessages: Record<number, string> = {
      2: 'Invalid video ID.',
      5: 'HTML5 player error.',
      100: 'Video not found.',
      101: 'Video not allowed for embedding.',
      150: 'Video not allowed for embedding.',
    };
    setError(errorMessages[event.data] || 'Failed to load video. Please check the video ID or try another video.');
    };

    // Fallback timeout to prevent infinite spinner
    useEffect(() => {
        if (loading && videoID) {
            const timeout = setTimeout(() => {
            setLoading(false)
            setError('Video loading timed out. Try another video.')
        }, 15000)
        return () => clearTimeout(timeout)
        }
    }, [loading, videoID])

    if (!videoID ){
        return(
            <div className="bg-[var(--color-background)] rounded-md text-black text-center p-8">
                <p className="text-lg">Add a video to the playlist</p>
            </div>
        );
    }

      if (error) {
        return (
        <div className="bg-[var(--color-background)] rounded-md text-red-600 text-center p-8">
            <p className="text-lg">{error}</p>
        </div>
        );
    }

    return (
        <div className="space-y-2 sm:space-y-4">
            {/* Player */}
            <div className="relative w-full max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto shadow-lg rounded-md mb-4 sm:mb-6 lg:mb-10 aspect-video">
                <YouTube
                    videoId={videoID}
                    opts={options}
                    onReady={onReady}
                    onStateChange={onStateChange}
                    onError={onError}
                    className="w-full h-full"
                />

                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200/80">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-4 border-[var(--color-primary)]"></div>
                    <span className="sr-only">Loading video...</span>
                    </div>
                )}

            </div>
        {/* Description */}
        {!loading && (
            <div className="w-full max-w-full sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-0 space-y-1 sm:space-y-2">
            <h3 className="subtitle font-semibold text-[var(--color-secondary)]">
                {title || 'Untitled Video'}
            </h3>
            <p className="caption text-gray-700">{description}</p>
            </div>
        )}
        </div>

  );
}

export default memo(VideoPlayer);