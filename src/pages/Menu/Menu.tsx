import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Pizza from "../../images/pizza.webp";
// import Burguer from "../../images/burguer.webp";
import Fries from "../../images/fries.webp";

function Menu() {
  const [items, setItems] = useState<any>([]);
  const menu = [
    {
      id: 0,
      name: "Pizza",
      price: 19.99,
      quantity: 1,
      description: "Pizza de calabresa",
      img: Pizza,
    },
    {
      id: 1,
      name: "Burger",
      price: 11.99,
      quantity: 1,
      description: "Burger de frango",
      img: Pizza,
    },
    {
      id: 2,
      name: "Fries",
      price: 4.99,
      quantity: 1,
      description: "Batata frita fritafritafritafrita",
      img: Fries,
    },
  ];

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
  };

  return (
    <div>
      <Navbar items={items} setItems={setItems} />
      <div>
        {menu.map((item) => (
          <div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <button
              onClick={() => {
                addItem(item);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
