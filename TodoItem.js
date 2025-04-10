import React from 'react';

function TodoItem({ todo, onStatusChange, onDelete }) {

    // Funkcia na zmenu stavu úlohy (done/not done)
    const toggleDone = () => {
        const updated = { ...todo, isDone: !todo.isDone };

        // Odošleme PUT požiadavku na aktualizáciu stavu úlohy
        fetch(`https://localhost:44309/api/todoitems/${todo.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated),
        })
            .then(() => onStatusChange())  // Po zmene zavoláme onStatusChange, aby sme aktualizovali zoznam
            .catch((error) => console.error('Chyba pri aktualizácii úlohy:', error));
    };

    // Funkcia na odstránenie úlohy
    const handleDelete = () => {
        fetch(`https://localhost:44309/api/todoitems/${todo.id}`, {
            method: 'DELETE',
        })
            .then(() => onDelete())  // Po odstránení zavoláme onDelete na znovu načítanie zoznamu
            .catch((error) => console.error('Chyba pri mazání úlohy:', error));
    };

    return (
        <li className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-md flex items-center justify-between transition-all hover:scale-[1.01]">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={toggleDone}  // Zmena stavu úlohy
                    className="w-5 h-5"
                />
                <span
                    className={`text-lg ${todo.isDone ? 'line-through text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}
                >
                    {todo.title}
                </span>
            </div>
            <button
                onClick={handleDelete}  // Odstránenie úlohy
                className="text-red-500 hover:text-red-700 font-bold"
            >
                Odstrániť
            </button>
        </li>
    );
}

export default TodoItem;
