import { useState } from "react";
import ItemsList from "./ItemsList";
import Resume from "./Resume";

function Cart() {
  const [items, setItems] = useState([]);
  const [cep, setCep] = useState("");
  const [freight, setFreight] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex max-w-5xl w-full justify-between gap-4">
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold underline">Carrinho de compras</h1>
          {items.length > 0 ? (
            <div>
              {" "}
              <p>
                Você tem {items.length} {items.length > 1 ? "itens" : "item"}
              </p>
              <ItemsList />
            </div>
          ) : (
            <p>Não há itens no carrinho</p>
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
