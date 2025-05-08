import { ImageUp } from "lucide-react";
import { useState } from "react";

export const Step3Input = ({ valueChanger, name, clearImage }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    valueChanger(event);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const clearHandle = () => {
    setPreviewUrl(null);
    clearImage();
  };

  const drophandle = (event) => {
    console.log(event);
  };
  return (
    <div>
      <div className="flex ml-[20px] mt-[20px]">
        <label className="text-[20px]">Profile image</label>
        <span className="text-red-500">*</span>
      </div>
      <div className="flex flex-col  justify-center items-center mt-[50px]">
        <input
          id="profile-image"
          name={name}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className={`cursor-pointer border border-none rounded hidden `}
        />
      </div>
      <div className="relative flex justify-center items-center top-[50px]">
        {!previewUrl && (
          <label
            onDrop={drophandle}
            htmlFor="profile-image"
            className="block w-[350px] h-[150px] bg-[#bbbbbb]  text-black text-center rounded-xl cursor-pointer absolute z-10"
          >
            <ImageUp className="ml-[165px] mt-[50px]" />
            Browse or Drop image
          </label>
        )}
      </div>

      {previewUrl && (
        <div className="mb-[50px] flex justify-center" onDrop={drophandle}>
          <img
            src={previewUrl}
            alt="Preview"
            className="w-[350px] h-[150px] rounded-md shadow"
          />
          <button
            className="absolute text-red-500  right-[60px] bold cursor-pointer "
            onClick={clearHandle}
            onChange={handleChange}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};
