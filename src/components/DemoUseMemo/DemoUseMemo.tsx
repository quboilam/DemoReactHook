import { useState, useMemo } from "react";

function CalculateNumber({ a, b }: { a: number; b: number }) {
  const memoizedValue = useMemo(() => {
    console.log("calculating ...");
    return a + b;
  }, [a, b]);
  return memoizedValue;
}

export default function DemoUseMemo() {
  const [valueA, setValueA] = useState<number>(0);
  const [valueB, setValueB] = useState<number>(0);
  const [valueC, setValueC] = useState<number>(0);

  console.log("Render DemoUseMemo");
  return (
    <div className="bg-white p-10 rounded text-gray-700">
      <h2 className="text-xl">Demo useMemo</h2>
      <div className=" grid grid-cols-2 gap-5 mt-2">
        <div className="col-span-2 md:col-span-1">
          <span className="p-2 border-[2px] inline-block text-5xl font-bold">
            <CalculateNumber a={valueA} b={valueB} />
          </span>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div>Input 1</div>
          <input
            type="text"
            className="border w-full text-2xl"
            value={valueA}
            onChange={(e) => setValueA(Number(e.target.value))}
          />
          <div>Input 2</div>
          <input
            type="text"
            className="border w-full text-2xl"
            value={valueB}
            onChange={(e) => setValueB(Number(e.target.value))}
          />
          <div>Input 3</div>
          <input
            type="text"
            className="border w-full text-2xl"
            value={valueC}
            onChange={(e) => setValueC(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
