import React, { useState } from 'react';

const ClassList = () => {
    const [showForm, setShowForm] = useState(false);
    const [classData, setClassData] = useState({
        className: '',
        schedule: '',
        room: '',
        semester: '',
    });
    const [classList, setClassList] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClassData({ ...classData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Agregar la clase a la lista
        setClassList([...classList, classData]);
        // Limpia el formulario después de enviar
        setClassData({
            className: '',
            schedule: '',
            room: '',
            semester: '',
        });
        setShowForm(false); // Oculta el formulario después de enviar
    };

    return (
        <div>
            <h1>Lista de Clases</h1>
            <button onClick={() => setShowForm(true)}>Agregar Clase</button>
            {showForm && (
                <form onSubmit={handleSubmit} className="form">
                    <label>
                        Nombre de la Clase:
                        <input
                            type="text"
                            name="className"
                            value={classData.className}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Horario de la Clase:
                        <input
                            type="time"
                            name="schedule"
                            value={classData.schedule}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Salón:
                        <input
                            type="text"
                            name="room"
                            value={classData.room}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Semestre:
                        <input
                            type="text"
                            name="semester"
                            value={classData.semester}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit">Agregar</button>
                </form>
            )}
            <ul>
                {classList.map((item, index) => (
                    <li key={index}>
                        <strong>{item.className}</strong> - {item.schedule}, {item.room}, {item.semester}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClassList;
