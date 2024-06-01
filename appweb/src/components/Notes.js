import React, { useState, useEffect } from 'react';
import './Notes.css';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentNoteId, setCurrentNoteId] = useState(null);

    // Load notes from localStorage when the component mounts
    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    // Save notes to localStorage whenever the notes state changes
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const handleAddNote = () => {
        if (newNote.trim() === '') return;

        const note = {
            id: Date.now(),
            text: newNote,
        };

        setNotes([...notes, note]);
        setNewNote('');
    };

    const handleDeleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    };

    const handleEditNote = (id) => {
        const noteToEdit = notes.find(note => note.id === id);
        setNewNote(noteToEdit.text);
        setIsEditing(true);
        setCurrentNoteId(id);
    };

    const handleUpdateNote = () => {
        const updatedNotes = notes.map(note =>
            note.id === currentNoteId ? { ...note, text: newNote } : note
        );

        setNotes(updatedNotes);
        setNewNote('');
        setIsEditing(false);
        setCurrentNoteId(null);
    };

    return (
        <div className="notes-container">
            <h1>Notas Rápidas</h1>
            <div className="note-input-container">
                <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Escribe una nota..."
                />
                <button onClick={isEditing ? handleUpdateNote : handleAddNote}>
                    {isEditing ? 'Actualizar Nota' : 'Agregar Nota'}
                </button>
            </div>
            <div className="notes-list">
                {notes.map(note => (
                    <div key={note.id} className="note-item">
                        <span>{note.text}</span>
                        <div className="note-buttons">
                            <button onClick={() => handleEditNote(note.id)}>Editar</button>
                            <button onClick={() => handleDeleteNote(note.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
