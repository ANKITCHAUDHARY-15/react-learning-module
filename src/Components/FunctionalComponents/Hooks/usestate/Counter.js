import React, { useState } from "react";

export default function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);
    }
  };
  const incrementFiveV2 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <div>
        <div>
          <div>Count :{count}</div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            increase count
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrement count
          </button>
          <button
            onClick={() => {
              setCount(initialCount);
            }}
          >
            reset count
          </button>
          <div>
            <button
              onClick={() => {
                setCount(count + 5);
              }}
            >
              increase 5
            </button>
            <span className="ml-4">By setCount(count + 5)</span>
          </div>
          <div className="bg-red color-white m-1 p-2">
            <button onClick={incrementFive}>increase 5</button>
            <span className="ml-4">By calling setCount(count+1) five time</span>
          </div>
          <div className="bg-green color-white m-1 p-2">
            <button onClick={incrementFiveV2}>increase 5</button>
            <span className="ml-4">
              By calling setCount((prevCount) =&gt; prevCount + 1) five time
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
