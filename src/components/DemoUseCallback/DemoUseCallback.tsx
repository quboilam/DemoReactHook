import React, { useCallback, useState } from "react";
import Button from "../Button";

export default function DemoUseCallback() {
  console.log("Render DemoUseCallback");
  const [value, setValue] = useState<number>(0);
  const handleClickButton = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);
  return (
    <div className="bg-white p-10 rounded text-gray-700">
      <h2 className="text-xl">Demo useCallback + React.memo</h2>
      <div className=" grid grid-cols-2 gap-5 mt-2">
        <div className="col-span-2 md:col-span-1">
          <span className="p-2 border-[2px] inline-block text-5xl font-bold">
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
      <div className="w-full mt-2">
        <Button handleClickButton={handleClickButton} />
      </div>
    </div>
  );
}
