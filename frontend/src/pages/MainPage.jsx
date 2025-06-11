import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f9a535]">
            <div className="flex flex-col ustify-ceneter bg-[#424241] p-8 w-[calc(75%)] my-10 rounded-lg shadow-lg">
                <h1 className="text-6xl text-[#f9a535] text-center font-bold">Dockerize</h1>
                <p className="text-2xl text-white text-center mt-4">You ship a full-stack self hosted application in a single Docker image, we ship you a home server to host it.</p>
                <h2 className="text-4xl text-[#f9a535] text-left mt-8">How it works</h2>
                <ol className="list-decimal list-inside text-2xl text-white mt-4">
                    <li>You create an applicication with a frontend (website) and backend</li>
                    <li>You write a Dockerfile to build your application (<Link to="/guide">The Guide</Link>)</li>
                    <li>You submit your docker container with install instructions</li>
                    <li>You get your prize!</li>
                </ol>
                <h2 className="text-4xl text-[#f9a535] text-left mt-8">Requirements</h2>
                <ul className="list-disc list-inside text-xl text-white mt-4">
                    <li>You must be a highschool student or younger</li>
                    <li>Your project must be new, open source, and made for Dockerize</li>
                    <li>You need to track your time with Hackatime (<a href="https://hackatime.hackclub.com">hackatime.hackclub.com</a>)</li>
                    <li>Your project needs to have a web interface</li>
                    <li>Your project needs to have a backend that can store data</li>
                    <li>Your project needs to be self-hostable with clear Docker setup instructions</li>
                </ul>
                <h2 className="text-4xl text-[#f9a535] text-left mt-8">Prizes</h2>
                <div className="text-2xl text-white mt-4 flex flex-row justify-around">
                    <div className="text-center">
                        <h3 className="text-3xl text-[#f9a535]">Raspberry Pi</h3>
                        <p>Raspberry Pi 4 Model B 2GB</p>
                        <p>10 Hour Requirement</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl text-[#f9a535]">ZimaBoard</h3>
                        <p>ZimaBoard 232</p>
                        <p>18 Hour Requirement</p>
                    </div>
                </div>
            </div>
        </div>
    )
}