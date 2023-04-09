import { useState } from "react";
import MainButton from "../MainButton";
import CepCalc from "../CepCalc";

interface ResumeProps {
  items: any;
  cep: string;
  setCep: (cep: string) => void;
  freight: number;
  setFreight: (freight: number) => void;
  setOpenPaymentModal: (openPaymentModal: boolean) => void;
}

function Resume({
  items,
  cep,
  setCep,
  freight,
  setFreight,
  setOpenPaymentModal,
}: ResumeProps) {
  const resumeItems = [
    {
      section: "Resumo",
    },
    {
      section: "Frete",
      items: [
        {
          name: <CepCalc cep={cep} setCep={setCep} setFreight={setFreight} />,
          value: freight,
        },
      ],
    },
    {
      items: [
        {
          name: `Itens (${items.reduce(
            (acc: any, item: any) => acc + item.quantity,
            0
          )})`,
          value: items.reduce(
            (
              acc: any,
              item: {
                quantity: any;
                price: any;
              }
            ) => acc + item.price * item.quantity,
            0
          ),
        },
        {
          name: "Frete",
          value: freight,
        },
      ],
    },
  ];

  let formatting_options = {
    style: "currency",
    currency: "brl",
    minimumFractionDigits: 2,
  };

  return (
    <div className="flex flex-col p-4 bg-[#03C3A4] rounded-lg text-white w-80  text-xl">
      {resumeItems.map((item, index) => (
        <div
          key={index}
          className=" border-b-2 border-gray-50 border-opacity-50 pt-2 pb-2"
        >
          <h3 className="font-bold">{item.section}</h3>
          {item.items?.map((item, index) => (
            <div key={index} className="flex justify-between">
              <p className="text-lg">{item.name}</p>
              <p>
                {new Intl.NumberFormat("pt-BR", formatting_options).format(
                  item.value
                )}
              </p>
            </div>
          ))}
        </div>
      ))}
      <div className="flex justify-between pt-2">
        <h3 className="font-bold">Total</h3>
        <h3 className="font-bold">
          {new Intl.NumberFormat("pt-BR", formatting_options).format(
            items.reduce(
              (
                acc: any,
                item: {
                  quantity: any;
                  price: any;
                }
              ) => acc + item.price * item.quantity,
              0
            ) + freight
          )}
        </h3>
      </div>
      <div className="mt-2 w-full">
        <MainButton
          title="Finalizar compra"
          disable={items.length === 0 || freight === 0}
          onClick={() => {
            setOpenPaymentModal(true);
          }}
        />
      </div>
    </div>
  );
}

export default Resume;
