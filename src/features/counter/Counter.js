import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button className="mh2" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="mh2" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button className="mh2" onClick={() => dispatch(reset())}>
        Reset
      </button>
      <p>Click Count {count}</p>
    </div>
  );
};

export default Counter;
