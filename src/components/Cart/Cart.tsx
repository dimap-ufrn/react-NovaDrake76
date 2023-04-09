import { useState } from "react";
import Resume from "./Resume";
import PaymentModal from "../Payment/PaymentModal";

import Empty from "../../images/empty.webp";
import CartItem from "./CartItem";

import Payment from "../../images/payment.webp";
import PIX from "../../images/pix.png";
import Gpay from "../../images/gpay.png";
import Paypal from "../../images/paypal.png";
import Going from "../../images/going.webp";
import Making from "../../images/making.webp";

interface CartProps {
  items: any;
  setItems: any;
}

function Cart({ items, setItems }: CartProps) {
  const [cep, setCep] = useState("");
  const [freight, setFreight] = useState(0);
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);

  function preload_image(im_url: string) {
    let img = new Image();

    img.src = im_url;
  }

  [Payment, PIX, Gpay, Paypal, Going, Making].map((item) =>
    preload_image(item)
  );

  return (
    <div className=" flex items-center justify-center  ">
      <PaymentModal open={openPaymentModal} setOpen={setOpenPaymentModal} />
      <div className="flex  flex-col md:flex-row justify-between gap-8 p-2 md:p-4 rounded-lg bg-white shadow-xl">
        <div className="flex flex-col w-full md:w-[500px] ">
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
                  <CartItem item={item} items={items} setItems={setItems} />
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
          setOpenPaymentModal={setOpenPaymentModal}
        />
      </div>
    </div>
  );
}

export default Cart;
