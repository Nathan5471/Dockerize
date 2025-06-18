import React from 'react';

export default function DockerBasics() {

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-4xl text-[#f9a535] font-bold mb-4">Docker Basics</h1>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">What is Docker?</h2>
            <p className="text-xl text-white mb-4">
                Docker is a platform that allows you to easily deploy your application in a container. What's a container? A container is like a virtual machine, but instead of running it's own operating system, it uses the low-level mechanics of the host operating system. This allows you to bundle your application with its dependencies and have much of the isolation of a virtual machine, but with significantly less overhead. Looking for more info? Check out the <a href="https://docs.docker.com/get-started/docker-overview/" target="_blank" className="text-[#f9a535] hover:underline">Docker documentation</a>.
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">How can I run a Docker application?</h2>
            <p className="text-xl text-white mb-4">
                After you have <a href="https://docs.docker.com/get-started/get-docker/" target="_blank" className="text-[#f9a535] hover:underline">installed Docker</a>, your can run Docker applications using one of two methods: Docker Compose and Docker Run.
            </p>
            <h3 className="text-2xl text-[#f9a535] font-semibold mb-2">Docker Compose (Reccomended)</h3>
            <p className="text-xl text-white mb-4">
                Docker Compose is a tool that allows you to define and run multiple Docker applications in a single .yaml file. In the YAML file, you define your applications, then you can deploy all of them with a single command. When you are in the same directory as the YAML file, run 'docker-compose up -d' to start the applications in the file. Make you you have downloaded Docker Compose using the instructions in the <a href="https://docs.docker.com/compose/install/" target="_blank" className="text-[#f9a535] hover:underline">Docker documentation</a>.
            </p>
            <h3 className="text-2xl text-[#f9a535] font-semibold mb-2">Docker Run</h3>
            <p className="text-xl text-white mb-4">
                Docker Run is a command that allows you to run a single Docker container. This is fine to use, but once you start running many containers, Docker Compose is much more convenient.
            </p>
        </div>
    );
}