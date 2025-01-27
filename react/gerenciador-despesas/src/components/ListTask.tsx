
import { Trash2 } from "lucide-react"
const ListTask = () => (
  <div className="flex flex-row outline m-6 rounded-xl p-3 bg-gradient-to-r from-zinc-200 to-zinc-300 justify-between max-w-[600px]">
    <ul className="w-full">
      <li>
        <div className="flex flex-col h-fit text-justify w-full">
          <p className="break-words word-break w-full">
            <span className="font-bold">Despesa:</span> Compra grande no supermercado que excede o tamanho do container
          </p>
          <p className="break-words word-break w-full">
            <span className="font-bold">Valor:</span> R$ 350,00
          </p>
        </div>
      </li>
    </ul>
    
    {/* Botão de exclusão */}
    <button className="bg-zinc-800 text-fuchsia-50 h-8 w-[24px] rounded-md hover:bg-zinc-100 hover:text-zinc-800 font-bold ml-4">
      <Trash2 />
    </button>
  </div>
);

export default ListTask
