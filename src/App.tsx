import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { increment, decrement, restart } from "./counterSlice";
import { RootState } from "./store";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (count < 5) {
      dispatch(increment());
    } else {
      (event.target as HTMLButtonElement).style.backgroundColor = "red";
      (event.target as HTMLButtonElement).style.color = "white";
      setTimeout(() => {
        (event.target as HTMLButtonElement).style.backgroundColor = "#1a1a1a";
      }, 1000);
    }
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (count > -5) {
      dispatch(decrement());
    } else {
      (event.target as HTMLButtonElement).disabled = true;
      (event.target as HTMLButtonElement).style.backgroundColor = "red";
      (event.target as HTMLButtonElement).style.color = "white";
      setTimeout(() => {
        (event.target as HTMLButtonElement).style.backgroundColor = "#1a1a1a";
      }, 1000);
    }
  };

  const handleReset = () => {
    dispatch(restart());
  };

  return (
    <div>
      <p>
        Counter : <span>{count}</span>
      </p>
      <br />
      <br />
      <button
        value="Increment"
        onClick={handleIncrement}
        aria-label="Increment value"
      >
        +
      </button>
      <button value="Reset" onClick={handleReset} aria-label="Reset value">
        Reset
      </button>
      <button
        value="Decrement"
        onClick={handleDecrement}
        aria-label="Decrement value"
      >
        -
      </button>
    </div>
  );
}

export default App;
