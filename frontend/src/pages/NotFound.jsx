import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f9a535]">
            <div className="flex flex-col ustify-ceneter bg-[#424241] p-8 w-[calc(75%)] my-10 rounded-lg shadow-lg">
                <h1 className="text-6xl text-[#f9a535] text-center font-bold">404 Not Found</h1>
                <p className="text-2xl text-white text-center mt-2">The page you're looking for doesn't exist, here are some pages that do exist:</p>
                <div className="flex flex-row justify-center gap-2 mt-4">
                    <Link to="/" className="bg-[#f9a535] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#e08c2b] transition duration-300">Home</Link>
                    <Link to="/guide" className="bg-[#f9a535] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#e08c2b] transition duration-300">The Guide</Link>
                    <Link to="/submit" className="bg-[#f9a535] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#e08c2b] transition duration-300">Submit Your Project</Link>
                </div>
            </div>
        </div>
    );
}