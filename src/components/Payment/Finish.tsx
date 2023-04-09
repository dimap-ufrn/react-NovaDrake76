import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Going from "../../images/going.webp";
import Making from "../../images/making.webp";
import MainButton from "../MainButton";

interface FinishProps {
  setOpen: (open: boolean) => void;
  setItems: (items: any) => void;
}

function Finish({ setOpen, setItems }: FinishProps) {
  const [step, setStep] = useState(0);

  const changeStep = () => {
    setTimeout(() => {
      setStep(1);
    }, 3000);
    setTimeout(() => {
      setStep(2);
    }, 5000);
  };

  useEffect(() => {
    changeStep();
  }, []);

  useEffect(() => {
    if (step === 2) {
      setItems([]);
    }
  }, [step]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={false}
        autoPlay={true}
        interval={3000}
        transitionTime={2000}
        showArrows={false}
        stopOnHover={false}
        swipeable={false}
        emulateTouch={false}
        dynamicHeight={false}
      >
        <img
          src={Making}
          alt="making"
          width={150}
          height={200}
          className="w-[150px] h-[400px] object-contain"
        />
        <img
          src={Going}
          alt="going"
          className="w-[150px] h-[400px] object-contain"
        />
      </Carousel>
      <h2
        className={`text-3xl font-bold transition-all text-center ${
          step === 0 || step === 2 ? "opacity-100" : "opacity-0"
        } `}
      >
        {step === 0 || step === 1
          ? "Seu pedido está sendo preparado e logo será enviado"
          : step === 2 && "Seu pedido já foi enviado!"}
      </h2>

      <div
        className={`transition-all ${
          step === 2 ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        <MainButton
          title="Voltar para a loja"
          disable={false}
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
}

export default Finish;
