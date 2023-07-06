import React, { useState } from "react";

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const markTaskCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ToDo List
        </h2>
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="mr-4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none sm:text-sm sm:leading-6"
        />
        <button
          onClick={addTask}
          className="rounded-md bg-purple-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Task
        </button>
        <div className="flex justify-center gap-4 mt-4">
          <p className="font-medium text-gray-900 ">
            Total tasks: {tasks.length}
          </p>
          <p className="font-medium text-gray-900 ">
            Completed tasks: {tasks.filter((task) => task.completed).length}
          </p>
        </div>
      </div>
      <ul>
        <div className="flex flex-wrap justify-stretch mt-4">
          {tasks.map((task) => (
            <article className="m-4 w-min max-w-3xl min-h-fit rounded-xl transition">
              <li key={task.id} className="rounded-[10px] bg-white p-4 sm:p-6">
                <div className="flex gap-10 flex-row items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => markTaskCompleted(task.id)}
                    className="h-5 w-5"
                  />
                  <h3 className="mt-0.5 text-lg text-left font-medium text-gray-900">
                    <span>{task.title}</span>
                  </h3>
                  <button
                    onClick={() => removeTask(task.id)}
                    className="rounded-md bg-purple-500 h-10 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            </article>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ToDoListPage;
