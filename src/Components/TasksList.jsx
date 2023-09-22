import React from 'react';
import Task from './Task';

function TasksList({ tasks, onDelete, onEdit, onComplete }) {
	return (
		<ul className="list-group mt-3 mx-auto">
			{tasks.map((task) => (
				<li
					className={`list-group-item ${
						task.isComplete ? '.bg-danger' : '.bg-success'
					}`}
					key={task.id}
				>
					<Task
						name={task.name}
						id={task.id}
						done={task.isComplete}
						onDelete={onDelete}
						task={task}
						onEdit={onEdit}
					/>
				</li>
			))}
		</ul>
	);
}

export default TasksList;
