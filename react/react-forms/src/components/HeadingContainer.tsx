import { ReactNode } from "react";
import GreyStrip from "./GreyStrip";
interface HeadingContainerProps {
  children?: ReactNode;
}

const HeadingContainer: React.FC<HeadingContainerProps> = ({ children }) => {
  return (
    <>
      <div className="bg-purple-50 outline w-[640px] h-fit rounded-lg outline-violet-200 outline-1 relative drop-shadow flex  justify-start pb-4">
        <div className="bg-purple-700 top-[-2px] left-[-2] w-[640px] h-2 absolute top  rounded-t-lg"></div>
        <div className="  pt-4 px-5">
          {children} <GreyStrip></GreyStrip>
          <br />
          <p className="text-sm text-justify font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            perferendis alias error sapiente tenetur, molestias quam quas
            quisquam unde distinctio eum ipsum, optio rem, sit sed eius. Iure,
            minima vitae.
          </p>
        </div>
      </div>
    </>
  );
};
export default HeadingContainer;
