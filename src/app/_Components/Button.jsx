import { ChevronRight, ChevronLeft } from "lucide-react";

export const Button = ({ onClick, text, type, bgColor }) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${
        type === "next" ? "text-white" : "text-black"
      } rounded-sm  h-[30px] p-5 flex items-center justify-center text-[20px] gap-2  cursor-pointer`}
    >
      {type === "prev" && <ChevronLeft />}
      {text}
      {type === "next" && <ChevronRight />}
    </button>
  );
};
