import Image from "next/image";

export const Success = () => {
  return (
    <div className="flex justify-center items-center mt-[150px]">
      <div className="w-[480px] h-[200px] bg-[#F3F4F6] rounded-xl ">
        <div className="flex gap-2 ml-[40px] mt-[30px]">
          <Image
            src={"/leftPinecone.png"}
            alt=""
            width={20}
            height={20}
          ></Image>
          <Image
            src={"/rightPinecone.png"}
            alt=""
            width={20}
            height={20}
          ></Image>
        </div>
        <p className="text-[30px] font-bold mt-[20px] ml-[30px]">
          You're All Set 🔥
        </p>
        <p className="ml-[30px] text-[20px] opacity-[0.5]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
