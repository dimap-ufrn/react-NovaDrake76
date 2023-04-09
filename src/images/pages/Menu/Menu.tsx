import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Pizza from "../../images/pizza.webp";
import Burguer from "../../images/burguer.webp";
import Fries from "../../images/fries.webp";
import MenuItem from "../../components/MenuItem";
import Pastel from "../../images/pastel.webp";
import Snacks from "../../images/snacks.webp";
import Drinks from "../../images/drinks.webp";

function Menu() {
  const [items, setItems] = useState<any>([]);
  const menu = [
    {
      name: "Lanches",
      image: Snacks,
      items: [
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
          description: "Batata frita da casa, com molho especial.",
          img: Fries,
        },
        {
          id: 3,
          name: "Paster",
          price: 2.99,
          quantity: 1,
          description: "Pastel de carne com queijo 20x20cm.",
          img: Pastel,
        },
      ],
    },
    {
      name: "Bebidas",
      image: Drinks,
      items: [
        {
          id: 4,
          name: "Coca-Cola",
          price: 5.99,
          quantity: 1,
          description: "Coca-Cola Vidro 1L.",
          img: Pizza,
        },
        {
          id: 5,
          name: "Guaraná",
          price: 6.99,
          quantity: 1,
          description: "Guaraná 2L.",
          img: Burguer,
        },
        {
          id: 6,
          name: "Fanta",
          price: 5.99,
          quantity: 1,
          description: "Fanta Laranja 1L.",
          img: Fries,
        },
        {
          id: 7,
          name: "Sprite",
          price: 5.99,
          quantity: 1,
          description: "Soda Sprite 1L.",
          img: Pastel,
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar items={items} setItems={setItems} />
      <div
        className={`flex flex-col gap-8 w-full justify-center items-center h-screen bg-hero overflow-y-hidden`}
      >
        {menu.map((category) => {
          return (
            <div className="flex flex-col items-center gap-8 w-full justify-center">
              <h1 className="text-4xl font-bold ">{category.name}</h1>
              <div className="max-w-7xl  flex w-full justify-center items-center gap-4 mt-4 md:mt-0 flex-col md:flex-row flex-wrap">
                {category.items.map((item) => (
                  <MenuItem item={item} items={items} setItems={setItems} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
