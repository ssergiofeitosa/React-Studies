import Digit from "./Digit";
function Inputs({ onClickButton }) {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-2   w-[240px] pt-2">
      <Digit onClickButton={onClickButton}></Digit>
    </div>
  );
}

export default Inputs;
