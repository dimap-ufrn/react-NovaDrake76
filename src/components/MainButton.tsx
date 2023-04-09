const MainButton = (props: { title: any; onClick: any; disable: boolean }) => {
  return (
    <button
      className="bg-[#2070BF] w-full p-2 rounded-lg text-white hover:bg-[#2070BF]/90 transition-all disabled:bg-[#2070BF]/80"
      disabled={props.disable}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default MainButton;
