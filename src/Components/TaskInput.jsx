import React, { useState } from 'react';

const TaskInput = ({ onSubmit }) => {
	const [taskName, setTaskName] = useState('');

	return (
		<form
			className="input-group mb-3"
			onSubmit={(e) => {
				setTaskName('');
				onSubmit(e);
			}}
		>
			<input
				className="form-control"
				type="text"
				placeholder="Enter a task..."
				value={taskName}
				name="taskName"
				onChange={(e) => setTaskName(e.target.value)}
			/>
			<button
				className="btn btn-primary"
				disabled={5 > taskName.trim().length}
				type="submit"
			>
				Add
			</button>
		</form>
	);
};

export default TaskInput;
