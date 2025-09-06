import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addVideo } from "../store/slices/videoSlice";
import type { Video } from "../types";

const AddVideoForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [error, setError] = useState<string | null>(null);

    const dispatch = useDispatch();

    // Validate YouTube URL
    const validateYoutubeURL = (url: string): boolean =>{
        const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        return regex.test(url);
    }

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();

        // Basic form validtion to cheeck for empty fields and YouTube URL
        if(!title || !url){
            setError('All Fields are required!');
            return;
        }
        if(!validateYoutubeURL(url)){
            setError('Please enter a valid YouTube URL (e.g., https://www.youtube.com/watch?v=...)');
            return;
        }

        // Dispatch form video details
        dispatch(addVideo({title, url, thumbnail}));
        // Reset form
        setTitle('');
        setUrl('');
        setThumbnail('');
        setError(null);
    }
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mb-6">
      <h2 className="text-xl font-semibold text-edtech-blue mb-4">
        Add a New Video
      </h2>
      <form onSubmit={handleSubmit} className="sapce-y-4">
        <div>
            <label 
                htmlFor="title"
                className='block text-sm font-medium text-gray-700'>Video Title</label>
            <input 
                type="text" 
                id="title" 
                value={title}
                onChange = {(e)=> setTitle(e.target.value)}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Enter Video Title' />
        </div>
        <div>
            <label 
                htmlFor="thumbnail"
                className='block text-sm font-medium text-gray-700'>Video Thumbnail</label>
            <input 
                type="text" 
                id="title" 
                value={thumbnail}
                onChange = {(e)=> setThumbnail(e.target.value)}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Enter Video Title' />
        </div>
        <div>
            <label 
                htmlFor="url"
                className='block text-sm font-medium text-gray-700'>YouTube URL</label>
            <input 
                type="text" 
                id="title" 
                value={url}
                onChange = {(e)=> setUrl(e.target.value)}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='https://www.youtube.com/watch?v=...' />
        </div>
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Video
        </button>
      </form>

    </div>
  )
}

export default AddVideoForm