import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addVideo } from "../store/slices/videoSlice";

const AddVideoForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    // Validate YouTube URL
    const validateYoutubeURL = (url: string): boolean =>{
        const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        return regex.test(url);
    }

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();

        // Basic form validtion for empty fields
        if(!title || !url){
            setError('Video title or URL is required!');
            setIsLoading(false);
            return;
        }
        if(!validateYoutubeURL(url)){
            setError('Please enter a valid YouTube URL (e.g., https://www.youtube.com/watch?v=...)');
            setIsLoading(false);
            return;
        }

        // Dispatch form video details
        dispatch(addVideo({title, url, description}));
        // Reset form
        setTitle('');
        setUrl('');
        setDescription('');
        setError(null);
        setIsLoading(false);
    }
  return (
    <div id="AddVideoForm" className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto mb-6">
      <h2 className="text-xl font-semibold text-[var(--color-secondary)] mb-4">
        Add a New Video
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
            <label 
                htmlFor="title"
                className='block text-sm font-medium text-gray-700'>Video Title</label>
            <input 
                type="text" 
                id="title" 
                value={title}
                onChange = {(e)=> setTitle(e.target.value)}
                className='mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Enter video title' />
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
                className='mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-blue-500 focus:border-blue-500'
                placeholder='https://www.youtube.com/watch?v=...' />
        </div>
        <div>
            <label 
                htmlFor="thumbnail"
                className='block text-sm font-medium text-gray-700'>Video Description</label>
            <textarea  
                id="title" 
                value={description}
                onChange = {(e)=> setDescription(e.target.value)}
                className='mt-1 block w-full rounded-md border border-gray-300 p-3 focus:ring-blue-500 focus:border-blue-500'
                rows={3}
                placeholder='Enter video description'></textarea>
        </div>
       {error && (
          <p className="text-red-500 text-sm text-center font-semibold">{error}</p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-md text-white font-medium transition duration-200 transform hover:scale-105 ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]'
          }`}
          aria-label="Add new video"
        >
          {isLoading ? 'Adding...' : 'Add Video'}
        </button>
      </form>

    </div>
  )
}

export default AddVideoForm