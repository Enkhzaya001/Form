"use client";

import { Step1_Card } from "./_Components/Step1_card";
import { Step2_Card } from "./_Components/Step2_card";
import { Step3_Card } from "./_Components/Step3_Card";
import { Success } from "./_Components/Success";
import { useState } from "react";

const componentsArray = [Step1_Card, Step2_Card, Step3_Card, Success];

const Home = () => {
  const [count, setCount] = useState(0);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
    Date: "",
    AddImage: "",
  });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
    Date: "",
    AddImage: "",
  });

  console.log(form);
  const clearImage = () => {
    setForm((prev) => {
      return { ...prev, AddImage: "" };
    });
  };
  const handleBack = () => {
    setCount((prev) => prev - 1);
  };

  const valueChanger = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });

    setErrors((prev) => {
      return { ...prev, [name]: "" };
    });
  };

  const Stepper = componentsArray[count];

  return (
    <div>
      {/* {JSON.stringify(errors)} */}
      <div>
        <Stepper
          clearImage={clearImage}
          form={form}
          errors={errors}
          valueChanger={valueChanger}
          handleBack={handleBack}
          count={count}
          setErrors={setErrors}
          setCount={setCount}
        />
      </div>
    </div>
  );
};

export default Home;
