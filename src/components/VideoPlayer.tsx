import YouTube from "react-youtube";
import { memo } from 'react';


interface VideoPlayerProps {
    videoID: string | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({videoID}) => {
    // react-youtube player options
    const options = {
        height: '420',
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
            <div className="bg-[var(--color-background)] rounded-md text-black text-center p-8">
                <p className="text-lg">Add a video to the playlist</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Player */}
            <div className="w-full max-w-4xl mx-auto shadow-lg rounded-md mb-10">
                <YouTube
                    videoId={videoID}
                    opts={options}
                    onReady={onReady}
                    className="aspect-video" // Maintain 16:9 ratio
                />
            </div>
        {/* Description */}
        <div className="space-y-2">
            <h3 className="subtitle font-semibold text-[var(--color-secondary)] mb-4">Description</h3>
            <p className="caption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere fugit asperiores odio qui rerum. Odio.</p>
        </div>
        </div>

  );
}

export default memo(VideoPlayer);