import React, { useRef, useState } from "react";
import Video from "../Video";

export default function DemoUseRef() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickIcon = () => {
    console.log(videoRef.current);
    if (isOpen) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white p-10 rounded text-gray-700 mt-5">
      <h2 className="text-xl">
        Demo useRef + forwardRef + useImperativeHandle
      </h2>
      <div className="mt-2 relative">
        <Video ref={videoRef} />
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute bottom-2 left-2 fill-white cursor-pointer"
            onClick={handleClickIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute bottom-2 left-2 stroke-white cursor-pointer"
            onClick={handleClickIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
