import React from 'react';
import { useParams } from 'react-router-dom';
import GuideSideBar from '../components/GuideSideBar.jsx';
import GettingStarted from '../components/GettingStarted.jsx';
import SelfHostingBasics from '../components/SelfHostingBasics.jsx';

export default function Guide() {
    const { guideId } = useParams();

    return (
        <div className="flex items-center justify-center h-screen bg-[#f9a535]">
            <GuideSideBar currentGuide={guideId} />
            <div className="flex flex-col justify-center bg-[#424241] p-8 ml-6 h-[calc(90%)] w-[calc(75%)] my-10 rounded-lg shadow-lg overflow-y-auto">
                {guideId === 'gettingStarted' && <GettingStarted />}
                {guideId === 'selfHostingBasics' && <SelfHostingBasics />}
            </div>
        </div>
    )
}