import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Pizza from "../../images/pizza.webp";
import Burguer from "../../images/burguer.webp";
import Fries from "../../images/fries.webp";
import MenuItem from "../../components/MenuItem";
import Bg from "../../images/bg.webp";

function Menu() {
  const [items, setItems] = useState<any>([]);
  const menu = [
    {
      id: 0,
      name: "Pizza",
      price: 19.99,
      quantity: 1,
      description: "Pizza de calabresa com queijo.",
      img: Pizza,
    },
    {
      id: 1,
      name: "Burger",
      price: 11.99,
      quantity: 1,
      description: "Burger 200 gramas de carne.",
      img: Burguer,
    },
    {
      id: 2,
      name: "Fries",
      price: 4.99,
      quantity: 1,
      description: "Batata frita da casa.",
      img: Fries,
    },
  ];

  return (
    <div>
      <Navbar items={items} setItems={setItems} />
      <div className={`flex w-full justify-center h-screen bg-hero`}>
        <div className="max-w-7xl shadow-sm flex w-full justify-around items-center gap-4 md:gap-0 mt-4 md:mt-0 flex-col md:flex-row">
          {menu.map((item) => (
            <MenuItem item={item} items={items} setItems={setItems} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
