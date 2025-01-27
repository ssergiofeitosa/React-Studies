import Input from "./Input";
interface ContainerProps {
  label: string;
  variant: "text" | "radio" | "checkbox" | "select";
  name?: string;
  gender?: string;
  country?: string;
  languagesSpoken?: string[];
  newsetName?: (newName: string) => void;
  newsetGender?: (newgender: string) => void;
  newsetCountry?: (newCountry: string) => void;
  newsetLanguages?: (newCountries: string[]) => void;
}
const Container: React.FC<ContainerProps> = ({
  label,
  variant,
  name,
  languagesSpoken,
  newsetCountry,
  newsetGender,
  newsetLanguages,
  newsetName,
}) => {
  return (
    <>
      <div className="bg-purple-50 outline w-[640px] minh-[128px] rounded-lg outline-violet-200 outline-1 drop-shadow py-4 px-5 ">
        <h1 className="font-semibold pb-5">
          {label}
          <span className="text-red-600">*</span>
        </h1>
        <Input
          name={name}
          variant={variant}
          newsetName={newsetName}
          newsetGender={newsetGender}
          newsetLanguages={newsetLanguages}
          newsetCountry={newsetCountry}
          languagesSpoken={languagesSpoken}
        ></Input>
      </div>
    </>
  );
};
export default Container;
