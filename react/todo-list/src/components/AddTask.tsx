import { useState } from "react";

const AddTask = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-zinc-500 flex flex-col gap-2 px-2 space-y-2 pb-4">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="p-1 rounded"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="p-1 rounded"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-zinc-600 text-white rounded-lg font-extrabold py-2 "
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddTask;
