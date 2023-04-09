import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import React from "react";

const MainButton = (props: { title: any; onClick: any; disable: boolean }) => {
  return (
    <React.Fragment>
      <Tooltip id="tooltip" />
      <button
        className="bg-[#2070BF] w-full p-2 rounded-lg text-white hover:bg-[#2070BF]/90 transition-all disabled:bg-[#2070BF]/60"
        disabled={props.disable}
        onClick={props.onClick}
        data-tooltip-id="tooltip"
        data-tooltip-content={
          props.disable && props.title === "Finalizar compra"
            ? "Adicione itens ao carrinho e coloque o CEP!"
            : ""
        }
      >
        {props.title}
      </button>
    </React.Fragment>
  );
};

export default MainButton;
