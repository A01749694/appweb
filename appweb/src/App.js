// App.js
import React, { useState } from 'react';
import TaskListPage from './components/TaskListPage';
import Calendario from './components/Calendario';
import ClassList from './components/ClassList';
import Weather from './components/Weather';
import Notes from './components/Notes';
import Reminder from './components/Reminder';
import './App.css';

function App() {
    const [currentTab, setCurrentTab] = useState('tasks');
    const [reminders, setReminders] = useState([]);

    const addReminder = (reminder) => {
        setReminders([...reminders, reminder]);
    };

    const renderTab = () => {
        switch (currentTab) {
            case 'tasks':
                return <TaskListPage />;
            case 'calendar':
                return <Calendario />;
            case 'classes':
                return <ClassList />;
            case 'notes':
                return <Notes />;
            case 'reminders':
                return (
                    <div>
                        <Reminder addReminder={addReminder} />
                        <ul>
                            {reminders.map((reminder, index) => (
                                <li key={index}>
                                    {reminder.title} - {reminder.date.toString()}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return <TaskListPage />;
        }
    };

    return (
        <div className="App">
            <div className="sidebar">
                <Weather />
            </div>
            <div className="main-content">
                <nav className="w3-bar w3-black">
                    <button className="w3-bar-item w3-button" onClick={() => setCurrentTab('tasks')}>Tareas</button>
                    <button className="w3-bar-item w3-button" onClick={() => setCurrentTab('calendar')}>Calendario</button>
                    <button className="w3-bar-item w3-button" onClick={() => setCurrentTab('classes')}>Clases</button>
                    <button className="w3-bar-item w3-button" onClick={() => setCurrentTab('notes')}>Notas</button>
                    <button className="w3-bar-item w3-button" onClick={() => setCurrentTab('reminders')}>Recordatorios</button>
                </nav>
                <div className="content">
                    {renderTab()}
                </div>
            </div>
        </div>
    );
}

export default App;
