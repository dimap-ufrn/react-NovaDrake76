const MainButton = (props: { title: string | undefined; onClick: any }) => {
  return (
    <button
      className="bg-[#1962D1] w-full p-2 rounded-lg"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default MainButton;
