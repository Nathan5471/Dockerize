import React from 'react';

export default function GettingStarted() {
    return (
        <div className="flex flex-col h-full">
            <h1 className="text-4xl text-[#f9a535] font-bold mb-4">Getting Started</h1>
            <p className="text-xl text-white mb-4">
                Welcome to the Getting Started guide! Here, you'll find all the information you need to kickstart your journey with Dockerize.
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">Join the Slack!</h2>
            <p className="text-xl text-white mb-4">
                Join #dockerize in the Hack Club Slack. If you aren't already in the Hack Club Slack, you can joint at <a href="https://hackclub.com/slack" target="_blank" className="text-[#f9a535] hover:underline">hackclub.com/slack</a>.
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">What does this guide cover?</h2>
            <p className="text-xl text-white mb-4">
                This guide starts out with covering the basics of self-hosting, what a self-hosted project looks like, and how to get started with making one. Then, it goes into the basics of Docker and how you will deploy your project.
            </p>
        </div>
    )
    
}