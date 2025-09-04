import YouTube from "react-youtube";

interface VideoPlayerProps {
    videoID: string | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({videoID}) => {
    
    // react-youtube player options
    const options = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0, 
        },
    };

    const onReady = (event: {target:any})=>{
        console.log('Video Player is Ready!');
    };

    if (!videoID){
        return(
            <div className="text-black p-4">
                <p>Select a video to play</p>
            </div>
        );
    }

    return (
    <div className="w-full max-w-4xl mx-auto">
      <YouTube
        videoId={videoID}
        opts={options}
        onReady={onReady}
        className="aspect-video" // Maintain 16:9 ratio
      />
    </div>
  );
}

export default VideoPlayer;