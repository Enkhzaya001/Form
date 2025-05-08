"use client";
import Image from "next/image";
import { InputAll } from "./inputAll";
import { Button } from "./Button";
import { Header } from "./Header";
import { motion } from "motion/react";
import { Step3Input } from "./Step3Input";

export const Step3_Card = ({
  form,
  setErrors,
  setCount,
  errors,
  handleBack,
  count,
  valueChanger,
  clearImage,
}) => {
  const validateFormTree = () => {
    const newErrors = {};

    if (!form.Date) {
      newErrors.Date = "Date is required";
    }
    if (!form.AddImage) {
      newErrors.AddImage = "image is required";
    }
    setErrors((prev) => ({ ...prev, ...newErrors }));

    if (Object.keys(newErrors).length === 0) {
      setCount((prev) => prev + 1);
      return;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[50px] ">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: -10 }}
        transition={{ duration: 2 }}
      >
        <div className="w-[450px] h-[655px] bg-[#F3F4F6] rounded-xl flex flex-col justify-between items-center p-5">
          <div>
            <Header />
            <InputAll
              errors={errors}
              valueChanger={valueChanger}
              name={"Date"}
              inputName="Date of birth"
              placeHolder="--/--/--"
              type="date"
              value={form.Date}
            />
            {errors.Date && <p className="text-red-500">{errors.Date}</p>}
            <p className="ml-[20px]"></p>
            <Step3Input
              clearImage={clearImage}
              valueChanger={valueChanger}
              name={"AddImage"}
              value={form.AddImage}
            />
            {errors.AddImage && (
              <p className="text-red-500">{errors.AddImage}</p>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              text={"Back"}
              type={"prev"}
              bgColor="bg-white"
              onClick={handleBack}
            />
            <Button
              text={`Continue ${count + 1}/3 `}
              type={"next"}
              bgColor="bg-black"
              onClick={validateFormTree}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
