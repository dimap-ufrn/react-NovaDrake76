import MainButton from "./MainButton";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";

interface CartItemProps {
  item: any;
  items: any;
  setItems: any;
}

function MenuItem({ item, items, setItems }: CartItemProps) {
  const [disableButton, setDisableButton] = useState(false);
  const addItem = (item: any) => {
    const itemExists = items.find((i: any) => i.name === item.name);
    if (itemExists) {
      setItems(
        items.map((i: any) => {
          if (i.name === item.name) {
            return { ...i, quantity: i.quantity + 1 };
          }
          return i;
        })
      );
    } else {
      setItems([...items, item]);
    }
    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
    }, 1000);
  };

  let formatting_options = {
    style: "currency",
    currency: "brl",
    minimumFractionDigits: 2,
  };

  return (
    <div
      className="flex flex-col rounded overflow-hidden bg-white h-fit shadow-md w-fit max-w-[256px]"
      key={item.id}
    >
      <div className="overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="object-cover w-64 h-52 hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col p-4 gap-1">
        <span className="text-xl font-medium">{item.name}</span>
        <span className="text-lg text-[#78838c] text">{item.description}</span>

        <MainButton
          title={
            disableButton ? (
              <span className="flex w-full justify-center items-center">
                <span>Adicionado</span>
                <BsCheck size={24} />
              </span>
            ) : (
              <span className="flex w-full justify-between pl-4 pr-4">
                <span>Adicionar</span>
                <span>
                  {item.price.toLocaleString("pt-BR", formatting_options)}
                </span>
              </span>
            )
          }
          disable={disableButton}
          onClick={() => {
            addItem(item);
          }}
        />
      </div>
    </div>
  );
}

export default MenuItem;
