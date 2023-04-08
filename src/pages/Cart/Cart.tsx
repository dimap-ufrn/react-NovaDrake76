import { useState } from "react";
import Resume from "./Resume";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { BsFillTrash3Fill } from "react-icons/bs";
import Empty from "../../images/empty.webp";

interface CartProps {
  items: any;
  setItems: any;
}

function Cart({ items, setItems }: CartProps) {
  const [cep, setCep] = useState("");
  const [freight, setFreight] = useState(0);

  let formatting_options = {
    style: "currency",
    currency: "brl",
    minimumFractionDigits: 2,
  };

  return (
    <div className=" flex items-center justify-center  ">
      <div className="flex justify-between gap-8 p-4 rounded-lg bg-white shadow-xl">
        <div className="flex flex-col w-[500px] ">
          <h2 className="text-3xl font-bold underline">Carrinho de compras</h2>
          {items.length > 0 ? (
            <div>
              <p>
                Você tem{" "}
                {items.reduce((acc: any, item: any) => acc + item.quantity, 0)}{" "}
                {items.length > 1 ? "itens" : "item"}
              </p>
              <div className="flex flex-col gap-4 mt-4 h-60 overflow-scroll">
                {items.map((item: any) => (
                  <div className="flex items-center gap-6 border-t-2 p-2 border-[#b0c5da] justify-between">
                    <div className="flex items-center gap-4 w-72">
                      <img
                        src={item.img}
                        alt={"item"}
                        width="100px"
                        height="100px"
                        className="object-cover rounded-xl"
                      />
                      <div className="flex flex-col ">
                        <span className="text-lg">{item.name}</span>
                        <span className="text-sm text-ellipsis">
                          {item.description}
                        </span>

                        <span className="text-base">
                          {new Intl.NumberFormat(
                            "pt-BR",
                            formatting_options
                          ).format(item.price)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span>{item.quantity}</span>
                      <div className="flex flex-col">
                        {["add", "remove"].map((action) => (
                          <button
                            className={`
                              ${action === "add" ? "-mb-1" : "-mt-1"} text-xl ${
                              item.quantity === 1 &&
                              action === "remove" &&
                              "text-gray-300"
                            }`}
                            disabled={
                              action === "remove" && item.quantity === 1
                            }
                            onClick={() => {
                              setItems(
                                items.map((i: any) => {
                                  if (i.name === item.name) {
                                    return {
                                      ...i,
                                      quantity:
                                        action === "add"
                                          ? i.quantity + 1
                                          : i.quantity - 1,
                                    };
                                  }
                                  return i;
                                })
                              );
                            }}
                          >
                            {action === "add" ? (
                              <IoMdArrowDropup />
                            ) : (
                              <IoMdArrowDropdown />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                    <span className="text-base">
                      {new Intl.NumberFormat(
                        "pt-BR",
                        formatting_options
                      ).format(item.price * item.quantity)}
                    </span>
                    <button
                      className="text-xl"
                      onClick={() => {
                        setItems(
                          items.filter((i: any) => i.name !== item.name)
                        );
                      }}
                    >
                      <BsFillTrash3Fill />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full h-full items-center justify-center">
              <img src={Empty} alt="empty" width={200} />
              <p className="text-lg ">Seu carrinho está vazio...</p>
            </div>
          )}
        </div>
        <Resume
          items={items}
          cep={cep}
          setCep={setCep}
          freight={freight}
          setFreight={setFreight}
        />
      </div>
    </div>
  );
}

export default Cart;
