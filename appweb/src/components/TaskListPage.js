import React, { useState } from 'react';
import Weather from './Weather';

const TaskListPage = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Añadir nueva tarea"
                />
                <button onClick={handleAddTask}>Añadir Tarea</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskListPage;
