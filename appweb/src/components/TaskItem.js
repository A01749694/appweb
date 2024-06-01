// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const handleToggle = () => {
        updateTask(task.id, { ...task, completed: !task.completed });
    };

    return (
        <li>
            <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={handleToggle}
            >
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;
