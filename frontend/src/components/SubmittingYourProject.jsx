import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function SubmittingYourProjct() {

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-4xl text-[#f9a535] font-bold mb-4">Submitting Your Project</h1>
            <p className="text-xl text-white mb-4">
                Wow, you've made it to the end of the guide! Now that your project is completed, it's time to ship it and get your prize.
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">1. Publish to Docker Hub</h2>
            <p className="text-xl text-white mb-4">
                The first step to submitting your project is to public it to Docker Hub. This is so everyone can easily download and run your project. You will need to create an account on <a href="https://hub.docker.com/" className="text-[#f9a535] hover:underline">Docker Hub</a> if you don't have one already. You can publish your app on Docker Hub by following these steps:
            </p>
            <ol className="list-decimal list-inside text-xl text-white mb-4">
                <li>Run 'docker build -t MyAppName' in the same directory as your Dockerfile</li>
                <li>Run 'docker tag MyAppName MyDockerHubUsername/MyAppName:latest'</li>
                <li>Run 'docker push MyDockerHubUsername/MyAppName:latest</li>
            </ol>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">2. Make your Docker Compose instructions</h2>
            <p className="text-xl text-white mb-4">
                Now it's time to make your Docker Compose file so other people can run your project. You can use the following template to get started:
            </p>
            <code className="text-lg mb-4"><pre><SyntaxHighlighter language="yaml" style={a11yDark}>
{`version: '3.8'

services:
  MyAppName:
    image: MyDockerHubUsername/MyAppName:latest
    ports:
      - "3000:3000" # Change this to the port your app runs on
    volumes:
      - /path/to/store/data:/data # This is for the SQLite database, change if you use a different database
    restart: unless-stopped`}
            </SyntaxHighlighter></pre></code>
            <p className="text-lg text-white mb-4">
                Make sure to save this file as <code>dockerCompose.yaml</code> in your GitHub repository. If you need help with a more advanced Docker compose file, ask in #dockerize on the Hack Club Slack. Finally, you can run 'docker compose up' in the same directory as your <code>dockerCompose.yaml</code> file to run your project.
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">3. Submit your project</h2>
            <p className="text-xl text-white mb-4">
                ADD SUBMISION INSTRUCTIONS HERE
            </p>
        </div>
    );
}