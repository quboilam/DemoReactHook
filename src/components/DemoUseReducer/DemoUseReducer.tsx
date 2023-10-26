import React, { useReducer } from "react";

const initalState = 0;

type ActionType = {
  type: string;
  payload: number;
};

function reducer(state: number, action: ActionType) {
  switch (action.type) {
    case "incresement": {
      return state + action.payload;
    }
    case "incresement2": {
      return state + action.payload;
    }
    case "decreasement": {
      return state - action.payload;
    }
    case "decreasement3": {
      return state - action.payload;
    }
    default: {
      throw new Error("Invalid action!!!");
    }
  }
}

export default function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div className="bg-white p-10 rounded text-gray-700 mt-5">
      <h2 className="text-xl">Demo useReducer</h2>
      <div className="mt-2">
        <button
          className="p-2 border-[2px] inline-block text-5xl font-bold border-r-0"
          onClick={() => dispatch({ type: "decreasement", payload: 1 })}
        >
          -
        </button>
        <span className="p-2 border-[2px] inline-block text-5xl font-bold">
          {state}
        </span>
        <button
          className="p-2 border-[2px] inline-block text-5xl font-bold border-l-0"
          onClick={() => dispatch({ type: "incresement", payload: 1 })}
        >
          +
        </button>
      </div>
      <div className="mt-2">
        <button
          className="p-2 border-[2px] inline-block text-5xl font-bold mr-5"
          onClick={() => dispatch({ type: "decreasement3", payload: 3 })}
        >
          -3
        </button>
        <button
          className="p-2 border-[2px] inline-block text-5xl font-bold"
          onClick={() => dispatch({ type: "incresement2", payload: 2 })}
        >
          +2
        </button>
      </div>
    </div>
  );
}
