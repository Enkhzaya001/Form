"use client";

import { InputAll } from "./inputAll";
import { Header } from "./Header";
import { Button } from "./Button";
import { motion } from "motion/react";

export const Step1_Card = ({
  count,
  valueChanger,
  form,
  errors,
  setErrors,
  setCount,
}) => {
  console.log(valueChanger);

  const validateFormOne = () => {
    const newErrors = {};

    if (!form.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (form.firstName && form.firstName.length < 2) {
      newErrors.firstName = "Please enter your full name";
    }
    if (!form.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (form.lastName && form.lastName.length < 2) {
      newErrors.lastName = "Please enter your full lastname";
    }
    if (!form.userName) {
      newErrors.userName = "Username is required";
    }
    if (form.userName && form.userName.length < 2) {
      newErrors.userName = "Please enter your full Username";
    }
    // console.log(newErrors);

    setErrors((prev) => ({ ...prev, ...newErrors }));

    if (Object.keys(newErrors).length === 0) {
      setCount((prev) => prev + 1);
      return;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[50px] ">
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: -10 }}
        transition={{ duration: 2 }}
      >
        <div className=" flex flex-col  p-5 w-[450px] h-[655px] bg-[#F3F4F6] rounded-xl justify-between items-center ">
          <div>
            <Header />
            <InputAll
              errors={errors}
              name={"firstName"}
              valueChanger={valueChanger}
              value={form.firstName}
              inputName="First name"
              placeHolder="Please insert your first name "
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
            <InputAll
              errors={errors}
              name={"lastName"}
              value={form.lastName}
              valueChanger={valueChanger}
              inputName="Last name"
              placeHolder="Please insert your last name"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
            <InputAll
              errors={errors}
              name={"userName"}
              value={form.userName}
              valueChanger={valueChanger}
              inputName="Username"
              placeHolder="Please insert your Username"
            />
            {errors.userName && (
              <p className="text-red-500">{errors.userName}</p>
            )}
          </div>
          <Button
            onClick={validateFormOne}
            text={`Continue ${count + 1}/3`}
            type={"next"}
            bgColor={"bg-[#121316]"}
          />
        </div>
      </motion.div>
    </div>
  );
};
