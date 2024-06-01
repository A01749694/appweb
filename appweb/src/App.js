import React, { useState } from 'react';
import TaskListPage from './components/TaskListPage';
import Calendar from './components/Calendar';
import ClassList from './components/ClassList';
import './App.css';

function App() {
    const [currentTab, setCurrentTab] = useState('tasks');

    const renderTab = () => {
        switch (currentTab) {
            case 'tasks':
                return <TaskListPage />;
            case 'calendar':
                return <Calendar />;
            case 'classes':
                return <ClassList />;
            default:
                return <TaskListPage />;
        }
    };

    return (
        <div className="App">
            <nav>
                <ul>
                    <li onClick={() => setCurrentTab('tasks')}>Tareas</li>
                    <li onClick={() => setCurrentTab('calendar')}>Calendario</li>
                    <li onClick={() => setCurrentTab('classes')}>Clases</li>
                </ul>
            </nav>
            {renderTab()}
        </div>
    );
}

export default App;