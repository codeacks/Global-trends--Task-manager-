import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Pending': return 'status-pending';
            case 'In Progress': return 'status-inprogress';
            case 'Completed': return 'status-completed';
            default: return '';
        }
    };

    return (
        <div className="glass-panel task-item">
            <div className="task-content">
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
            </div>

            <div className="task-footer">
                <div className="task-meta">
                    <span className={`status-badge ${getStatusClass(task.status)}`}>
                        {task.status}
                    </span>
                </div>
                <div className="task-actions">
                    <button onClick={() => onEdit(task)} className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                        Edit
                    </button>
                    <button onClick={() => onDelete(task._id)} className="btn btn-danger" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const TaskList = ({ tasks, onEdit, onDelete }) => {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <h3>No tasks yet</h3>
                <p>Create a task to get started!</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TaskList;
