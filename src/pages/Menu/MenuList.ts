import Pizza from "../../images/pizza.webp";
import Burguer from "../../images/burguer.webp";
import Fries from "../../images/fries.webp";
import Pastel from "../../images/pastel.webp";
import Snacks from "../../images/snacks.webp";
import Drinks from "../../images/drinks.webp";
import Coca from "../../images/coca.webp";
import Fanta from "../../images/fanta.webp";
import Sprite from "../../images/sprite.webp";
import Guarana from "../../images/guarana.webp";

const MenuItems = [
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
        name: "Pastel",
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
        img: Coca,
      },
      {
        id: 5,
        name: "Guaraná",
        price: 2.99,
        quantity: 1,
        description: "Guaraná Lata.",
        img: Guarana,
      },
      {
        id: 6,
        name: "Fanta",
        price: 2.99,
        quantity: 1,
        description: "Fanta Laranja Lata.",
        img: Fanta,
      },
      {
        id: 7,
        name: "Sprite",
        price: 2.99,
        quantity: 1,
        description: "Soda Sprite Lata.",
        img: Sprite,
      },
    ],
  },
];

export default MenuItems;