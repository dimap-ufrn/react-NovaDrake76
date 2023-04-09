import { BsFillTrash3Fill } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface CartItemProps {
  item: any;
  items: any;
  setItems: any;
}

let formatting_options = {
  style: "currency",
  currency: "brl",
  minimumFractionDigits: 2,
};

function CartItem({ item, items, setItems }: CartItemProps) {
  return (
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
          <span className="text-sm text-ellipsis">{item.description}</span>

          <span className="text-base">
            {new Intl.NumberFormat("pt-BR", formatting_options).format(
              item.price
            )}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <span>{item.quantity}</span>
        <div className="flex flex-col">
          {["add", "remove"].map((action) => (
            <button
              key={action}
              className={`
              ${action === "add" ? "-mb-1" : "-mt-1"} text-xl ${
                item.quantity === 1 && action === "remove" && "text-gray-300"
              }`}
              disabled={action === "remove" && item.quantity === 1}
              onClick={() => {
                setItems(
                  items.map((i: any) => {
                    if (i.name === item.name) {
                      return {
                        ...i,
                        quantity:
                          action === "add" ? i.quantity + 1 : i.quantity - 1,
                      };
                    }
                    return i;
                  })
                );
              }}
            >
              {action === "add" ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </button>
          ))}
        </div>
      </div>
      <span className="text-base">
        {new Intl.NumberFormat("pt-BR", formatting_options).format(
          item.price * item.quantity
        )}
      </span>
      <button
        className="text-xl"
        onClick={() => {
          setItems(items.filter((i: any) => i.name !== item.name));
        }}
      >
        <BsFillTrash3Fill />
      </button>
    </div>
  );
}

export default CartItem;
