import "./App.css";
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Container from './components/Container';
import { useState } from "react";
import { v4 as uuidv4, v4 } from 'uuid';


interface Despesa{
  id:string,
  descricao:string,
  valor:number
}
function App() {
  const [despesa,setDespesa]=useState<Despesa[]>([])
  

  function onAddButtonClick(descricao:string,valor:number){
    const newDespesa = {
      id:v4(),
      descricao,
      valor,
    };
    
    setDespesa([...despesa,newDespesa])
  }
  return (
    <>
      <div className="min-h-screen w-screen h-fit bg-zinc-200  flex flex-col pt-4 items-center  gap-[30px] bg-gradient-to-br from-slate-200 via-zinc-400 to-gray-300">
        <Container title="Gerenciador de Despesas">
          <AddTask></AddTask>
        </Container>
        <Container title="Lista de Despesas">
          <ListTask></ListTask>
        </Container>
      </div>
    </>
  );
}

export default App;
