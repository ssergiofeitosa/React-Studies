function Button({ valor, onClickButton }) {
  return (
    <button
      className="bg-slate-100 text-black font-bold text-lg outline outline-1 w-[58px] h-[58px]"
      onClick={() => {
        onClickButton(valor);
      }}
    >
      {valor}
    </button>
  );
}

export default Button;
