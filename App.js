import { useState, useEffect } from "react";
import TodoList from './components/TodoList';
import CloudLayer from "./components/Cloud";

function App() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (dark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [dark]);

    return (
        <div
            className={`relative min-h-screen transition-all ${dark ? 'bg-cyberpunk-dark animate-movebg' : 'bg-gradient-to-br from-sky-200 via-blue-100 to-blue-300'} text-gray-900 dark:text-gray-100`}
        >
            {/* Prepínač mimo hlavného obsahu */}
            <div className="flex justify-end p-4 relative z-10">
                <button
                    onClick={() => setDark(!dark)}
                    className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-lg shadow hover:scale-105 transition"
                >
                    {dark ? "☀️ Light" : "🌙 Dark"}
                </button>
            </div>

            {/* Nadpis mimo hlavného boxu */}
            <h1 className="text-4xl font-extrabold text-center mb-8 relative z-10">
                📝 Todo List App
            </h1>

            {/* Hlavný obsah boxu */}
            <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-2xl rounded-2xl transition-all relative z-10">
                {/* TodoList je teraz mimo hlavného boxu */}
                <TodoList />

                {/* Footer */}
                <footer className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                    Autor:{" "}
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                        Jakub Glončák
                    </span>{" "}
                    |{" "}
                    <a
                        href="https://www.instagram.com/_j2kub_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            {/* Ikonka IG */}
                            <path d="M12 2.2c3.2 0 ... (skrátené pre prehľadnosť) ..." />
                        </svg>
                        _j2kub_
                    </a>
                </footer>
            </div>

            {/* Obláčiky len v light režime */}
            {!dark && <CloudLayer />}
        </div>
    );
}

export default App;
