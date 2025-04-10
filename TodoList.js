import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([]);

    // Funkcia na načítanie úloh zo servera
    const fetchTodos = () => {
        fetch('https://localhost:44309/api/todoitems')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Chyba pri načítaní úloh:', error));
    };

    // Funkcia na odstránenie úlohy
    const handleDelete = (id) => {
        fetch(`https://localhost:44309/api/todoitems/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                // Po úspešnom odstránení zavoláme fetchTodos, aby sa zoznam aktualizoval
                fetchTodos();
            })
            .catch(error => console.error('Chyba pri mazání úlohy:', error));
    };

    // Načítanie úloh pri prvom renderovaní komponentu
    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h2>Úlohy</h2>

            {/* Formulár na pridanie úlohy */}
            <TodoForm onTaskAdded={fetchTodos} />

            {/* Zoznam úloh */}
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onStatusChange={fetchTodos}  // Obnoví zoznam úloh pri zmene stavu
                        onDelete={handleDelete}      // Odstránenie úlohy
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
