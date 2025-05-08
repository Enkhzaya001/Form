"use client";
import { InputAll } from "./inputAll";
import { Header } from "./Header";
import { Button } from "./Button";
import { motion } from "motion/react";

export const Step2_Card = ({
  handleBack,
  count,
  form,
  setErrors,
  setCount,
  errors,
  valueChanger,
}) => {
  const validateFormTwo = () => {
    const newErrors = {};

    // console.log(form.Email);

    if (!form.Email) {
      newErrors.Email = "Email is required";
    }
    if (form.Email && !/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(form.Email)) {
      newErrors.Email = "Please enter correct email";
    }
    if (!form.PhoneNumber) {
      newErrors.PhoneNumber = "Phone number is required";
    }
    if (form.PhoneNumber && form.PhoneNumber.length < 8) {
      newErrors.PhoneNumber = "Please enter your correct phone number";
    }
    if (!form.Password) {
      newErrors.Password = "Password is required";
    }
    if (
      form.Password &&
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        form.Password
      )
    ) {
      newErrors.Password = "Please enter your correct password";
    }
    if (!form.ConfirmPassword) {
      newErrors.ConfirmPassword = "Confirm Password is required";
    } else if (form.ConfirmPassword !== form.Password) {
      newErrors.ConfirmPassword = "Confirm Password is required";
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
        <div className="w-[450px] p-5 h-[655px] bg-[#F3F4F6] rounded-xl flex flex-col justify-between items-center">
          <div>
            <Header />
            <InputAll
              errors={errors}
              valueChanger={valueChanger}
              name={"Email"}
              inputName="Email"
              placeHolder="Please insert your Email "
              type="Email"
              value={form.Email}
            />
            {errors.Email && <p className="text-red-500">{errors.Email}</p>}
            <InputAll
              errors={errors}
              valueChanger={valueChanger}
              name={"PhoneNumber"}
              inputName="Phone number"
              placeHolder="Please insert your phone number"
              type="Number"
              value={form.PhoneNumber}
            />
            {errors.PhoneNumber && (
              <p className="text-red-500">{errors.PhoneNumber}</p>
            )}
            <InputAll
              errors={errors}
              valueChanger={valueChanger}
              name={"Password"}
              inputName="Password"
              placeHolder="Please insert your password"
              type="Password"
              value={form.Password}
            />
            {errors.Password && (
              <p className="text-red-500">{errors.Password}</p>
            )}
            <InputAll
              errors={errors}
              valueChanger={valueChanger}
              name={"ConfirmPassword"}
              inputName="Confirm password"
              placeHolder="Please insert your password"
              type="Password"
              value={form.ConfirmPassword}
            />
            {errors.ConfirmPassword && (
              <p className="text-red-500">{errors.ConfirmPassword}</p>
            )}
          </div>
          <div className="flex gap-5 ">
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
              onClick={validateFormTwo}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
