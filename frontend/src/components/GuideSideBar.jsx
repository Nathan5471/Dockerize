import React from 'react';
import { Link } from 'react-router-dom';

export default function GuideSideBar({ currentGuide }) {
    const guides = [
        { id: 'gettingStarted', title: 'Getting Started' },
        { id: 'selfHostingBasics', title: 'Self-Hosting Basics' },
        { id: 'makingYourProject', title: 'Making Your Project'},
        { id: 'dockerBasics', title: 'Docker Basics' },
        { id: 'dockerfileGuide', title: 'Dockerfile Guide' },
    ]

    return (
        <div className="bg-[#424241] h-[calc(90%)] p-4 rounded-lg shadow-lg w-64">
            <h2 className="text-2xl text-[#f9a535] font-bold mb-4">Guide</h2>
            {guides.map(guide => (
                <Link
                    key={guide.id}
                    to={`/guide/${guide.id}`}
                    className={`block text-lg text-white ${currentGuide === guide.id ? "bg-[#f9a535]" : ""} py-2 px-4 rounded hover:text-black hover:bg-[#f9a535] transition-colors`}
                >
                    {guide.title}
                </Link>
            ))}
            <Link
                to="/"
                className="block text-lg text-gray-500 py-2 px-4 rounded hover:text-black transition-colors mt-4"
            >
                Back to Home
            </Link>
        </div>
    )
}