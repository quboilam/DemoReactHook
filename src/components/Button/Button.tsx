import React, { memo } from "react";

interface Props {
  handleClickButton?: () => void;
}

function Button({ handleClickButton }: Props) {
  console.log("Render Button");
  return (
    <button
      className="px-4 py-2 text-2xl rounded bg-gray-700 text-white"
      onClick={handleClickButton}
    >
      Click
    </button>
  );
}

export default memo(Button);
