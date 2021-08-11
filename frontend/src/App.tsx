import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="text-center text-lg md:text-4xl">
            <header className="App-header h-screen bg-gray-800 flex flex-col justify-center align-middle text-white">
                <div className="flex justify-center">
                    <img src={logo} className="App-logo max-w-2xl" alt="logo" />
                </div>

                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="text-blue-300"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
