import InputMask from "react-input-mask";
import { useEffect, useState } from "react";

interface CepCalcProps {
  cep: string;
  setCep: (cep: string) => void;
  setFreight: (freight: number) => void;
}

const CepCalc = ({ cep, setCep, setFreight }: CepCalcProps) => {
  const [location, setLocation] = useState<any>();
  useEffect(() => {
    if (cep.replace(/\D/g, "").length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.erro) {
            setFreight(0);
            setLocation(
              <p className="p-0 text-sm text-red-600">CEP não encontrado</p>
            );
          } else {
            data.uf === "RN" ? setFreight(10) : setFreight(100);
            setLocation(
              <p className="p-0 text-sm">
                {data.logradouro + ", " + data.localidade + " - " + data.uf}
              </p>
            );
          }
        });
    } else {
      setFreight(0);
      setLocation("");
    }
  }, [cep]);

  return (
    <div className="flex flex-col gap-1 ">
      <div className="flex gap-2 items-center">
        <span>CEP</span>
        <InputMask
          mask="99999-999"
          maskChar=" "
          placeholder="00000-000"
          className="w-28 h-8 border-opacity-50 rounded-lg p-2 outline-none text-gray-500 bg-[#7EDECF]"
          value={cep}
          onChange={(e: { target: { value: string } }) =>
            setCep(e.target.value)
          }
        />
      </div>
      {location}
    </div>
  );
};

export default CepCalc;
