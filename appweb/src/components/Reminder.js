// Reminder.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Reminder.css'; // Importa el archivo CSS

const Reminder = ({ addReminder }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    addReminder({ title, date });
    setTitle('');
    setDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Fecha y Hora:</label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
      <button type="submit" className="reminder-button">Añadir Recordatorio</button>
    </form>
  );
};

export default Reminder;
