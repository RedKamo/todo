import { useState, useContext } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <article className=" max-w-md mx-auto bg-blue-500 ">
      <form className=" bg-slate-800 p-10 mb-4 " onSubmit={handleSubmit}>
        <input
          placeholder="Add a task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className=" bg-slate-300 p-2 w-full mb-4 rounded-md"
        />
        <textarea
          placeholder="Add description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-2 w-full mb-4 rounded-md"
        ></textarea>
        <button className=" inset-x-0 top-0	 bg-green-700 hover:bg-green-500 px-4 py-1 text-white rounded-md w-fit ">
          Save
        </button>
      </form>
    </article>
  );
}

export default TaskForm;
