import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;

    console.log(result);
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.droppableId
    )
      return;

    let add,
      active = tasks,
      complete = completedTasks;

    if (source.droppableId === "TaskList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      active.splice(source.index, 1);
    }

    if (destination.droppableId === "TaskFinished") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTasks(complete);
    setTasks(active);
  };

  return (
    <TaskContext.Provider
      value={{
        //tasks : tasks,
        //deleteTask : deleteTask,
        //createTask : createTask,
        //or if its the same value
        tasks,
        deleteTask,
        createTask,
        setTasks,
        onDragEnd,
        setCompletedTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
