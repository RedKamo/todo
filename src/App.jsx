import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className=" bg-zinc-900 h-screen p-10 ">
      <article className=" container mx-auto ">
        <TaskForm />
        <TaskList />
      </article>
    </main>
  );
}

export default App;
