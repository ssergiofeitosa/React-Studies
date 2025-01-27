import Button from "./Button";
import Button2 from "./Button2";
function Digit({ onClickButton }) {
  return (
    <>
      <Button valor={"*"} onClickButton={onClickButton}></Button>
      <Button valor={"/"} onClickButton={onClickButton}></Button>
      <Button valor={"-"} onClickButton={onClickButton}></Button>
      <Button valor={"+"} onClickButton={onClickButton}></Button>

      <Button valor={"7"} onClickButton={onClickButton}></Button>
      <Button valor={"8"} onClickButton={onClickButton}></Button>
      <Button valor={"9"} onClickButton={onClickButton}></Button>
      <Button valor={"%"} onClickButton={onClickButton}></Button>

      <Button valor={"4"} onClickButton={onClickButton}></Button>
      <Button valor={"5"} onClickButton={onClickButton}></Button>
      <Button valor={"6"} onClickButton={onClickButton}></Button>
      <Button valor={"^"} onClickButton={onClickButton}></Button>

      <Button valor={"1"} onClickButton={onClickButton}></Button>
      <Button valor={"2"} onClickButton={onClickButton}></Button>
      <Button valor={"3"} onClickButton={onClickButton}></Button>
      <Button valor={"."} onClickButton={onClickButton}></Button>

      <Button2 valor={"0"} onClickButton={onClickButton}></Button2>
      <Button valor={"="} onClickButton={onClickButton}></Button>
      <Button valor={"C"} onClickButton={onClickButton}></Button>
    </>
  );
}

export default Digit;
