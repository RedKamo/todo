import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const onDragEnd = (result) => {
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className=" bg-zinc-900 h-screen p-10 ">
        <article className=" container mx-auto ">
          <TaskForm />
          <TaskList />
        </article>
      </main>
    </DragDropContext>
  );
}

export default App;
