import Payment from "../../images/payment.webp";
import PIX from "../../images/pix.png";
import Gpay from "../../images/gpay.png";
import Paypal from "../../images/paypal.png";
import InputMask from "react-input-mask";
import MainButton from "../MainButton";
import { SetStateAction, useState } from "react";

interface PaymentStepProps {
  setStep: (step: SetStateAction<number>) => void;
}

function PaymentStep({ setStep }: PaymentStepProps) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardValid, setCardValid] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const line = () => {
    return <div className="w-1/4 h-[2px] bg-gray-100" />;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img src={Payment} alt="payment" width={150} height={182} />
      <h2 className="text-3xl font-bold underline">Pagamento</h2>
      <div className="flex gap-4">
        {[PIX, Gpay, Paypal].map((item, index) => (
          <button
            className="flex items-center justify-center w-32 mt-4 p-2 rounded-lg bg-gray-100"
            key={index}
            onClick={() => {
              setStep(1);
            }}
          >
            <img src={item} alt={item} width={70} height={30} />
          </button>
        ))}
      </div>
      <div className="flex gap-2 w-full items-center justify-center">
        {line()}
        <span className="text-gray-400">ou pague com o cartão</span>
        {line()}
      </div>
      <form className="flex flex-col gap-2 w-5/6 ">
        {[
          {
            placeholder: "Nome do titular",
            mask: "",
            value: cardName,
            setValue: setCardName,
          },
          {
            placeholder: "Número do cartão",
            mask: "9999 9999 9999 9999",
            value: cardNumber,
            setValue: setCardNumber,
          },
        ].map((item, index) => (
          <InputMask
            key={index}
            mask={item.mask}
            placeholder={item.placeholder}
            className="p-2 rounded-lg border border-gray-200"
            value={item.value}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              item.setValue(e.target.value)
            }
          />
        ))}
        <div className="flex gap-2">
          {[
            {
              placeholder: "Validade",
              mask: "99/99",
              value: cardValid,
              setValue: setCardValid,
            },
            {
              placeholder: "CVV",
              mask: "999",
              value: cardCvv,
              setValue: setCardCvv,
            },
          ].map((item, index) => (
            <InputMask
              key={index}
              mask={item.mask}
              placeholder={item.placeholder}
              className="p-2 rounded-lg border border-gray-200 w-1/2"
              value={item.value}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                item.setValue(e.target.value)
              }
            />
          ))}
        </div>
        <MainButton
          title="Realizar Pagamento"
          onClick={() => {
            setStep(1);
          }}
          disable={
            cardNumber.replace("_", "").length < 19 ||
            cardName.length < 1 ||
            cardValid.length < 5 ||
            cardCvv.replace("_", "").length < 3
          }
        />
      </form>
    </div>
  );
}

export default PaymentStep;
