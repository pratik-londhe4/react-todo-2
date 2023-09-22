import React, { useEffect, useState } from 'react';
import TaskInput from './TaskInput';
import Task from './Task';
import '../ToDo.css';

function ToDo({ heading }) {
	const [tasks, setTasks] = useState([]);

	/**
	 * Add's new Task
	 *
	 * @param {any} e
	 */
	const addTask = (e) => {
		e.preventDefault();
		setTasks([{ name: e.target.taskName.value, id: Date.now() }, ...tasks]);
	};

	useEffect(() => {
		const localTasks = localStorage?.getItem('tasks');
		if (!localTasks) {
			return;
		}
		const parsedTasks = JSON.parse(localTasks);
		setTasks(parsedTasks);
	}, []);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	/**
	 * Edit existing Task.
	 *
	 * @param {any} editedTask
	 */
	function editTask(editedTask) {
		const updatedTasks = tasks.map((task) =>
			task.id === editedTask.id ? editedTask : task
		);
		setTasks(updatedTasks);
	}
	/**
	 * Delete task with given id
	 *
	 * @param {any} id
	 */
	function deleteTask(id) {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	}

	return (
		<div className="container-fluid text-center m-5 border p-1 w-sm-50">
			<h1 className="m-2">{heading}</h1>
			<TaskInput onSubmit={addTask} />
			<ul className="list-group  mt-3 mx-auto">
				{!tasks.length ? (
					<h3>Got nothing to Do? </h3>
				) : (
					tasks.map((task, i) => (
						<li className="list-group-item" key={i}>
							<Task
								task={task}
								onDelete={deleteTask}
								onEdit={editTask}
							/>
						</li>
					))
				)}
			</ul>
		</div>
	);
}

export default ToDo;
