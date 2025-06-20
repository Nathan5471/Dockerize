import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f9a535]">
            <div className="flex flex-col ustify-ceneter bg-[#424241] p-8 w-[calc(75%)] my-10 rounded-lg shadow-lg">
                <h1 className="text-6xl text-[#f9a535] text-center font-bold">Dockerize</h1>
                <p className="text-2xl text-white text-center mt-4">A Hack Club YSWS where you ship a self-hosted application using Docker, we ship you stickers and a chance to win a ZimaBoard.</p>
                <div className="flex flex-row justify-center gap-2 mt-8">
                    <Link to="/guide" className="bg-[#f9a535] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#e08c2b] transition duration-300">The Guide</Link>
                    <a href="https://forms.hackclub.com/dockerize" target="_blank" className="bg-[#f9a535] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#e08c2b] transition duration-300">Submit Your Project</a>
                    <a href="https://demo.nathanc.me" target="_blank" className="bg-[#f9a535] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#e08c2b] transition duration-300">Demo</a>
                    <a href="https://github.com/Nathan5471/recipe-vault" target="_blank" className="bg-[#f9a535] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#e08c2b] transition duration-300">Demo GitHub</a>
                </div>
                <h2 className="text-4xl text-[#f9a535] text-left mt-8">How it works</h2>
                <ol className="list-decimal list-inside text-2xl text-white mt-4">
                    <li>You create an applicication with an interface and backend</li>
                    <li>You write a Dockerfile to build your application (<Link to="/guide" className="text-[#f9a535] hover:underline">The Guide</Link>)</li>
                    <li>You submit your docker container with install instructions</li>
                    <li>You get your prize!</li>
                </ol>
                <h2 className="text-4xl text-[#f9a535] text-left mt-8">Requirements</h2>
                <ul className="list-disc list-inside text-xl text-white mt-4">
                    <li>You must be a highschool student or younger</li>
                    <li>Your project must be new, open source, and made for Dockerize</li>
                    <li>You need to track your time with Hackatime (<a href="https://hackatime.hackclub.com" className="text-[#f9a535] hover:underline">hackatime.hackclub.com</a>)</li>
                    <li>Your project needs to have a user interface</li>
                    <li>Your project needs to have a backend that can store data</li>
                    <li>Your project needs to be self-hostable with clear Docker setup instructions</li>
                    <li>You should spend at least 1-2 hours on your project</li>
                </ul>
                <h2 className="text-4xl text-[#f9a535] text-left mt-8">Prizes</h2>
                <p className="text-2xl text-white mt-4">Everyone who submits a project will get some cool stickers. The top 3 projects based on DockerHub stars will win a ZimaBoard as a home server.</p>
                <div className="text-2xl text-white mt-4 flex flex-row items-center justify-around">
                    <div className="text-center">
                        <h3 className="text-3xl text-[#f9a535]">ZimaBoard</h3>
                        <p>ZimaBoard 232</p>
                    </div>
                    <img src="/zimaboardImage.jpg" alt="ZimaBoard 232" className="w-1/3 h-auto rounded-lg" />
                </div>
            </div>
        </div>
    )
}