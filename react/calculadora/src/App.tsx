import { useState } from "react";
import Inputs from "./components/Inputs";
import "./App.css";
import { evaluate } from "mathjs";
function App() {
  const [display, setDisplay] = useState("");

  function onClickButton(valor: string) {
    if (valor === "C") {
      setDisplay("");
    } else if (valor === "=") {
      setDisplay(evaluate(display));
    } else {
      const novoDisplay = display.concat(valor);
      setDisplay(novoDisplay);
    }
  }
  return (
    <div className="bg-slate-500 w-screen h-screen">
      <div className="flex justify-center pt-4">
        <div className="w-[296px] h-[416px] outline flex flex-col items-center  ">
          <h1 className="font-bold">Calculadora</h1>
          <input
            type="text"
            placeholder="Insira a operação"
            className="w-[240px] h-[48px] px-2 font text-3xl"
            value={display}
          />
          <Inputs onClickButton={onClickButton}></Inputs>
        </div>
      </div>
    </div>
  );
}

export default App;
