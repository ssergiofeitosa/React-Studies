import "./App.css";
import Bg from "./components/Bg";
import Container from "./components/Container";
import HeadingContainer from "./components/HeadingContainer";
import Title from "./components/Title";
import SubmitButton from "./components/SubmitButton";
import { useState } from "react";
interface Person {
  name: string;
  languagesSpoken: string[];
  gender: string;
  nationality: string;
}
function App() {
  const [formdata, setFormdata] = useState<Person>({
    name: "",
    languagesSpoken: [""],
    gender: "",
    nationality: "",
  });

  function onSubmitButtonClick(
    name: string,
    gender: string,
    nationality: string,
    languagesSpoken: string[]
  ) {
    const newformData = {
      name,
      gender,
      nationality,
      languagesSpoken,
    };
    setFormdata(newformData);
  }
  return (
    <>
      <Bg>
        <HeadingContainer>
          <Title title={"Forms"}></Title>
        </HeadingContainer>
        <Container
          label={"Name"}
          variant={"text"}
          name={formdata.name}
          newsetName={(newName: string) =>
            setFormdata((prev) => ({ ...prev, name: newName }))
          }
        ></Container>
        <Container
          label={"Which of these languages do you speak?"}
          variant={"checkbox"}
          languagesSpoken={formdata.languagesSpoken}
        ></Container>
        <Container
          label={"Country"}
          variant={"select"}
          country={formdata.nationality}
        ></Container>
        <Container
          label={"Gender "}
          variant={"radio"}
          gender={formdata.gender}
        ></Container>
        <SubmitButton onSubmitButtonClick={onSubmitButtonClick}></SubmitButton>
      </Bg>

      {/* missing:validations*/}
    </>
  );
}

export default App;
