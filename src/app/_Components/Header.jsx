import Image from "next/image";

export const Header = () => {
  return (
    <div>
      <div className="flex gap-2 ml-[15px] mt-[10px]">
        <Image src={"/leftPinecone.png"} alt="" width={30} height={30}></Image>
        <Image src={"/rightPinecone.png"} alt="" width={30} height={30}></Image>
      </div>
      <p className="text-3xl pt-[10px] ml-[15px]">Join us! 😎</p>
      <p className="text-xl pt-[5px] ml-[15px] opacity-[0.6]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
