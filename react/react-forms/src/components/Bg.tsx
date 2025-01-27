import { ReactNode } from "react";

interface BgProps {
  children?: ReactNode;
}

const Bg: React.FC<BgProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen h-fit w-screen bg-violet-100 flex flex-col items-center py-5 gap-3 ">
        {children}
      </div>
    </>
  );
};
export default Bg;
