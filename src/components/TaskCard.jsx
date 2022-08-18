import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h1 className="text-xl  font-bold capitalize">{task.title}</h1>
      <p className=" text-gray-500 text-sm ">{task.description}</p>
      <button
        className=" text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        onClick={() => deleteTask(task.id)}
      >
        Delete task
      </button>
    </div>
  );
}

export default TaskCard;
