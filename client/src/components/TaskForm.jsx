import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, initialData = null, onCancel }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDescription(initialData.description || '');
            setStatus(initialData.status);
        } else {
            setTitle('');
            setDescription('');
            setStatus('Pending');
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, status });
        if (!initialData) {
            setTitle('');
            setDescription('');
            setStatus('Pending');
        }
    };

    return (
        <div className="glass-panel card-form">
            <h2 style={{ marginBottom: '1.5rem', fontWeight: 600 }}>{initialData ? 'Edit Task' : 'New Task'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="What needs to be done?"
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-input"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add details..."
                        style={{ minHeight: '120px' }}
                    />
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select
                        className="form-input"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button type="submit" className="btn btn-primary">
                        {initialData ? 'Update Task' : 'Create Task'}
                    </button>
                    {initialData && (
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
