import React from 'react';

export default function SelfHostingBasics() {

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-4xl text-[#f9a535] font-bold mb-4">Self-Hosting Basics</h1>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">What is Self-Hosting?</h2>
            <p className="text-xl text-white mb-4">
                Self-hosting is when you run/manage your own home server to host applications, increase of relying on third-party services. Self-hosting is preffered by many as it gives you control of your data and can often result in you saving money.
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">Examples of self-hosted software</h2>
            <p className="text-xl text-white mb-4">Below are some of the most popular self-hosted applications:</p>
            <ul className="list-disc list-inside text-xl text-white mb-4">
                <li><a href="https://jellyfin.org/" className="text-[#f9a535] hover:underline">Jellyfin</a> - A media server for streaming your own movies, TV shows, and music.</li>
                <li><a href="https://pi-hole.net/" className="text-[#f9a535] hover:underline">Pi-hole</a> - A DNS server that blocks ads on your network.</li>
                <li><a href="https://bitwarden.com/" className="text-[#f9a535] hover:underline">Bitwarden</a> - A password manager.</li>
                <li><a href="https://docs.mealie.io/" className="text-[#f9a535] hover:underline">Mealie</a> - A recipe manager and meal planner</li>
                <li><a href="https://caddyserver.com/" className="text-[#f9a535] hover:underline">Caddy</a> - A web server and reverse proxy that automatically manages SSL certificates.</li>
                <li><a href="https://www.home-assistant.io/" className="text-[#f9a535] hover:underline">Home Assistant</a> - A home automation platform that focuses on privacy and local control.</li>
            </ul>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">What should I make?</h2>
            <p className="text-xl text-white mb-4">
                You can make anything you want. If you are having trouble coming up with an idea, try thinking about a problem you have or a service that you use that you would prefer to have control of. Stil can't think of any, feel free to take inspiration from the list above or visit <a href="https://awesome-selfhosted.net/" className="text-[#f9a535] hover:underline">awesome-selfhosted</a>, a list with a ton of self-hosted applications and projects.
            </p>
        </div>
    )
}