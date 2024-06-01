import React, { useState } from 'react';
import TaskListPage from './components/TaskListPage';
import Calendario from './components/Calendario';
import ClassList from './components/ClassList';
import Weather from './components/Weather'; // Agrega esta línea
import './App.css';

function App() {
    const [currentTab, setCurrentTab] = useState('tasks');

    const renderTab = () => {
        switch (currentTab) {
            case 'tasks':
                return <TaskListPage />;
            case 'calendar':
                return <Calendario />;
            case 'classes':
                return <ClassList />;
            default:
                return <TaskListPage />;
        }
    };

    return (
        <div className="App">
            <Weather /> {/* Agrega el componente Weather aquí */}
            <nav className="w3-bar w3-black">
                <button className="w3-bar-item w3-button" onClick={() => setCurrentTab('tasks')}>Tareas</button>
                <button className="w3-bar-item w3-button" onClick={() => setCurrentTab('calendar')}>Calendario</button>
                <button className="w3-bar-item w3-button" onClick={() => setCurrentTab('classes')}>Clases</button>
            </nav>
            {renderTab()}
        </div>
    );
}


export default App;
