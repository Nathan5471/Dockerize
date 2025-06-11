import React from 'react';

export default function MakingYourProject() {

    return (
        <div className="flex flex-col">
            <h1 className="text-4xl text-[#f9a535] font-bold mt-16 mb-4">Making Your Project</h1>
            <p className="text-xl text-white mb-4">
                After you choose your project idea, it's time to start building! In this section, we'll cover the frontend, backend, and database components of your self-hosted application.
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">Frontend</h2>
            <p className="text-xl text-white mb-4">
                The frontend will be a website that users can access to use your application. You can use any web framework you like, such as React or Vue.js. 
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">Backend</h2>
            <p className="text-xl text-white mb-4">
                The backend will handle the logic of your application and communicate with the frontend and database. You can use any backend framework you like, such as Node.js, Flask, or Django. Your backend will also be used to serve the frontend so your application can be in one Docker container.
            </p>
            <h2 className="text-3xl text-[#f9a535] font-semibold mb-2">Database</h2>
            <p className="text-xl text-white mb-4">
                The database will store your application's data. You can use any database you like, but I highly reccomend using SQLite. SQLite is the easiest database to set up to be shipped within your Docker container, as it is a file-based database that doesn't require a separate server process.
            </p>
        </div>
    );
}