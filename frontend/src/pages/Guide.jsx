import React from 'react';
import { useParams } from 'react-router-dom';
import GuideSideBar from '../components/GuideSideBar.jsx';

export default function Guide() {
    const { guideId } = useParams();

    return (
        <div className="flex items-center justify-center h-screen bg-[#f9a535]">
            <GuideSideBar currentGuide={guideId} />
            <div className="flex flex-col justify-center bg-[#424241] p-8 w-[calc(75%)] my-10 rounded-lg shadow-lg">
            </div>
        </div>
    )
}