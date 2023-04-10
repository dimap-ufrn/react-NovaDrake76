import Cart from "./Cart/Cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Logo from "../images/logo.png";

interface NavbarProps {
  items: any;
  setItems: any;
}

function Navbar({ items, setItems }: NavbarProps) {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className=" w-screen p-4 h-16 bg-[#03C3A4] flex items-center justify-center shadow-lg z-10 fixed">
      <div className="flex max-w-7xl justify-between w-full">
        <img
          src={Logo}
          alt="logo"
          width={"150px"}
          onClick={() => {
            window.scrollTo({
              top: 0,

              behavior: "smooth",
            });
          }}
          className="cursor-pointer"
        />
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setOpenCart(!openCart)}
        >
          <AiOutlineShoppingCart size={30} />
          <div
            className={`bg-red-500 rounded-full w-6 h-6 ${
              items.length > 0
                ? "bg-red-500 text-white"
                : "bg-transparent text-transparent"
            } flex items-center justify-center -ml-2 -mb-4`}
          >
            {items.reduce((acc: any, item: any) => acc + item.quantity, 0)}
          </div>
        </div>
        <div
          className={`absolute flex justify-end mt-16 left:0 lg:left-[calc(33%-10vw)] xl:left-[calc(40%-5vw)] 2xl:left-[calc(50%-10vw)] transition-all ${
            openCart === false
              ? "opacity-0 -z-10 h-0 overflow-hidden"
              : "opacity-100 z-10 "
          }`}
        >
          <Cart items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
