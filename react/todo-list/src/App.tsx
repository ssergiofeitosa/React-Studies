import { v4 } from "uuid";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
  interface TaskType {
    id: string;
    title: string;
    description: string;
  }
  //const [tasks, setTasks] = useState<TaskType[]>([]);
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    //o valor inicial é uma func de inicialização que tenta recuperar a string armazenada no localStorage(armazena strings)
    //  associado à key "tasks", se houver conteúdo, a string é transformada em objeto e é retornada, senão, retorna lista vazia
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []; //no JSONparse, transforma a string armazenada em objeto novamente
  });

  //useEffect(()=>{},var/State/etc)::dispara a função sempre que var/State/etc 'muda'
  //no caso abaixo, sempre que uma taska é add ou deletada, a função dispara, sobrescrevendo as tasks antigas com as atuais
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //transforma tasks em uma string para ser armaz. no localStorage
  }, [tasks]);
  function onAddTaskSubmit(title: string, description: string) {
    const newTask: TaskType = {
      id: v4(),
      title: title,
      description: description,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function onDeleteTaskClick(taskID: string) {
    const filteredTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(filteredTasks);
  }
  console.log(tasks);

  return (
    <div className="bg-zinc-700 h-screen w-screen flex justify-center py-10">
      <div className="w-[600px]  bg-zinc-500 rounded-md max-h-[80vh] overflow-y-auto p-4 space-y-4 ">
        <h1 className="text-3xl text-zinc-100 font-bold text-center">
          ToDo-List
        </h1>
        {/* inputs:titulo, descrição e button */}
        <AddTask onAddTaskSubmit={onAddTaskSubmit}></AddTask>
        {/* tarefas adicionadas */}
        <Tasks tasks={tasks} onDeleteTaskClick={onDeleteTaskClick}></Tasks>
      </div>
    </div>
  );
}

export default App;
