import React, { useState, useEffect } from 'react';

const Task = ({ task, onDelete, onEdit }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTask, setEditedTask] = useState(task.name);

	useEffect(() => {
		setEditedTask(task.name);
	}, [task]);

	/**
	 * Hadles edit click
	 */
	const handleEditClick = () => {
		setIsEditing(true);
	};

	/**
	 * Handles updating the task
	 */
	const handleSaveClick = () => {
		setIsEditing(false);
		onEdit({ ...task, name: editedTask });
	};

	/**
	 * Cancel editing
	 */
	const handleCancelClick = () => {
		setIsEditing(false);
		setEditedTask(task.name);
	};

	/** Toggles isComplete property of task */
	const handleMarkDoneClick = () => {
		task = { ...task, isComplete: !task.isComplete };
		onEdit(task);
	};

	return (
		<>
			{isEditing ? (
				<>
					<input
						type="text"
						className="form-control"
						value={editedTask}
						onChange={(e) => setEditedTask(e.target.value)}
					/>
					<button
						className="btn btn-success btn-sm mt-2"
						onClick={handleSaveClick}
					>
						Save
					</button>
					<button
						className="btn btn-secondary btn-sm mt-2"
						onClick={handleCancelClick}
					>
						Cancel
					</button>
				</>
			) : (
				<div className="row">
					<p
						className={`col-sm-9 lead ${
							task.isComplete ? 'done' : 'pending'
						}`}
					>
						{task.name}
					</p>
					<button
						className="btn btn-info btn-xs p-0 col"
						onClick={handleEditClick}
					>
						✎
					</button>
					<button
						className={`btn ${
							task.isComplete ? 'btn-danger' : 'btn-success'
						} btn-xs p-0 col`}
						onClick={handleMarkDoneClick}
					>
						{task.isComplete ? '✘' : '✔'}
					</button>
					<button
						className="btn btn-danger btn-xs col p-0"
						onClick={() => onDelete(task.id)}
					>
						⌫
					</button>
				</div>
			)}
		</>
	);
};

export default Task;
