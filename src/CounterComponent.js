//완성코드
import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

const CounterComponent = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          증가
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          감소
        </button>
      </div>
    </div>
  );
};
export default CounterComponent;
