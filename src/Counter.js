import React from 'react';

const Counter = ({count, increment, decrement, Delete}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => Delete()}>Delete</button>
    </div>
  )
}
function CounterApp() {
  const [counts, setCounts] = React.useState([0]);

  const addCounter = () => {
    const newCounts = counts.concat([0]);
    setCounts(newCounts);
  };

  const increment = (currentIndex) => {
    const newCounts = counts.map((value, index) => index === currentIndex ? value + 1 : value);
    setCounts(newCounts);
  };

  const decrement = (currentIndex) => {
    const newCounts = counts.map((value, index) => index === currentIndex ? value - 1 : value);
    setCounts(newCounts);
  };

  const Delete = (currentIndex) => {
    const newCounts = counts.filter((value, index) => index !== currentIndex);
    setCounts(newCounts);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {counts.map((ele, idx) => <Counter key={idx} count={ele} increment={() => increment(idx)} decrement={() => decrement(idx)} Delete={() => Delete(idx)} />)}

      <br /><br />
      <button onClick={addCounter}>Add Counter</button>
    </div>
  );
}

export default CounterApp