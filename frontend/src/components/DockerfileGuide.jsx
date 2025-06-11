import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function DockerfileGuide() {

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-4xl text-[#f9a535] font-bold mb-4">Dockerfile Guide</h1>
            <p className="text-xl text-white mb-4">
                Now that you've made your project and learned the basics of Docker, it's time to build your app with a Dockerfile. This guide will show you how to create a Dockerfile for a React and Express app, if you need more information check out the <a href="https://docs.docker.com/reference/dockerfile/" className="text-[#f9a535] underline">Docker docs</a> for more information.
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">What is a Dockerfile?</h2>
            <p className="text-lg text-white mb-4">
                A Dockerfile is a set of instructions that Docker uses to build an image of your application. These instructions are all of the commands that a user would use in the command line to build your application.
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">Creating a Dockerfile</h2>
            <p className="text-lg text-white mb-4">Below is the Dockerfile for a React app that serves the frontend with the Express backend and SQLite for the database.</p>
            <code className="text-lg mb-4"><pre><SyntaxHighlighter language="dockerfile" style={a11yDark}>
                {`FROM node:22 AS frontend // Or whatever version you want to use
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

COPY --from=frontend /app/frontend/dist ./public
RUN mkdir -p /data && chown -R node:node /data // Create a directory for the database
EXPOSE 3000 // Change this to whatever port your app runs on
CMD ["node", "index.js"] // Change index.js to whatever your entry point is`}
            </SyntaxHighlighter></pre></code>
            <h3 className="text-2xl text-[#f9a535] font-semibold mb-2">1. The Frontend</h3>
            <p className="text-lg text-white mb-4">
                The first part of the Dockerfile will be to build the frontend. Start with the base image, for React it's Node. Then you set your working directory, this is the directory of the app that Docker will use to run commands. Next, you copy you package.json files to your working directory and run npm install. This is done before copying the rest of the files to take advantage of Docker's caching. If you don't change your package.json files, Docker will use the cached layer and not run npm install again, speeding up the build process. After that, you copy the rest of the frontend files and run npm run build to create your React app.
            </p>
            <h3 className="text-2xl text-[#f9a535] font-semibold mb-2">2. The Backend</h3>
            <p className="text-lg text-white mb-4">
                The second part of the Dockerfile is to setup your backend. Since mine is in Express, you will be using the same base image. We switch our working directory to the backend folder. We do the same thing as the frontend, copy the package.json files, run npm install, and then copy the rest of the backend files.
            </p>
            <h3 className="text-2xl text-[#f9a535] font-semibold mb-2">3. Final Steps</h3>
            <p className="text-lg text-white mb-4">
                Finally, we copy the build frontend to the backend's public directory so that Express can server it. Then we create a directory for the SQLite database and change the ownership to the node user so the app can write to it. Finally, we expose the port and run the server.
            </p>
        </div>
    );
}