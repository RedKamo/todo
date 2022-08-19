import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Droppable } from "react-beautiful-dnd";

function TaskList() {
  const { tasks, completedTasks, setCompletedTasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className=" text-white font-black text-4xl text-center pt-5 ">
        No tasks
      </h1>
    );
  }

  return (
    <main className="text-white flex">
      <Droppable droppableId="TaskList">
        {(provided) => (
          <article
            className="flex-1"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1>tasks</h1>
            <div className="flex flex-col gap-4 p-4 bg-slate-700 rounded-lg">
              {tasks.map((task, index) => (
                <TaskCard index={index} key={task.id} task={task} />
              ))}
            </div>
            {provided.placeholder}
          </article>
        )}
      </Droppable>
    </main>
  );
}

export default TaskList;
