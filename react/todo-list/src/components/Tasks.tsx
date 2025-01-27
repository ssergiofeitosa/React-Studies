import { Trash2 } from "lucide-react";

const Tasks = ({ tasks, onDeleteTaskClick }) => {
  return (
    <ul className="m-2 ">
      {tasks.map((task) => (
        <li key={task.id}>
          <div className="flex">
            <h1 className="font-bold bg-zinc-400 p-1 rounded-md w-full">
              {task.title}
            </h1>
            <button
              className="text-white bg-zinc-800 h-8 rounded-md"
              onClick={() => {
                onDeleteTaskClick(task.id);
              }}
            >
              <Trash2></Trash2>
            </button>
          </div>

          <div className="">
            <p className="bg-zinc-200 p-1 rounded-sm text-justify">
              {task.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
