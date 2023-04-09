import { BsX } from "react-icons/bs";
import { useState, useEffect } from "react";

import PaymentStep from "./PaymentStep";
import Finish from "./Finish";

interface PaymentModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setItems: (items: any) => void;
}

function PaymentModal({ open, setOpen, setItems }: PaymentModalProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
  }, [open]);

  if (!open) {
    return null;
  } else {
    return (
      <div
        className={`w-screen h-screen bg-black/20 fixed top-0 left-0 flex items-center justify-center`}
      >
        <div className="bg-white w-[500px] h-[600px] rounded-lg flex flex-col items-center p-4 shadow-sm">
          <div
            className="flex w-full justify-end"
            onClick={() => setOpen(false)}
          >
            <BsX className="text-3xl text-gray-500 cursor-pointer" />
          </div>
          {step === 0 ? (
            <PaymentStep setStep={setStep} />
          ) : (
            <Finish setOpen={setOpen} setItems={setItems} />
          )}
        </div>
      </div>
    );
  }
}

export default PaymentModal;
