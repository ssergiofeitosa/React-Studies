export default function Button2({ valor, onClickButton }) {
  return (
    <button
      className="bg-slate-100 text-black font-bold col-span-2 text-lg outline outline-1 w-[116px] h-[58px]"
      onClick={() => {
        onClickButton(valor);
      }}
    >
      {valor}
    </button>
  );
}
