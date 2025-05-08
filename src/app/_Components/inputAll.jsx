export const InputAll = ({
  inputName,
  placeHolder,
  type,
  value,
  valueChanger,
  name,
  errors,
}) => {
  const isError = errors[name];
  return (
    <div className="ml-[15px] mt-[10px]">
      <div className="flex">
        <label>{inputName}</label>
        <span className="text-red-500">*</span>
      </div>
      <input
        name={name}
        value={value}
        onChange={valueChanger}
        type={type}
        placeholder={placeHolder}
        className={`w-[400px] h-[40px]  bg-[FFFFFF] border focus:outline-0.2 ${
          isError ? "border-red-500" : "border-[#00000050]"
        } rounded-sm px-[10px]`}
      />
      {/* {errors.firstName && <p className="text-red-500">{errors.firstName}</p>} */}
    </div>
  );
};
