const AddTask = () => (
  <div className=" flex flex-col items-center gap-2  pb-4"><br />
    <input className="bg-zinc-200 h-8 w-[500px] outline outline-blue-200 rounded-md px-2" type="text" placeholder="Descreva a despesa" />
    <input className="bg-zinc-200 h-8 w-[500px] outline outline-blue-200 rounded-md px-2" type="text" placeholder="ex:2.000,00"/>
    <button className="bg-zinc-800 text-fuchsia-50 h-8 w-[100px] rounded-xl hover:bg-zinc-100 hover:text-zinc-800 font-bold">Adicionar</button>
  </div>
);

export default AddTask