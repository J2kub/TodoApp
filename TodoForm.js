import React, { useState } from 'react';

function TodoForm({ onTaskAdded }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        fetch('https://localhost:44309/api/todoitems', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, isDone: false }),
        })
            .then(res => res.json())
            .then(() => {
                setTitle('');
                onTaskAdded();
            });
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-6">
            <input
                className="... focus:ring-2 focus:ring-purple-400 dark:focus:ring-blue-500 shadow-inner"
                type="text"
                placeholder="Zadaj novú úlohu"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <button
                className="... shadow-md dark:shadow-blue-500/30"
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-all"
            >
                Pridať
            </button>
        </form>
    );
}

export default TodoForm;
