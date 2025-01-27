interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <h1 className="text-4xl text-zinc-800 pb-2 font-medium">{title}</h1>
    </>
  );
};
export default Title;
