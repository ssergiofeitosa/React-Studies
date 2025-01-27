import { useState } from "react";
interface InputProps {
  variant: "text" | "radio" | "checkbox" | "select";
  name?: string;
  gender?: string;
  country?: string;
  languagesSpoken?: string[];
  newsetName: (newName: string) => void;
  newsetGender?: (newgender: string) => void;
  newsetCountry?: (newCountry: string) => void;
  newsetLanguages?: (newCountries: string[]) => void;
}
interface CountriesInterface{
    key:string
    name:string
}

const Input: React.FC<InputProps> = ({
  variant,
  name,
  languagesSpoken,
  newsetCountry,
  newsetGender,
  newsetLanguages,
  newsetName,
}) => {
  const countries:CountriesInterface[] = [
    { key: "AF", name: "Afeganistão" },
    { key: "ZA", name: "África do Sul" },
    { key: "AL", name: "Albânia" },
    { key: "DZ", name: "Argélia" },
    { key: "AD", name: "Andorra" },
    { key: "AO", name: "Angola" },
    { key: "AR", name: "Argentina" },
    { key: "AM", name: "Armênia" },
    { key: "AU", name: "Austrália" },
    { key: "AT", name: "Áustria" },
    { key: "AZ", name: "Azerbaijão" },
    { key: "BS", name: "Bahamas" },
    { key: "BH", name: "Bahrein" },
    { key: "BD", name: "Bangladesh" },
    { key: "BB", name: "Barbados" },
    { key: "BY", name: "Belarus" },
    { key: "BE", name: "Bélgica" },
    { key: "BZ", name: "Belize" },
    { key: "BJ", name: "Benin" },
    { key: "BR", name: "Brasil" },
    { key: "CA", name: "Canadá" },
    { key: "CL", name: "Chile" },
    { key: "CN", name: "China" },
    { key: "CO", name: "Colômbia" },
    { key: "CR", name: "Costa Rica" },
    { key: "HR", name: "Croácia" },
    { key: "CU", name: "Cuba" },
    { key: "DK", name: "Dinamarca" },
    { key: "EG", name: "Egito" },
    { key: "SV", name: "El Salvador" },
    { key: "EE", name: "Estônia" },
    { key: "FI", name: "Finlândia" },
    { key: "FR", name: "França" },
    { key: "DE", name: "Alemanha" },
    { key: "GR", name: "Grécia" },
    { key: "IN", name: "Índia" },
    { key: "ID", name: "Indonésia" },
    { key: "IE", name: "Irlanda" },
    { key: "IT", name: "Itália" },
    { key: "JP", name: "Japão" },
    { key: "MX", name: "México" },
    { key: "NL", name: "Países Baixos" },
    { key: "NO", name: "Noruega" },
    { key: "PT", name: "Portugal" },
    { key: "RU", name: "Rússia" },
    { key: "ES", name: "Espanha" },
    { key: "SE", name: "Suécia" },
    { key: "CH", name: "Suíça" },
    { key: "TR", name: "Turquia" },
    { key: "UA", name: "Ucrânia" },
    { key: "GB", name: "Reino Unido" },
    { key: "US", name: "Estados Unidos" },
    { key: "VE", name: "Venezuela" },
    { key: "VN", name: "Vietnã" },
    { key: "ZW", name: "Zimbábue" }
  ];
  const [ggender, setGender] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [ccountry, setCountry] = useState("");

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //passa um evento como parameto
    const ischecked = event.target.checked; //guarda o bool da checkbox clicada
    const checkedLanguage = event.target.value; //guarda o valor("alternativa") da checkbox clicada

    //pode-se passar uma função implicita para o setState, nesse caso, essa função receberá o valor anterior do State
    //como argumento(nesse caso prevLanguages)
    setLanguages((prevLanguages) => {
      if (ischecked) {
        return [...prevLanguages, checkedLanguage];
      } else {
        return prevLanguages.filter((language) => language != checkedLanguage);
      }
    });
  };

  //o metodo filter retorna(faz copia) os elementos do array para qual retornaram True  para a condição dada
  return (
    <div className="flex flex-col">
      {variant === "text" && (
        <>
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Short answer text"
            value={name}
            onChange={(event) => newsetName(event.target.value)}
          />
        </>
      )}
      {variant === "radio" && (
        <>
          <form action="">
            <input
              type="radio"
              value={"Male"}
              name="rd"
              checked={ggender === "Male"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="Male">Male</label>
            <br />
            <input
              type="radio"
              value={"Female"}
              name="rd"
              checked={ggender === "Female"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="Female">Female</label>
            <br />
            <input
              type="radio"
              value={"Non-binary"}
              name="rd"
              checked={ggender === "Non-binary"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="Non-Binary">Non-Binary</label>
            <br />
            <input
              type="radio"
              value={"Other"}
              name="rd"
              checked={ggender === "Other"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="Other">Other</label>
          </form>
        </>
      )}
      {variant === "checkbox" && (
        <>
          <form action="">
            <input
              type="checkbox"
              name="1"
              value={"Portuguese"}
              checked={languages.includes("Portuguese")}
              onChange={(e) => {
                onCheckboxChange(e);
              }}
            />
            {/* (event) => setLanguages([event.target.value]) */}
            <label htmlFor="1">Portuguese</label>
            <br />
            <input
              type="checkbox"
              name="2"
              value={"English"}
              checked={languages.includes("English")}
              onChange={(e) => {
                onCheckboxChange(e);
              }}
            />
            <label htmlFor="2">English</label>
            <br />
            <input
              type="checkbox"
              name="3"
              value={"Spanish"}
              checked={languages.includes("Spanish")}
              onChange={(e) => {
                onCheckboxChange(e);
              }}
            />
            <label htmlFor="3">Spanish</label>
            <br />
            <input
              type="checkbox"
              name="4"
              value={"German"}
              checked={languages.includes("German")}
              onChange={(e) => {
                onCheckboxChange(e);
              }}
            />
            <label htmlFor="4">German</label>
          </form>
        </>
      )}
      {variant === "select" && (
        <>
          <form action="">
            <select name="" id="" onChange={(e) => newsetCountry?.(e.target.value)}>
              {countries.map((country) => (
                <option key={} value={country}>{country}</option>
              ))}
            </select>
          </form>
        </>
      )}
      <div className="bg-gray-300 w-[50%] h-[1px] left "></div>
    </div>
  );
};
export default Input;
