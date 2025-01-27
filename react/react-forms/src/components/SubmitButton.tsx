const SubmitButton = ({ onSubmitButtonClick }) => {
  //colocar isso na prop
  return (
    <>
      <button
        onClick={() => {
          onSubmitButtonClick();
        }}
        className="bg-purple-700  h-7 w-24 rounded-md drop-shadow items-center justify-center outline outline-1 outline-purple-900 border border-purple-800 pb-[30px]"
      >
        <span className="font-medium text-xl text-purple-100 ">Submit</span>
      </button>
    </>
  );
};
export default SubmitButton;
