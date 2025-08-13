// @ts-expect-error: Missing type declarations for Tasks component in JSX
import Tasks from "./components/Tasks";
// @ts-expect-error: Missing type declarations for AddTask component
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Inglês",
      description: "Estudar inglês para se tornar fluente",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Matemática",
      description: "Estudar matemática para se tonar professor",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId: number) {
    const newTasks = tasks.map((task) => {
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

  function onDeleteTaskClick(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
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
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask
          onAddTaskSubmit={onAddTaskSubmit}
        />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
