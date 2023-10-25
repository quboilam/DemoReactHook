import React, { useState } from "react";
import {
  GetDataFromLocalStorage,
  SaveDataToLocalStorage,
} from "../../utils/utils";
import { toast } from "react-toastify";

export default function DemoSaveDataLocalStorage() {
  const [value, setValue] = useState<string>("Data");
  const handleClickButton = () => {
    if (!GetDataFromLocalStorage()) {
      SaveDataToLocalStorage(value);
      toast.success("Lưu data vào LocalStorage thành công!", {
        autoClose: 2000,
      });
    } else {
      toast.error("Đã có data trong LocalStorage!", {
        autoClose: 2000,
      });
    }
  };
  return (
    <div className="bg-white p-10 rounded text-gray-700 mt-5">
      <h2 className="text-xl">Demo Save Data To LocalStorage</h2>
      <div className=" grid grid-cols-2 gap-5 mt-2">
        <div className="col-span-2 md:col-span-1">
          <span className="p-2 border-[2px] inline-block text-2xl font-bold">
            {value}
          </span>
        </div>
        <div className="col-span-2 md:col-span-1">
          <button
            className="px-4 py-2 text-2xl rounded bg-gray-700 text-white"
            onClick={handleClickButton}
          >
            Click
          </button>
        </div>
      </div>
    </div>
  );
}
