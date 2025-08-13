// @ts-expect-error: Missing type declarations for Tasks component in JSX
import Tasks from "./components/Tasks";
// @ts-expect-error: Missing type declarations for AddTask component
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
// @ts-expect-error: Missing type declarations for Title component
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") ?? '[]')
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))  
  }, [tasks])
  
  //useEffect(() => {
    //const fetchTasks = async () => {
      //const response = await fetch(
        //"https://jsonplaceholder.typicode.com/todos?_limit=10",
        //{
         // method: 'GET'
        //}
      //);
      //const data = await response.json();
      //setTasks(data)
    //}
    //Se quiser ativar API
    //fetchTasks();
  //}, [])
  
  function onTaskClick(taskId: string) {
    const newTasks = tasks.map((task: { id: string; isCompleted: unknown; }) => {
      // preciso atualizar essa tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        // não preciso atualizar essa tarefa
        return task;
      }
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId: string) {
    const newTasks = tasks.filter((task: { id: string; }) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title: string, description: string) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
