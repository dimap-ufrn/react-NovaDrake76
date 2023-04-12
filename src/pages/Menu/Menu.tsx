import { useState } from "react";

import Navbar from "../../components/Navbar";
import MenuItem from "../../components/MenuItem";
import MenuItems from "./MenuList";

function Menu() {
  const [items, setItems] = useState<any>([]);

  return (
    <div className="bg-hero">
      <div className="h-16">
        <Navbar items={items} setItems={setItems} />
      </div>
      <div
        className={`flex flex-col gap-8 w-full min-h-screen justify-start md:justify-center items-center `}
      >
        {MenuItems.map((category) => {
          return (
            <div
              className="flex flex-col items-center gap-8 w-full justify-center p-4"
              key={category.name}
            >
              <div className="flex items-center">
                <img
                  src={category.image}
                  alt="category"
                  className="w-16 h-16 object-contain"
                />

                <span className="text-4xl font-bold ">{category.name}</span>
              </div>
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
